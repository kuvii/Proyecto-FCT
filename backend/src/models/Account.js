import { DataTypes, Model } from "sequelize"
import sequelize from "../sequelize/sequelize.js"
import Card from "./Card.js"
import Loan from "./Loan.js"
import LoanRequest from './LoanRequest.js'
import Movement from './Movement.js'


class Account extends Model {}

Account.init({
    role: {
        type: DataTypes.INTEGER
    },
    money: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    iban: {
        type: DataTypes.STRING(24)
    }
}, {sequelize, modelName: 'account', timestamps: false})

Account.Card = Account.hasMany(Card)
Account.Loan = Account.hasMany(Loan)
Account.LoanRequest = Account.hasMany(LoanRequest)
Account.Movement = Account.hasMany(Movement)

export default Account
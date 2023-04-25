import { DataTypes } from "sequelize"
import sequelize from "../database/sequelize.js"
import User from "./User.js"
import LoanRequest from "./LoanRequest.js"
import Movement from "./Movement.js"

const Account = sequelize.define('account', {
    money: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    iban: {
        type: DataTypes.STRING(24)
    }
})


Account.hasOne(User)
User.belongsTo(Account)

Account.hasMany(LoanRequest)
LoanRequest.belongsTo(Account)

Movement.hasMany(Account)
Account.belongsTo(Movement)

export default Account
import { DataTypes, Model } from "sequelize"
import sequelize from "../database/sequelize.js"

class Account extends Model {}

Account.init({
    money: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    iban: {
        type: DataTypes.STRING(24)
    }
}, {sequelize, modelName: 'account'})

export default Account
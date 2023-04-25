import { DataTypes } from "sequelize"
import sequelize from "../database/sequelize.js"

const account = sequelize.define('account', {
    money: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    iban: {
        type: DataTypes.STRING(24)
    }
})

export default account
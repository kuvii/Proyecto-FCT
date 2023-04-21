import { DataTypes } from "sequelize"

const AccountModel = {
    money: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    iban: {
        type: DataTypes.STRING(24)
    }
}

export default AccountModel
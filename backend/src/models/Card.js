import { DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";
import Account from "./Account.js";

const Card = sequelize.define('card', {
    holderName: {
        type: DataTypes.STRING(50),
    },
    number: {
        type: DataTypes.STRING(12)
    },
    type: {
        type: DataTypes.ENUM,
        values: ['credit', 'debit']
    },
    cvv: {
        type: DataTypes.STRING(3)
    },
    dateExpiration: {
        type: DataTypes.DATEONLY
    },
})

Card.hasMany(Account)
Account.belongsTo(Card)

export default Card
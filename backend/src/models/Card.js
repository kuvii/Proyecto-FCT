import { DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";

const card = sequelize.define('card', {
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

export default card
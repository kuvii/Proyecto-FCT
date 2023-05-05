import { DataTypes, Model } from "sequelize";
import sequelize from "../sequelize/sequelize.js";

class Card extends Model {}
Card.init( {
    holder_name: {
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
    date_expiration: {
        type: DataTypes.DATEONLY
    },
}, {sequelize, modelName: 'card'})

export default Card
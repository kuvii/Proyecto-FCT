import { DataTypes, Model } from "sequelize";
import sequelize from "../sequelize/sequelize.js";

class Movement extends Model {}
Movement.init({
    quantity: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM,
        values: ['add', 'substract'],
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    cardId: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {sequelize, modelName: 'movement'})

export default Movement
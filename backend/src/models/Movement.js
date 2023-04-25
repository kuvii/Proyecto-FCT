import { DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";

const movement = sequelize.define('movement', {
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
})

export default movement
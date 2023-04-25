import { DataTypes } from "sequelize";
import sequelize from "../database/sequelize";

const loan = sequelize.define('loan', {
    total: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    quantity: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

export default loan
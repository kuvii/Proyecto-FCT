import { DataTypes, Model } from "sequelize";
import sequelize from "../database/sequelize.js";

class Loan extends Model {}

Loan.init({
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
}, {sequelize, modelName: 'loan'})

export default Loan
import { DataTypes, Model } from "sequelize";
import sequelize from "../sequelize/sequelize.js";

class Loan extends Model {}

Loan.init({
    total: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM,
        values: ['accepted', 'pending', 'canceled']
    },
    description: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
}, {sequelize, modelName: 'loan'})

export default Loan
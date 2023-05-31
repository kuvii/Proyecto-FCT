import { DataTypes, Model } from "sequelize";
import sequelize from "../sequelize/sequelize.js";

class LoanRequest extends Model {}
LoanRequest.init({
    total: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM,
        values: ['accepted', 'pending', 'canceled']
    },
}, {sequelize, modelName: 'loanRequest'})

export default LoanRequest
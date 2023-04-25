import { DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";

const LoanRequest = sequelize.define('loanRequest', {
    total: {
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

export default LoanRequest
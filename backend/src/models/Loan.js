import { DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";
import Account from "./Account.js";
import LoanRequest from "./LoanRequest.js";

const Loan = sequelize.define('loan', {
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

Account.hasMany(Loan)
LoanRequest.hasMany(Loan)
Loan.belongsTo(Account)
Loan.belongsTo(LoanRequest)

export default Loan
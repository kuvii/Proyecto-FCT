import { DataTypes } from "sequelize";

const LoanRequestModel = {
    total: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER
    },
}

export default LoanRequestModel
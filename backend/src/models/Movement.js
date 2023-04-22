import { DataTypes } from "sequelize";

const MovementModel = {
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
}

export default MovementModel
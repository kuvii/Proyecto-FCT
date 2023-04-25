import { DataTypes } from "sequelize"
import sequelize from "../database/sequelize.js";
import User from "./User.js";

const Customer = sequelize.define('customer', {
        first_name: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        birthdate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(35),
            allowNull: false
        },
        dni: {
            type: DataTypes.STRING(9),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postal_code: {
            type: DataTypes.STRING(5),
            allowNull: false
        },
        address: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
})

User.hasOne(Customer)
Customer.belongsTo(User)

export default Customer
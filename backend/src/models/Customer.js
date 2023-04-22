import { DataTypes } from "sequelize"
// const regex_dni = /^\d{8}[a-zA-Z]$/
// const regex_phone = /\d{3}-\d{3}-\d{4}/ 

const CustomerModel = {
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
}


export default CustomerModel
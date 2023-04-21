import Customer from './Customer.js'

const UserModel = (sequelize, DataTypes) => 
    sequelize.define('User', {
        role: {
            type: DataTypes.INTEGER
        },
    })


export default UserModel
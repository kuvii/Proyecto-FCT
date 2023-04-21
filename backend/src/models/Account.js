
const AccountModel = (sequelize, DataTypes) => 
    sequelize.define('Account', {
        money: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        iban: {
            type: DataTypes.STRING(24)
        }
    })

export default AccountModel
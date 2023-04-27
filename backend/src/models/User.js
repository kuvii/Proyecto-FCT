import { DataTypes, Model } from "sequelize"
import sequelize from "../database/sequelize.js";
import Account from "./Account.js";

class User extends Model {}
User.init({
    role: {
        type: DataTypes.INTEGER
    },
}, {sequelize, modelName: 'user', timestamps: false})

User.Account = User.hasOne(Account)

export default User
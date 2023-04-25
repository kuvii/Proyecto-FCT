import { DataTypes } from "sequelize"
import sequelize from "../database/sequelize.js";

const User = sequelize.define('user', {
    role: {
        type: DataTypes.INTEGER
    },
})



export default User
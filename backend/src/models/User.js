import { DataTypes } from "sequelize"
import sequelize from "../database/sequelize.js";

const user = sequelize.define('user', {
    role: {
        type: DataTypes.INTEGER
    },
})

export default user
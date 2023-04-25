import { DataTypes } from "sequelize"
import sequelize from "../database/sequelize"

const user = sequelize.define('user', {
    role: {
        type: DataTypes.INTEGER
    },
})

export default user
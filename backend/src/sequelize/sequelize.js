import { Sequelize } from "sequelize";
import env from '../config/config.js'

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASW, {
    host: env.DB_HOST ,
    dialect: 'mysql',
    logging: process.env.NODE_ENV = 'development' ?  console.log: ''
})

export default sequelize
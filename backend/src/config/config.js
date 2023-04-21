import {config} from 'dotenv'

config()

const DB_NAME = process.env.DB_NAME
const DB_HOST = process.env.DB_HOST
const DB_PORT = parseInt(process.env.DB_PORT, 10)
const DB_USER = process.env.DB_USER
const DB_PASW = process.env.DB_PASW

const SERVER_PORT = parseInt(process.env.SERVER_PORT, 10)

const SEQUELIZE_DIALECT = process.env.SEQUELIZE_DIALECT

const env = {
    DB_NAME,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASW,
    SERVER_PORT,
    SEQUELIZE_DIALECT
}

export default env
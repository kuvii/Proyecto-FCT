import {config} from 'dotenv'

config()

const DB_NAME = process.env.DB_NAME
const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_USER = process.env.DB_USER
const DB_PASW = process.env.DB_PASW

const SEQUELIZE_DIALECT = process.env.SEQUELIZE_DIALECT

export const envVariables = {
    DB_NAME,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASW,
    SEQUELIZE_DIALECT
}
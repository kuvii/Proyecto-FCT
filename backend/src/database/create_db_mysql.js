import mysql from 'mysql2/promise'
import env from '../config/config.js'
import { constants } from '../utils/constants.js'

const createDB_mysql = async () => {
    try {
        const connection = await mysql.createConnection({
            host: env.DB_HOST,
            port: env.DB_PORT,
            user: env.DB_USER,
            password: env.DB_PASW
        })
        await connection.query(constants.queries_mysql.CREATE_DB_QUERY)
    } catch (error) {
        console.error('[CreateDB]: Error creating DB', error)
    }
}

export default createDB_mysql
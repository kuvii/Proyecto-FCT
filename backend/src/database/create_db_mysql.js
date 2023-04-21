import mysql from 'mysql2/promise'
import {envVariables} from '../config/config.js'
import { constants } from '../utils/constants.js'

const createDB_mysql = async () => {
    try {
        const connection = await mysql.createConnection({
            host: envVariables.DB_HOST,
            port: envVariables.DB_PORT,
            user: envVariables.DB_USER,
            password: envVariables.DB_PASW
        })
        await connection.query(constants.queries_mysql.CREATE_DB_QUERY)
    } catch (error) {
        console.error('[CreateDB]: Error creating DB', error)
    }
}

export default createDB_mysql
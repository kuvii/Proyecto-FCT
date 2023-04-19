import Sequelize from 'sequelize'
import createDB_mysql from './create_db_mysql.js'
import {envVariables} from '../config/config.js'

const sequelize = new Sequelize(envVariables.DB_NAME, envVariables.DB_USER, envVariables.DB_PASW, {
    host: envVariables.DB_HOST ,
    dialect: 'mysql'
})

const testConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection stablished')
    } catch (error) {
        if (error.original.errno === 1049){
            createDB_mysql()
            initDatabase()
            return
        }
        console.error('[testConn]:Connection refused', error)
    }
}

const initDatabase = async () => {
    try {
        await testConnection()
    } catch (error) {
        console.error('[initDB]: Error starting DB', error)
    }
}

export const connection = {
    initDatabase
}
import createDB_mysql from './create_db_mysql.js'
import tableManager from './tableManager.js'
import sequelize from './sequelize.js'

import { customerServices } from '../services/customerServices.js'

const testConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('[INFO]: Connection stablished')
    } catch (error) {
        if (error.original.errno === 1049){
            createDB_mysql()
            initDatabase()
            return
        }
        console.error('[TestConn]:Connection refused', error)
    }
}

const initDatabase = async () => {
    try {
        await testConnection()
        tableManager.initManager(sequelize)
        await sequelize.sync({force: true})
        customerServices.findOneCustomer()
        customerServices.createNewCustomer()
    } catch (error) {
        console.error('[InitDB]: Error starting DB', error)
    }
}

export const connection = {
    initDatabase
}
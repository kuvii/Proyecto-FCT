import Sequelize from 'sequelize'

import {envVariables} from '../config/config.js'

import createDB_mysql from './create_db_mysql.js'

import CustomerModel from '../models/Customer.js'

const sequelize = new Sequelize(envVariables.DB_NAME, envVariables.DB_USER, envVariables.DB_PASW, {
    host: envVariables.DB_HOST ,
    dialect: 'mysql'
})

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
        const Customer = CustomerModel(sequelize, Sequelize)
        await sequelize.sync({force: true})
    } catch (error) {
        console.error('[InitDB]: Error starting DB', error)
    }
}

export const connection = {
    initDatabase
}
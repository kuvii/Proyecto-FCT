import createDB_mysql from './create_db_mysql.js'
import sequelize from '../sequelize/sequelize.js'
import { adminServices } from '../admin/services/adminServices.js'

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

const initAdminUser = {
    first_name: "Admin",
    last_name: "test",
    birthdate: "2003-09-11",
    password: "1234",
    email: "admin@admin.com",
    dni: "12345678A",
    phone: "123123456",
    postal_code: "12345",
    address: "calle admin",
    account: {
        role: 1,
        money: 0.0,
        iban: 23456,
    }
}

const initDatabase = async () => {
    try {
        await testConnection()
        await sequelize.sync({force: true})
        await adminServices.createNewCustomer(initAdminUser)
    } catch (error) {
        console.error('[InitDB]: Error starting DB', error)
    }
}

export const connection = {
    initDatabase
}
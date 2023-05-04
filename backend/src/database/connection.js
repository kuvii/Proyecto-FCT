import createDB_mysql from './create_db_mysql.js'
import sequelize from './sequelize.js'

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
        await sequelize.sync({force: true})
    } catch (error) {
        console.error('[InitDB]: Error starting DB', error)
    }
}

export const connection = {
    initDatabase
}
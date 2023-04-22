import env from '../config/config.js'

const queries_mysql = {
    CREATE_DB_QUERY: `CREATE DATABASE IF NOT EXISTS ${env.DB_NAME};`
}

const constants = {
    queries_mysql
}

export default constants
import express from 'express'
import { createServer } from 'http'

import cors from 'cors'

import env from '../config/config.js'
import {connection} from '../database/connection.js'
import router from '../routes/customerRoutes.js'

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

const server = createServer(app)

const runServer = async () => {
    await connection.initDatabase()

    server.listen(env.SERVER_PORT, () => {
        console.log(`[INFO]: Server started on ${server.address().port}`)
    })
}

const stopServer = () => {
    console.log(`[INFO]: Closing server`)
    server.close()
}

export {
    runServer,
    stopServer
}
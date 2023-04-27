import express from 'express'
import { createServer } from 'http'

import cors from 'cors'

import env from '../config/config.js'
import {connection} from '../database/connection.js'
import customerRouter from '../routes/customerRoutes.js'
import adminRouter from '../routes/adminRoutes.js'

const app = express()

app.use(cors(
    {origin:'*'}
))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(customerRouter)
app.use(adminRouter)

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
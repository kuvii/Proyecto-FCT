import express from 'express'
import { createServer } from 'http'

import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'

import env from '../config/config.js'
import {connection} from '../database/connection.js'
import customerIndex from '../customer/index.js'
import adminIndex from '../admin/index.js'

const app = express()

app.use(cors(
    {origin:'*'}
))
app.use(compression())
app.use(helmet())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(customerIndex.customerRouter)
app.use(adminIndex.adminRouter)

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
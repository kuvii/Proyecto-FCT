import {runServer, stopServer} from './server/server.js'

const stopApp = () => {
    console.log('\nReceived kill signal, shutting down...')
    stopServer()
    process.exit(0)
}

process.on('SIGINT', () => stopApp())
process.on('SIGTERM', () => stopApp())
process.on('exit', () => console.log('Exiting Express Server'))


runServer()
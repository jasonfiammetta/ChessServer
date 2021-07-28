const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const requestLogger = require('./lib/request_logger.js')

// const ws = require('ws')

const startup = require('./app/startup/startup.js')
const { startWSServer } = require('./app/websocket/ws.js')

const port = 3003
const clientPort = 3000

const app = express()


app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${clientPort}` }))
// app.use(cors({ origin: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(requestLogger)

startup(app)

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
const wss = startWSServer()
server.on('upgrade', function(request, socket, head, ){
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request)
  })
})

module.exports = app

const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const requestLogger = require('./lib/request_logger.js')

const ws = require('ws')

const startup = require('./app/startup/startup.js')

const port = 3003
const clientPort = 3000

const app = express()


app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${clientPort}` }))
// app.use(cors({ origin: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(requestLogger)

startup(app)

const wss = new ws.Server({ noServer: true }) // difference between express server { server: app } and { noServer: true } ?
// when does express app emit connection event?
wss.on('connection', (ws) => {

  ws.isAlive = true // use counter instead to give retries?
  ws.on('pong', () => { ws.isAlive = true })
  // handle message // what other events can be handled?
  ws.on('message', (message) => {
    console.log('message received:', message)
    //do stuff with message
    // move this function elsewhere
      // set client state:
        // available for game
        // playing
        // sending move
        // game ended
    ws.send(`received message at ${new Date()}`) // is it expensive to do this on every message?
  })
  // send welcome message immediately upon connecting
  console.log('sending welcome message')
  ws.send('Hi, connected to websocket server')
})
// server.on('upgrade', ) ?

// switch to cron later
// setInterval(() => {
//   console.log('pinging clients')
//   wss.clients.forEach((ws) => {
//     if(!ws.isAlive) {
//       console.log('terminating ws') // any identifying attribute of ws? name, origin?
//       return ws.terminate()
//     } // seems harsh to destroy connection at one failed ping
//     ws.isAlive = false
//     ws.ping()
//   })
// }, 30000)

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

module.exports = app

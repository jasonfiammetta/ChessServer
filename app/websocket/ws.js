const ws = require('ws')

const startWSServer = function () { //noServer by default, add param for port/server?
  const wss = new ws.Server({ noServer: true })
  wss.on('connection', (ws) => {
    // ws.isAlive = true
    // ws.on('pong', () => { ws.isAlive = true })

    ws.on('message', (message) => {
      console.log('message received:', message)
      //do stuff with message
      // move this function elsewhere
        // set client state:
          // available for game
          // playing
          // sending move
          // game ended
      // ws.send(`received message at ${new Date()}`) // is it expensive to do this on every message?
      // ws.send(message)
      broadcast(wss, message)
    })
    // send welcome message immediately upon connecting
    console.log('sending welcome message')
    ws.send('Hi, connected to websocket server')
  })
  return wss
}

// can I find a way to not need to include wss in params
const broadcast = function (wss, message) {
  wss.clients.forEach(client => {
    if (client.readyState === ws.OPEN) {
      client.send(message)
    }
  })
}

module.exports = {
  startWSServer,
  broadcast,
}

// const wss = new ws.Server({ noServer: true }) // difference between express server { server: app } and { noServer: true } ?
// when does express app emit connection event?
// wss.on('connection', (ws) => {
//
//   ws.isAlive = true // use counter instead to give retries?
//   ws.on('pong', () => { ws.isAlive = true })
//   // handle message // what other events can be handled?
//   ws.on('message', (message) => {
//     console.log('message received:', message)
//     //do stuff with message
//     // move this function elsewhere
//       // set client state:
//         // available for game
//         // playing
//         // sending move
//         // game ended
//     ws.send(`received message at ${new Date()}`) // is it expensive to do this on every message?
//   })
//   // send welcome message immediately upon connecting
//   console.log('sending welcome message')
//   ws.send('Hi, connected to websocket server')
// })
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

const express = require('express')
const router = express.Router()

const { broadcast } = require('../websocket/ws.js')

router.get('/', (req, res, next) => {
  res.send('<p>Hello, welcome!</p>')
})

router.get('/connect', (req, res, next) => {
  res.send(`<p>You're connected!</p>`)
})

router.get('/broadcast', (req, res, next) => {
  // change to POST method to do broadcast(req.body.message)
  broadcast('hello all')
  res.send(`<p>Broadcasting message to all clients!</p>`)
})

module.exports = router

const express = require('express')
const router = express.Router()

// test messages, move actual message queue elsewhere
const messages = ['successfully', 'received', 'server messages']

router.get('/recent-messages', (req, res, next) => {
  // later, send only the X most recent messages
  res.json({ messages })
})

router.post('/send-message', (req, res, next) => {
  const message = req.body.message
  // later, add name of sender
  console.log('Message:', message)
  // add message to message queue
  messages.push(message)
  res.sendStatus(204)
})

router.post('/ready-for-game', (req, res, next) => {
  // add user to list of available players


  res.send(`<p>You are now available for a game</p>`)
})

router.post('/start-game', (req, res, next) => {
  let msg = 'Checking if game is available'
  // check if another player is available

  // initiate game or waiting state

  res.send(`<p>${msg}</p>`)
})

// allow for spectating ?
router.post('/join-game', (req, res, next) => {
  res.send(`<p>You have joined a game</p>`)
})

module.exports = router

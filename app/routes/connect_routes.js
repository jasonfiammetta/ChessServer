const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('<p>Hello, welcome!</p>')
})

router.get('/connect', (req, res, next) => {
  res.send(`<p>You're connected!</p>`)
})

module.exports = router

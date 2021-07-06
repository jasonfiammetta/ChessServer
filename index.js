const express = require('express')
const bodyParser = require('body-parser')
const requestLogger = require('./lib/request_logger.js')

const startup = require('./app/startup/startup.js')

const port = 3003

const app = express()
// app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${port}` }))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(requestLogger)

// const connectRoutes = require('./app/routes/connect.js')
// app.use(connectRoutes)

startup(app)


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

module.exports = app

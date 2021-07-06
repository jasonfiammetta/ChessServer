
const connectionRoutes = require('../routes/connect_routes.js')
const chessgameRoutes = require('../routes/chessgame_routes.js')

module.exports = function (app) {
  // app.use(routes)
  app.use(connectionRoutes)
  app.use(chessgameRoutes)

  // database

}

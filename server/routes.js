/**
 * Main application routes
 */

'use strict'

const path = require('path')
const config = require('./config/environment')

module.exports = function (app) {
  // Insert routes below

  app.use('/api/articles', require('./api/article'))
  app.use('/api/carts', require('./api/cart'))

  // All undefined asset or api routes should return a 404
  app
    .route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get((req, res) => res.status(404).end())

  app.route('/*').get((req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/static/index.html'))
  })
}

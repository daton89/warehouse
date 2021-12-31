/**
 * Express configuration
 */

'use strict'

const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const path = require('path')
const config = require('./environment')
const mongoose = require('mongoose')
const cors = require('cors')

module.exports = function (app) {
  var env = app.get('env')

  app.use(compression())
  app.use(
    bodyParser.json({
      strict: true,
      inflate: true,
      limit: '5mb',
    })
  )
  app.use(
    bodyParser.urlencoded({
      extended: false,
      inflate: true,
      limit: '5mb',
      parameterLimit: 1000,
    })
  )
  app.use(methodOverride())

  if ('production' === env) {
    app.use('/', express.static(path.join(config.root, 'dist', 'static')))

    app.use(morgan('dev')) // TODO add custom token to show the username
  }

  if ('development' === env || 'test' === env) {
    app.use('/', express.static(path.join(config.root, 'dist', 'static')))

    app.use(morgan('dev')) // TODO add custom token to show the username

    app.options('*', cors()) // TODO config that only from nginx can receive req (suca)
    app.use(cors())
  }
}

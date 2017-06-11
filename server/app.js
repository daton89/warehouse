/**
 * Main application file
 */

'use strict';

const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const config = require('./config/environment');
const http = require('http');
const path = require('path');
// const cors = require('cors');

// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function (err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

// Populate databases with sample data
if (config.seedDB) {
  require('./config/seed');
}

// Setup server
var app = express();
var server = http.createServer(app);
// var socketio = require('socket.io').listen(server, {
//     // serveClient: config.env !== 'production',
//     serveClient: false,
//     path: '/socket.io'
// });
// require('./config/socketio')(socketio);

require('./config/express')(app);

require('./routes')(app);

// Start server
function startServer() {
  app.warehouse = server.listen(config.port, config.ip, function () {
    console.log(`

    `);
    console.log('listening on %d, in %s mode on ip %s', config.port, app.get('env'), config.ip);
  });
}

setImmediate(startServer);

// Expose app
module.exports = app;

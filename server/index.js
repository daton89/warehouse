'use strict';

// Set default node environment to development

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var env = process.env.NODE_ENV;

if (env === 'development' || env === 'test') {
  // Register the Babel require hook
  // require('babel-core/register');

  // Start the PrettyError hook
  // require('pretty-error').start();
}

// Export the application
module.exports = require('./app');

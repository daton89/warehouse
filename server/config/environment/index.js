'use strict';

const env = process.env.NODE_ENV;
const path = require('path')

console.log('Loading environment:', env.toUpperCase());

const config = {
  production: {
    root: path.resolve(__dirname, '../../../'),
    mongo: {
      uri: 'mongodb://localhost/warehouse-production'
    },
    port: process.env.PORT || 9000,
    seedDB: false
  },
  development: {
    root: path.resolve(__dirname, '../../../'),
    mongo: {
      uri: 'mongodb://localhost/warehouse-development'
    },
    port: process.env.PORT || 9000,
    seedDB: false
  },
  test: {
    root: path.resolve(__dirname, '../../../'),
    mongo: {
        uri: 'mongodb://localhost/warehouse-test'
    },
    port: process.env.PORT || 9000,
    seedDB: false
  }
}

module.exports = config[env];

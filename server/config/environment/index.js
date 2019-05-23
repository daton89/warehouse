"use strict";

const env = process.env.NODE_ENV;
const path = require("path");

console.log("Loading environment:", env.toUpperCase());

const config = {
  production: {
    root: path.resolve(__dirname, "../../../"),
    mongo: {
      uri: "mongodb://localhost/warehouse-production",
      options: {
        useMongoClient: true
      }
    },
    port: process.env.PORT || 9999,
    seedDB: false
  },
  development: {
    root: path.resolve(__dirname, "../../../"),
    mongo: {
      uri:
        "mongodb://warehouse:S9KwZIMoQFDebR21@daton-development-shard-00-00-nidnc.mongodb.net:27017,daton-development-shard-00-01-nidnc.mongodb.net:27017,daton-development-shard-00-02-nidnc.mongodb.net:27017/warehouse-development?ssl=true&replicaSet=daton-development-shard-0&authSource=admin&retryWrites=true",
      options: {
        useNewUrlParser: true
      }
    },
    port: process.env.PORT || 9999,
    seedDB: false
  },
  test: {
    root: path.resolve(__dirname, "../../../"),
    mongo: {
      uri: "mongodb://localhost/warehouse-test",
      options: {
        useMongoClient: true
      }
    },
    port: process.env.PORT || 9999,
    seedDB: false
  }
};

module.exports = config[env];

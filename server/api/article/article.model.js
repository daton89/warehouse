'use strict';

const mongoose = require('mongoose');

const article = mongoose.Schema({

}, {strict: false});

module.exports = mongoose.model('Article', article);

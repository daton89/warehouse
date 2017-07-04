'use strict';

const mongoose = require('mongoose')

const article = mongoose.Schema({

    name: { type: String, required: true },
    code: String,
    company: String,
    quantity: Number,
    category: String,
    type: String,
    nicotine: Number,
    format: String,
    price: Number,
    description: String,
    deleted: { type: Boolean, default: false },
    createdOn: { type: Date, default: Date.now() },
    updatedOn: { type: Date, default: Date.now() }

}, { strict: false })

module.exports = mongoose.model('Article', article)
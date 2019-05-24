'use strict';

const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')

const article = mongoose.Schema({

    name: { type: String, required: true },
    code: String,
    company: String,
    qty: Number,
    category: String,
    type: String,
    tags: { type: Array },
    nicotine: Number,
    format: String,
    price: Number,
    description: String,
    deleted: { type: Boolean, default: false },
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now }

}, { strict: false })

article.plugin(paginate)

module.exports = mongoose.model('Article', article)

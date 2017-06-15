'use strict';

const mongoose = require('mongoose')

const cart = new mongoose.Schema({

    products: [{
        article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article', required: true },
        qty: { type: Number, required: true }
    }],
    price: { type: Number, required: true },
    createdOn: { type: Date, default: Date.now() },
    checkout: { type: Boolean, default: false }
})

module.exports = mongoose.model('Cart', cart)
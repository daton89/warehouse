'use strict';

const Cart = require('./cart.model')
const Article = require('../article/article.model')

module.exports = {

    read(req, res) {

        Cart.find({ checkout: false })
            .sort('-createdOn')
            .limit(1)
            .populate('products.article')
            .then((cart) => res.status(200).json(cart[0]))
            .catch((err) => res.status(500).json(err))

    },

    readById(req, res) {

        Cart.findById(req.params.id)
            .populate('products.article')
            .then((cart) => res.status(200).json(cart))
            .catch((err) => res.status(500).json(err))

    },

    create(req, res) {

        Cart.create({ products: [{ article: req.body, qty: 1 }], price: req.body.price })
            .then((cart) => res.status(200).json(cart))
            .catch((err) => res.status(500).json(err))

    },

    update(req, res) {

        Cart.findByIdAndUpdate(req.params.id, { $push: { products: { article: req.body, qty: 1 } }, $inc: { price: req.body.price } })
            .then((cart) => res.status(200).json(cart))
            .catch((err) => res.status(500).json(err))

    },

    checkout(req, res) {

        Cart.findById(req.params.id)
            .populate('products.article')
            .then((cart) => {

                let products = []

                cart.products.forEach((product) => {

                    products.push(Article.findByIdAndUpdate(product.article._id, { $inc: { qty: -product.qty } }))

                })

                return Promise.all(products)

            })
            .then((cart) => res.status(200).json(cart))
            .catch((err) => res.status(500).json(err))

    }

}
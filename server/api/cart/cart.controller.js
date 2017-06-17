'use strict';

const Cart = require('./cart.model')
const Article = require('../article/article.model')
const _ = require('lodash')

module.exports = {

    read(req, res) {

        Cart.find({ checkout: false })
            .sort('-createdOn')
            .limit(1)
            .populate('products.article')
            .then(cart => {
              console.log(cart);
              if (_.isEmpty(cart)) {
                return res.status(404).json({})
              } else {
                return cart
              }
            })
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

    remove(req, res) {
        Cart.remove({ _id: req.params.id })
            .then((cart) => res.status(200).json(cart))
            .catch((err) => res.status(500).json(err))
    },

    checkout(req, res) {

        Cart.findById(req.params.id)
            .populate('products.article')
            .then((cart) => {

                let decrementArticles = []

                cart.products.forEach((product) => {

                    decrementArticles.push(Article.findByIdAndUpdate(product.article._id, { $inc: { qty: -product.qty } }))

                })

                return Promise.all(decrementArticles)
                // .then((promises) => {



                // })

            })
            .then((cart) => res.status(200).json(cart))
            .catch((err) => res.status(500).json(err))

    }

}

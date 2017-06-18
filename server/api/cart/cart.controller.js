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

    Cart.create({
      products: [{ article: req.body.article, qty: req.body.qty }],
      price: req.body.article.price
    })
      .then((cart) => res.status(200).json(cart))
      .catch((err) => res.status(500).json(err))

  },

  push(req, res) {

    let article = req.body.article
    let qty = req.body.qty
    let price = parseInt(article.price * qty, 10)

    let upsert = {
      $push: {
        products: {
          article: article,
          qty: qty
        }
      },
      $inc: {
        price: price
      }
    }

    Cart.findByIdAndUpdate(
      req.params.id,
      upsert,
      { // options
        new: true
      })
      .populate('products.article')
      .then((cart) => {

        res.status(200).json(cart)

      })
      .catch((err) => res.status(500).json(err))

  },

  pull(req, res) {

    let product = req.body

    Cart.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          products: {
            _id: product._id
          }
        },
        $inc: {
          price: -parseInt(product.article.price * product.qty, 10)
        }
      }, { new: true })
      .then((cart) => res.status(200).json(cart))
      .catch((err) => res.status(500).json(err))
  },

  delete(req, res) {
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

      })
      .then()
      .then((cart) => res.status(200).json(cart))
      .catch((err) => res.status(500).json(err))

  }

}

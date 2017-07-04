'use strict';

const Cart = require('./cart.model')
const Article = require('../article/article.model')
const _ = require('lodash')
const json2csv = require('json2csv');
const fs = require('fs');

module.exports = {

  read(req, res) {

    Cart.find({
      checkout: false
    })
      .sort('-createdOn')
      .limit(1)
      .populate('products.article')
      .then(cart => {
        if (_.isEmpty(cart)) {

          return Cart.create({
            products: [],
            price: 0
          }).then(cart => [cart])

        } else {
          return cart
        }
      })
      .then((cart) => res.status(200).json(cart[0]))
      .catch((err) => {
        console.error(err);
        res.status(500).json(err)
      })

  },

  readById(req, res) {

    Cart.findById(req.params.id)
      .populate('products.article')
      .then((cart) => res.status(200).json(cart))
      .catch((err) => res.status(500).json(err))

  },

  create(req, res) {

    Cart.create({
      products: [{
        article: req.body.article,
        qty: req.body.qty
      }],
      price: parseFloat(req.body.article.price).toFixed(2)
    })
      .then(cart => {
        return Cart.findById(cart._id)
          .populate('products.article')
          .lean()
      })
      .then((cart) => res.status(200).json(cart))
      .catch((err) => res.status(500).json(err))

  },

  push(req, res) {

    let article = req.body.article
    let qty = req.body.qty
    let price = parseFloat(article.price * qty).toFixed(2)

    let upsert = {
      $push: {
        products: {
          article: article,
          qty: qty
        }
      },
      $inc: {
        price: price
      },
      updatedOn: Date.now()
    }

    Cart.findByIdAndUpdate(
      req.params.id,
      upsert, { // options
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
      req.params.id, {
        $pull: {
          products: {
            _id: product._id
          }
        },
        $inc: {
          price: -parseFloat(product.article.price * product.qty).toFixed(2)
        },
        updatedOn: Date.now()
      }, {
        new: true
      })
      .then((cart) => res.status(200).json(cart))
      .catch((err) => res.status(500).json(err))
  },

  delete(req, res) {
    Cart.remove({
      _id: req.params.id
    })
      .then((cart) => res.status(200).json(cart))
      .catch((err) => res.status(500).json(err))
  },

  setQuantity(req, res) {
    Cart.findOneAndUpdate({
      _id: req.params.id,
      'products._id': req.body._id
    }, {
        $set: {
          'products.$.qty': req.body.qty
        }
      }, {
        new: true
      })
      .populate('products.article')
      .then((cart) => res.status(200).json(cart))
      .catch((err) => res.status(500).json(err))
  },

  checkout(req, res) {

    Cart.findByIdAndUpdate(
      req.params.id, {
        checkout: true,
        checkoutOn: Date.now()
      })
      .populate('products.article')
      .then((cart) => {

        let decrementArticles = []

        cart.products.forEach((product) => {

          decrementArticles.push(
            Article.findByIdAndUpdate(
              product.article._id, {
                $inc: {
                  qty: -product.qty
                }
              }))

        })

        return Promise.all(decrementArticles)

      })
      .then((cart) => res.status(200).json(cart))
      .catch((err) => res.status(500).json(err))

  },

  async export(req, res, next) {
    var fields = ['car', 'price', 'color'];

    let carts = await Cart.find(req.body).lean()


    var myCars = [
      {
        "car": "Audi",
        "price": 40000,
        "color": "blue"
      }, {
        "car": "BMW",
        "price": 35000,
        "color": "black"
      }, {
        "car": "Porsche",
        "price": 60000,
        "color": "green"
      }
    ];
    var csv = json2csv({ data: myCars, fields: fields, del: ',' });

    fs.writeFile('file.csv', csv, function (err) {
      if (err) throw err;
      console.log('file saved');
    });
  }

}

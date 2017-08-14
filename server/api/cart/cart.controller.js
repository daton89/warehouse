'use strict';

const Cart = require('./cart.model')
const Article = require('../article/article.model')
const _ = require('lodash')
const json2csv = require('json2csv');
const fs = require('fs');
const moment = require('moment')

module.exports = {

    index(req, res, next) {
        return Cart.find()
            .populate('products.article')
            .then((carts) => res.status(200).json(carts))
            .catch((err) => res.status(500).json(err))
    },

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

    // CART SCHEMA
    // products: [{
    //   article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article', required: true },
    //   qty: { type: Number, required: true }
    // }],
    // price: { type: Number, required: true },
    // createdOn: { type: Date, default: Date.now() },
    // updatedOn: { type: Date, default: Date.now() },
    // checkout: { type: Boolean, default: false },
    // checkoutOn: { type: Date }

    // ARTICLE SCHEMA
    // name: { type: String, required: true },
    // code: String,
    // company: String,
    // quantity: Number,
    // category: String,
    // type: String,
    // nicotine: Number,
    // format: String,
    // price: Number,
    // description: String,
    // deleted: { type: Boolean, default: false },
    // createdOn: { type: Date, default: Date.now() },
    // updatedOn: { type: Date, default: Date.now() }

    async exportCSV(req, res, next) {

        const fields = ['name', 'company', 'type', 'category', 'quantity', 'price']

        try {



            const data = await Cart.aggregate([{
                        //   $match: {
                        //     "checkoutOn": {
                        //       $gte: ISODate("2013-04-10T00:00:00.000Z"),
                        //       $lt: ISODate("2013-04-11T00:00:00.000Z")
                        //     },
                        //     checkout: true
                        //   }
                        // },
                        // {
                        "$unwind": "$products"
                    },
                    {
                        "$project": {
                            "_id": 0,
                            "article": "$products.article",
                            "qty": "$products.qty",
                            "checkoutOn": "$checkoutOn"
                        }
                    },
                    {
                        "$lookup": {
                            from: "articles",
                            localField: "article",
                            foreignField: "_id",
                            as: "sells"
                        }
                    },
                    {
                        "$unwind": "$sells"
                    },
                    {
                        "$project": {
                            "_id": "$sells._id",
                            "name": "$sells.name",
                            "company": "$sells.company",
                            "type": "$sells.type",
                            "category": "$sells.category",
                            "price": "$sells.price",
                            "qty": "$qty",
                            "checkoutOn": "$checkoutOn",
                            "total": {
                                "$multiply": ["$qty", "$sells.price"]
                            }
                        }
                    },
                    {
                        "$group": {
                            // "_id": "$_id",
                            _id: { _id: "$_id", month: { $month: "$checkoutOn" }, day: { $dayOfMonth: "$checkoutOn" }, year: { $year: "$checkoutOn" } },
                            "total": {
                                "$sum": "$total"
                            },
                            "qty": {
                                "$sum": "$qty"
                            }
                        }
                    },
                    {
                        $project: {
                            _id: "$_id._id",
                            month: "$_id.month",
                            day: "$_id.day",
                            year: "$_id.year",
                            total: "$total",
                            qty: "$qty"

                        }
                    }, {
                        "$lookup": {
                            from: "articles",
                            localField: "_id",
                            foreignField: "_id",
                            as: "article"
                        }
                    },
                    {
                        "$unwind": "$article"
                    },
                    {
                        "$project": {
                            "_id": 0,
                            "name": "$article.name",
                            "company": "$article.company",
                            "type": "$article.type",
                            "category": "$article.category",
                            "price": "$article.price",
                            "qty": "$qty",
                            "total": "$total"
                        }
                    }
                ])
                .exec()

            // console.log('carts=>', data.map(c => c.article.map(p => p.article)))

            console.log('data =>', data);

            res.json({
                csv: json2csv({
                    data,
                    fields,
                    del: ','
                }),
                fileName: `export${new Date()}.csv`
            })

        } catch (err) {
            console.error('err =>', err);
        }

    }

}
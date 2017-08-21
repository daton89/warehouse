'use strict';

const Article = require('./article.model');
const parser = require('csv').parser
const fs = require('fs');
const parse = require('csv').parse;
const async = require('async')
const config = require('../../config/environment')


const controller = {

    read(req, res) {
        Article.find({ 'deleted': { $ne: true } })
            .then(articles => res.status(200).json(articles))
            .catch(err => res.status(500).json(err));
    },

    readById(req, res) {
        Article.findById(req.params.id)
            .then(article => res.status(200).json(article))
            .catch(err => res.status(500).json(err));
    },

    readByName(req, res) {
        Article.find({
                name: new RegExp(req.params.name, 'i'),
                'deleted': { $ne: true }
            })
            .then(article => res.status(200).json(article))
            .catch(err => res.status(500).json(err));
    },

    readByCode(req, res) {
        Article.find({
                code: req.params.code,
                'deleted': { $ne: true }
            })
            .then(article => res.status(200).json(article))
            .catch(err => res.status(500).json(err));
    },

    create(req, res) {
        req.body.createdOn = Date.now()
        Article.create(req.body)
            .then(article => res.status(201).json(article))
            .catch(err => res.status(500).json(err));
    },

    update(req, res) {
        req.body.updatedOn = Date.now()
        Article.findOneAndUpdate({
                    _id: req.params.id,
                    'deleted': { $ne: true }
                },
                req.body, {
                    new: true
                })
            .then(article => res.status(200).json(article))
            .catch(err => res.status(500).json(err));
    },

    remove(req, res) {
        Article.findByIdAndUpdate(
                req.params.id, {
                    deleted: true
                })
            .then(a => Article.find({}))
            .then(articles => res.status(200).json(articles))
            .catch(err => res.status(500).json(err));
    },

    import (req, res, next) {

        let toPush = []
        let pushed = []
        let notPushed = []

        let skipFirst = true

        var parser = parse({ delimiter: ',' }, function(err, data) {

            data.forEach(function(line) {
                // do something with the line
                console.log('line=>', line);

                if (skipFirst) {
                    skipFirst = false
                } else {

                    let quantity = line[3] || 0
                    let nicotine = line[6] || 0
                    let price = line[8] || 0

                    let article = {
                        name: line[0],
                        code: line[1],
                        company: line[2],
                        quantity: parseInt(quantity),
                        category: line[4],
                        type: line[5],
                        nicotine: parseInt(nicotine),
                        format: line[7],
                        price: parseFloat(price),
                        description: line[9],
                        updatedOn: Date.now()
                    }

                    toPush.push(article)

                }

            })
        })

        parser.on('end', () => {

            async.eachSeries(toPush, (article, callback) => {

                Article.findOneAndUpdate({
                        name: article.name
                    }, {
                        name: article.name,
                        code: article.code,
                        company: article.company,
                        quantity: { $inc: article.quantity },
                        category: article.category,
                        type: article.type,
                        nicotine: article.nicotine,
                        format: article.format,
                        price: article.price,
                        description: article.description,
                        updatedOn: article.updatedOn
                    }, {
                        upsert: true,
                        new: true
                    })
                    .then((article) => {
                        pushed.push(article)
                        callback()
                    })
                    .catch(err => {
                        notPushed.push(article)
                        console.error(err);
                        callback()
                    })

            }, (err) => {

                res.status(200).json({ pushed, notPushed })

            })

        })

        var inputFile = config.root + '/server/uploads/' + req.files.name;

        try {

            fs.renameSync(req.files.file.path, inputFile)

        } catch (error) {

            console.error(error)
            next(error)

        }

        fs.createReadStream(inputFile).pipe(parser)

    },

    export (req, res) {



    }
}

module.exports = controller;
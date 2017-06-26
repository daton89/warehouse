'use strict';

const Article = require('./article.model');
const parser = require('csv').parser
const fs = require('fs');
var parse = require('csv').parse;


const controller = {

    read(req, res) {
        Article.find({})
            .then(articles => res.status(200).json(articles))
            .catch(err => res.status(500).json(err));
    },

    readById(req, res) {
        Article.findById(req.params.id)
            .then(article => res.status(200).json(article))
            .catch(err => res.status(500).json(err));
    },

    readByName(req, res) {
        Article.find({ name: new RegExp(req.params.name, 'i') })
            .then(article => res.status(200).json(article))
            .catch(err => res.status(500).json(err));
    },

    readByCode(req, res) {
        Article.find({ code: req.params.code })
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
        Article.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(article => res.status(200).json(article))
            .catch(err => res.status(500).json(err));
    },

    remove(req, res) {
        Article.findByIdAndRemove(req.params.id)
            .then(a => Article.find({}))
            .then(articles => res.status(200).json(articles))
            .catch(err => res.status(500).json(err));
    },

    import (req, res) {

        // handle upload csv file

        var inputFile = 'myfile.csv';

        let deferreds = []

        var parser = parse({ delimiter: ',' }, function(err, data) {
            async.eachSeries(data, function(line, callback) {
                // do something with the line
                deferreds.push(Article.create(line))

            })
        })

        parser.on('end', () => {

            Promise.all(deferreds)
                .then(articles => {
                    res.status(200).json(articles)
                })
                .catch(err => {
                    next(err)
                })

        })

        fs.createReadStream(inputFile).pipe(parser);
    },

    export (req, res) {



    }
}

module.exports = controller;
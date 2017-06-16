'use strict';

const Article = require('./article.model');

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
    Article.create(req.body)
      .then(article => res.status(201).json(article))
      .catch(err => res.status(500).json(err));
  },

  update(req, res) {
    Article.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(article => res.status(200).json(article))
      .catch(err => res.status(500).json(err));
  },

  remove(req, res) {
    Article.findByIdAndRemove(req.params.id)
      .then(a => Article.find({}))
      .then(articles => res.status(200).json(articles))
      .catch(err => res.status(500).json(err));
  }

}

module.exports = controller;

'use strict';

const Article = require('./article.model');

const controller = {

  read(req, res){
    Article.find({})
      .then(articles => res.status(200).json(articles))
      .catch(err => res.status(500).json(err));
  },

  readByName(req, res) {
    Article.find({name: new RegExp(req.params.name, 'i')})
      .then(article => res.status(200).json(article))
      .catch(err => res.status(500).json(err));
  },

  readByCode(req, res){
    Article.findOne({code: req.params.code})
      .then(article => res.status(200).json(article))
      .catch(err => res.status(500).json(err));
  },

  create(req, res) {
    Article.create(req.body)
      .then(article => res.status(201).json(article))
      .catch(err => res.status(500).json(err));
  },

  update(req, res) {
    Article.update({_id: req.params.id}, req.body)
      .then(article => res.status(200).json(article))
      .catch(err => res.status(500).json(err));
  },

  remove(req, res) {
    Article.remove({_id: req.params.id})
      .then(article => res.status(200).json(article))
      .catch(err => res.status(500).json(err));
  }

}

module.exports = controller;

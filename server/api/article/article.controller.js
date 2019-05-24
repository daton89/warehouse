"use strict";

const Article = require("./article.model");
const parser = require("csv").parser;
const fs = require("fs");
const parse = require("csv").parse;
const async = require("async");
const config = require("../../config/environment");
const rest = require('../../utils/rest.util')

const controller = {
  read(req, res) {
    const query = { deleted: { $ne: true } }
    const options = {
      page: +req.query.page,
      limit: +req.query.pageSize,
      lean: true
    }
    Article.paginate(query, options)
      .then(rest.handleEntityNotFound(res))
      .then(rest.respondWithResult(res))
      .catch(rest.handleCatch(res));
  },

  readById(req, res) {
    Article.findById(req.params.id)
      .lean()
      .then(rest.handleEntityNotFound(res))
      .then(rest.respondWithResult(res))
      .catch(rest.handleCatch(res));
  },

  readByName(req, res) {
    const query = { deleted: { $ne: true } }
    if (req.params.name) {
      query.name = new RegExp(req.params.name, "i");
    }
    const options = {
      page: +req.query.page,
      limit: +req.query.pageSize,
      lean: true
    }
    Article.paginate(query, options)
      .then(rest.handleEntityNotFound(res))
      .then(rest.respondWithResult(res))
      .catch(rest.handleCatch(res));
  },

  readByCode(req, res) {
    const query = { deleted: { $ne: true } }
    if (req.params.code) {
      query.code = new RegExp(req.params.code, "i");
    }
    const options = {
      page: +req.query.page,
      limit: +req.query.pageSize,
      lean: true
    }
    Article.paginate(query, options)
      .then(rest.handleEntityNotFound(res))
      .then(rest.respondWithResult(res))
      .catch(rest.handleCatch(res));
  },

  create(req, res) {
    req.body.createdOn = Date.now();
    Article.create(req.body)
      .then(rest.respondWithResult(res, 201))
      .catch(rest.handleCatch(res));
  },

  update(req, res) {
    req.body.updatedOn = Date.now();
    Article.findOneAndUpdate(
      {
        _id: req.params.id,
        deleted: { $ne: true }
      },
      req.body,
      {
        new: true
      }
    )
    .lean()
      .then(rest.handleEntityNotFound(res))
      .then(rest.respondWithResult(res))
      .catch(rest.handleCatch(res));
  },

  remove(req, res) {
    Article.findByIdAndUpdate(req.params.id, {
      deleted: true
    })
      .then(() => Article.find({ deleted: {$ne: true} }.lean()))
      .then(rest.respondWithResult(200))
      .catch(rest.handleCatch(res));
  },

  import(req, res, next) {
    let toPush = [];
    let pushed = [];
    let notPushed = [];

    let skipFirst = true;

    var parser = parse({ delimiter: "," }, function (err, data) {
      data.forEach(function (line) {
        // do something with the line
        console.log("line=>", line);

        if (skipFirst) {
          skipFirst = false;
        } else {
          let quantity = line[3] || 0;
          let nicotine = line[6] || 0;
          let price = line[8] || 0;

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
          };

          toPush.push(article);
        }
      });
    });

    parser.on("end", () => {
      async.eachSeries(
        toPush,
        (article, callback) => {
          Article.findOneAndUpdate(
            {
              name: article.name
            },
            {
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
            },
            {
              upsert: true,
              new: true
            }
          )
            .then(article => {
              pushed.push(article);
              callback();
            })
            .catch(err => {
              notPushed.push(article);
              console.error(err);
              callback();
            });
        },
        err => {
          res.status(200).json({ pushed, notPushed });
        }
      );
    });

    var inputFile = config.root + "/server/uploads/" + req.files.name;

    try {
      fs.renameSync(req.files.file.path, inputFile);
    } catch (error) {
      console.error(error);
      next(error);
    }

    fs.createReadStream(inputFile).pipe(parser);
  },

  export(req, res) { }
};

module.exports = controller;

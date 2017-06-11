'use strict';

const controller = require('./article.controller');

var router = require('express').Router();

router.get('/', controller.read);
router.get('/:code', controller.readByCode);
router.get('/:name', controller.readByName);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;

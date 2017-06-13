'use strict';

const controller = require('./cart.controller')

var router = require('express').Router()

router.get('/', controller.read)
router.get('/:id', controller.readById)
router.get('/checkout', controller.read)
router.post('/', controller.create)
router.put('/', controller.update)
router.delete('/', controller.remove)

module.exports = router
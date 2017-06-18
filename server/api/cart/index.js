'use strict';

const controller = require('./cart.controller')

var router = require('express').Router()

router.get('/', controller.read)
router.get('/:id', controller.readById)
router.get('/checkout/:id', controller.checkout)
router.post('/', controller.create)
router.put('/push/:id', controller.push)
router.put('/pull/:id', controller.pull)
router.delete('/:id', controller.delete)

module.exports = router

'use strict';

const controller = require('./article.controller');
const formidable = require('express-formidable');
const config = require('../../config/environment')

var router = require('express').Router();

router.get('/', controller.read);
router.get('/code/:code', controller.readByCode);
router.get('/name/:name', controller.readByName);
router.get('/:id', controller.readById);
router.post('/', controller.create);
router.post('/import', upload(), controller.import);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

function upload() {
    return formidable({
        encoding: 'utf-8',
        uploadDir: config.root + '/server/uploads',
        multiples: false, // req.files to be arrays of files 
    })
}

module.exports = router;

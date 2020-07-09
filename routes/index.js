'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});
router.get('/project', function (req, res) {
    res.render('project');
});
router.get('/services', function (req, res) {
    res.render('services');
});
router.get('/about', function (req, res) {
    res.render('about');
});
router.get('/contactme', function (req, res) {
    res.render('contactme');
});

module.exports = router;

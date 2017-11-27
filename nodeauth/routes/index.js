var express = require('express');
var router = express.Router();

var getBootstrapNode = require('bootstrap-node');
var bootstrapNode = getBootstrapNode();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Members' });
});

module.exports = router;

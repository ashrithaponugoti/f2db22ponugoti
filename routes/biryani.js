var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('biryani', { title: 'Biryani Search Results' });
});

module.exports = router;

var express = require('express');
const biryani_controlers= require('../controllers/biryani');
var router = express.Router();

/* GET home page. */
router.get('/', biryani_controlers.biryani_view_all_Page);

module.exports = router;

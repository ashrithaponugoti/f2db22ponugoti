var express = require('express');
const biryani_controlers= require('../controllers/biryani');
var router = express.Router();

/* GET home page. */
router.get('/', biryani_controlers.biryani_view_all_Page);

/* GET detail biryani page */
router.get('/detail', biryani_controlers.biryani_view_one_Page);

module.exports = router;

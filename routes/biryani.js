var express = require('express');
const biryani_controlers = require('../controllers/biryani');
var router = express.Router();

// A little function to check if we have an authorized user and continue onor
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', biryani_controlers.biryani_view_all_Page);

/* GET detail biryani page */
router.get('/detail', biryani_controlers.biryani_view_one_Page);

/* GET create biryani page */
router.get('/create',secured, biryani_controlers.biryani_create_Page);

/* GET create update page */
router.get('/update', secured, biryani_controlers.biryani_update_Page);

/* GET delete costume page */
router.get('/delete', secured, biryani_controlers.biryani_delete_Page);

module.exports = router;

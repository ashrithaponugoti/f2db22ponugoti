var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var biryani_controller = require('../controllers/biryani');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// BIRYANI ROUTES ///
// POST request for creating a Biryani.
router.post('/biryanis', biryani_controller.biryani_create_post);
// DELETE request to delete Biryani.
router.delete('/biryanis/:id', biryani_controller.biryani_delete);
// PUT request to update Biryani.
router.put('/biryanis/:id', biryani_controller.biryani_update_put);
// GET request for one Biryani.
router.get('/biryanis/:id', biryani_controller.biryani_detail);
// GET request for list of all Biryani items.
router.get('/biryanis', biryani_controller.biryani_list);



module.exports = router;
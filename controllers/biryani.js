var Biryani = require('../models/biryani');
// List of all Biryanis
exports.biryani_list = function(req, res) {
res.send('NOT IMPLEMENTED: Biryani list');
};
// for a specific Biryani.
exports.biryani_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Biryani detail: ' + req.params.id);
};
// Handle Biryani create on POST.
exports.biryani_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Biryani create POST');
};
// Handle Biryani delete form on DELETE.
exports.biryani_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Biryani delete DELETE ' + req.params.id);
};
// Handle Biryani update form on PUT.
exports.biryani_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Biryani update PUT' + req.params.id);
};
var Biryani = require('../models/biryani');
// List of all Biryanis
exports.biryani_list = async function(req, res) {
    try{
    theBiryanis = await Biryani.find();
    res.send(theBiryanis);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    

// List of all Biryanis
// exports.biryani_list = function(req, res) {
// res.send('NOT IMPLEMENTED: Biryani list');
// };
// for a specific Biryani.
exports.biryani_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Biryani detail: ' + req.params.id);
};
// Handle Biryani create on POST.
//exports.biryani_create_post = function(req, res) {
//res.send('NOT IMPLEMENTED: Biryani create POST');
//};
// Handle Biryani delete form on DELETE.
exports.biryani_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Biryani delete DELETE ' + req.params.id);
};
// Handle Biryani update form on PUT.
exports.biryani_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Biryani update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.biryani_view_all_Page = async function(req, res) {
    try{
    theBiryanis = await Biryani.find();
    res.render('biryani', { title: 'Biryani Search Results', results: theBiryanis });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle Costume create on POST.
exports.biryani_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Biryani();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object

    document.bir_quantity = req.body.bir_quantity;
    document.bir_cost = req.body.bir_cost;
    document.bir_ing = req.body.bir_ing;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


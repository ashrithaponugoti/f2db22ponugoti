const mongoose = require("mongoose")
const biryaniSchema = mongoose.Schema({
    bir_quantity: String,
    bir_cost: Number,
    bir_ing: String
})
module.exports = mongoose.model("Biryani", biryaniSchema)



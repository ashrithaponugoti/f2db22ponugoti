const mongoose = require("mongoose")
const biryaniSchema = mongoose.Schema({
    bir_quantity: String,
    bir_cost: {type:Number,min:10,max:50},
    bir_ing: {type:String,maxLength:10}
})
module.exports = mongoose.model("Biryani", biryaniSchema)



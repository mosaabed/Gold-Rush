const mongoose = require('mongoose')
const Schema = mongoose.Schema


const mapsSchema = new Schema({
    mapindex : String,
    map : {}

})

const Maps = mongoose.model("maps" , mapsSchema)
module.exports = Maps

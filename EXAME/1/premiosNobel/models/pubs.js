const mongoose = require('mongoose')

var pubSchema = new mongoose.Schema({
    type : String,
    id : String,
    authors : [],
    title : String,
    booktitle : String,
    address : String,
    year : String,
    month : String,
    doi : String
})

module.exports = mongoose.model('pub', pubSchema);
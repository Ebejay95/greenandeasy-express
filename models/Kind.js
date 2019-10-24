const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const KindSchema = new Schema({
    name:{
        type: String,
        required: true
    }
});

module.exports = Kind = mongoose.model('kind', KindSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const LocationSchema = new Schema({
    uuid:{
        type: String,
        required: true
    },
    lat:{
        type: Number,
        required: true
    },
    long:{
        type: Number,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    }
});

module.exports = Location = mongoose.model('location', LocationSchema);
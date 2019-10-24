const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const InteractionSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    link:{
        type: String
    },
    linkText:{
        type: String
    }
});

module.exports = Interaction = mongoose.model('interaction', InteractionSchema);
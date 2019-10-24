const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserTippcardSchema =  new Schema({
    category: {
        type: 'Mixed'
    },
    id: {
        type: 'Number'
    },
    interaction: {
        type: 'Mixed'
    },
    kind: {
        type: 'String'
    },
    text: {
        type: 'String'
    },
    idDeleted:{
        type: Boolean
    }
});

module.exports = UserTippcard = mongoose.model('userTippcard', UserTippcardSchema);
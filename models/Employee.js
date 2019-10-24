const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//Create Schema
const EmployeeSchema = new Schema({
    firstName:{
        type: String,
        default: ''
    },
    lastName:{
        type: String,
        default: ''
    },
    email:{
        type: String,
        default: ''
    },
    role:{
        type: String,
        default: ''
    },
    department:{
        type: String,
        default: ''
    },
    password:{
        type: String,
        default: ''
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
});

EmployeeSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

EmployeeSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password,this.password);
}

module.exports = Employee = mongoose.model('Employee', EmployeeSchema);
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {verifyToken} = require('./../functions/verifyToken');
const { check } = require('express-validator/check');

//Employee model
const Employee = require('../../models/Employee');

// @route POST api/signup
// @desc Create a Employee
// @access public
router.post('/', (req, res, next) => {
    const { body } = req;
    const {
        firstName,
        lastName,
        password,
        role,
        department
    } = body;
    let {
        email
    } = body;

    if(!firstName) {
        return res.send({
            success: false,
            message: 'Gib einen Namen an'
        });
    }

    if(!lastName) {
        return res.send({
            success: false,
            message: 'Gib einen Nachnamen an'
        });
    }

    if(!email) {
        return res.send({
            success: false,
            message: 'Gib eine Mailadresse an'
        });
    }

    if(!password) {
        return res.send({
            success: false,
            message: 'Gib ein Passwort an'
        });
    }

    if(password.length < 8) {
        return res.send({
            success: false,
            message: 'Das Passwort ist zu kurz'
        });
    }

    if(!role) {
        return res.send({
            success: false,
            message: 'Gib eine Rolle an'
        });
    }

    if(!department) {
        return res.send({
            success: false,
            message: 'Gib eine Abteilung an'
        });
    }

    email = email.toLowerCase();

    //Verify if Email doesnt exist
    Employee.find({
        email: email
    }, (err, previousEmployees) => {
        if(err){
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        } else if(previousEmployees.length>0) {
            return res.send({
                success: false,
                message: 'Dieser Account existiert bereits'
            });
        }

        // Save new Employee

        const newEmployee = new Employee();

        newEmployee.email = email;
        newEmployee.firstName = firstName;
        newEmployee.lastName = lastName;
        newEmployee.role = role;
        newEmployee.department = department;
        newEmployee.password = newEmployee.generateHash(password);
        newEmployee.save((err, employee)=>{
            if(err){
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            return res.send({
                success: true,
                message: 'Der Mitarbeiter wurde erfolgreich angelegt'
            });
        });

    });
});

module.exports = router;

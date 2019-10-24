const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {verifyToken} = require('../../functions/verifyToken');

//Kind model
const Employee = require('../../../models/Employee');

// @route POST api/employees
// @desc Gets All employees
// @access public
router.post('/', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        } else {
            Employee.find()
                .then(employees => res.json(employees));
        }
    });
});

module.exports = router;

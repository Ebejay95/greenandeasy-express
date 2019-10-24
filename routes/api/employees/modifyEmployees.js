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
            console.log(req.body.id);
            Employee.find(
                {_id: req.body.id},
                (err,employee) => {
                    if(err){
                        console.log(err);
                    } else {
                        Employee.findByIdAndUpdate(
                            // the id of the item to find
                            req.body.id,

                            // the change to be made. Mongoose will smartly combine your existing
                            // document with this change, which allows for partial updates too
                            req.body,

                            // an option that asks mongoose to return the updated version
                            // of the document instead of the pre-updated one.
                            {new: true},

                            // the callback function
                            (err, todo) => {
                                // Handle any possible database errors
                                if (err) return res.status(500).send(err);
                                return res.send({
                                    success: true,
                                    message: ''
                                });
                            }
                        );
                    }
                }
            );
        }

    });
});

module.exports = router;

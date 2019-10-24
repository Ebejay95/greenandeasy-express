const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {verifyToken} = require('../../functions/verifyToken');

//Location model
const Location = require('../../../models/Location');

// @route DELETE api/location/:id
// @desc Delete a Location
// @access public
router.post('/', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        } else {
            Location.findById(req.body.id)
                .then(
                    location => {
                        location.remove().then(
                            ()=> {
                                res.json({success: true})
                            }
                        )
                    }
                ).catch(err => {res.status(404).json({success: false})})
        }
    });
});

module.exports = router;

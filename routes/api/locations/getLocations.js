const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {verifyToken} = require('../../functions/verifyToken');

//Location model
const Location = require('../../../models/Location');

// @route GET api/tippcards
// @desc Gets All tippcards
// @access public
router.post('/', verifyToken , (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
       if(err){
           res.sendStatus(403);
       } else {
           Location.find()
               .then(locations => res.json(locations));
       }
    });
});

module.exports = router;

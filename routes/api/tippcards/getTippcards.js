const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {verifyToken} = require('../../functions/verifyToken');

//Kind model
const Tippcard = require('../../../models/Tippcard');

// @route GET api/tippcards
// @desc Gets All tippcards
// @access public
router.post('/', verifyToken , (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
       if(err){
           res.sendStatus(403);
       } else {
           Tippcard.find()
               .then(tippcards => res.json(tippcards));
       }
    });
});

module.exports = router;

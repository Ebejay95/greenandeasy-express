const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {verifyToken} = require('../../functions/verifyToken');

//Kind model
const UserTippcard = require('../../../models/UserTippcard');

// @route GET api/getUserTippcards
// @desc Gets All getUserTippcards
// @access public
router.post('/', verifyToken , (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        } else {
            UserTippcard.find()
                .then(userTippcards => res.json(userTippcards));
        }
    });
});

module.exports = router;

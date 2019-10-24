const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {verifyToken} = require('./../functions/verifyToken');

//Kind model
const UserSession = require('../../models/UserSession');

// @route GET api/userSessions
// @desc Gets All userSessions
// @access public
router.post('/',verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        } else {
            UserSession.find({isDeleted: false})
                .then(userSessions => res.json(userSessions));
        }
    });
});

module.exports = router;

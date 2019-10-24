const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {verifyToken} = require('./../functions/verifyToken');

//User model
const UserSession = require('../../models/UserSession');

// @route POST api/verify
// @access public

router.post('/', verifyToken ,(req, res, next) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        } else {
            //verify token is on of a kind and not deleted
            UserSession.find({
                userId: req.body.token,
                isDeleted: false
            }, (err, session) => {
                if(err){
                    return res.send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }
                if(session.length !== 1){
                    UserSession.remove({
                        userId: req.body.token,
                        isDeleted: false
                    });
                    return res.send({
                        success: false,
                        message: 'Die angegebene Mailadresse oder das angegebene Passwort sind nicht stimmig.'
                    });
                } else {
                    return res.send({
                        success: true,
                        message: 'User session okay'
                    });
                }
            });
        }
    });

});

module.exports = router;

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {verifyToken} = require('./../functions/verifyToken');

//User model
const UserSession = require('../../models/UserSession');

// @route POST api/verify
// @access public

router.get('/', (req, res, next) => {
    //Get the token
    const { query } = req;
    const { token } = query;

    //verify token is on of a kind and not deleted

    UserSession.updateMany({
        userId: token,
        isDeleted: false
    }, {$set: {isDeleted:true}}
    ,null, (err, session) => {
        if(err){
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        return res.send({
            success: true,
            message: 'logout okay'
        });
    });

});

module.exports = router;

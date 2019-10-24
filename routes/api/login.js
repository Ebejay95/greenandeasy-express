const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

//User model
const User = require('../../models/Employee');
const UserSession = require('../../models/UserSession');

// @route POST api/signin
// @access public

router.post('/', (req, res, next) => {
    const { body } = req;
    const {
        password
    } = body;
    let {
        email
    } = body;

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

    email = email.toLowerCase();

    User.find({
        email: email
    }, (err, users) =>{
       if(err){
           return res.send({
               success: false,
               message: 'Error: Server error'
           });
       }
       if (users.length !== 1){
           return res.send({
               success: false,
               message: 'Die angegebene Mailadresse oder das angegebene Passwort sind nicht stimmig.'
           });
       }

       let user = users[0];
       if(!user.validatePassword(password)) {
           return res.send({
               success: false,
               message: 'Die angegebene Mailadresse oder das angegebene Passwort sind nicht stimmig.'
           });
       }

        UserSession.updateMany({
            userId: user._id,
            isDeleted: false
        }, {$set: {isDeleted:true}}).then(
            ()=>{
                let userSession = new UserSession();
                userSession.userId = user._id;
                userSession.save((err, doc) =>{
                    if(err){
                        return res.send({
                            success: false,
                            message: 'Error: Server error'
                        });
                    }

                    jwt.sign({user:user}, 'secretkey', {expiresIn: '30min'}, (err, token) => {
                        res.send({
                            success: true,
                            message: '',
                            token: doc.userId,
                            jwt: token
                        });
                    });
                });
            }
        );
    });

});

module.exports = router;

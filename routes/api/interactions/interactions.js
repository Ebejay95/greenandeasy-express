const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {verifyToken} = require('../../functions/verifyToken');

//Interaction model
const Interaction = require('../../../models/Interaction');

// @route GET api/items
// @desc Gets All items
// @access public
router.post('/', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        } else {
            Interaction.find()
                .then(interactions => res.json(interactions));
        }
    });
});

module.exports = router;

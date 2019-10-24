const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {verifyToken} = require('../../functions/verifyToken');

//Kind model
const Tippcard = require('../../../models/Tippcard');

// @route POST api/tippcards
// @desc Create a Tippcard
// @access public
router.post('/', verifyToken ,(req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        } else {
            const newTippcard = new Tippcard({
                text: req.body.text,
                category: req.body.category,
                interaction: req.body.interaction,
                kind: req.body.kind,
                idDeleted: req.body.idDeleted
            });

            newTippcard.save().then(tippcard => res.json(tippcard));
        }
    });
});

module.exports = router;

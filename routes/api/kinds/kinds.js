const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {verifyToken} = require('../../functions/verifyToken');

//Kind model
const Kind = require('../../../models/Kind');

// @route GET api/kinds
// @desc Gets All kinds
// @access public
router.post('/', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        } else {
            Kind.find()
                .then(kinds => res.json(kinds));
        }
    });
});

module.exports = router;

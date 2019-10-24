const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {verifyToken} = require('../../functions/verifyToken');

//Category model
const Category = require('../../../models/Category');

// @route GET api/categories
// @desc Gets All categories
// @access public
router.post('/', verifyToken , (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        } else {
            Category.find()
                .then(categories => res.json(categories));
        }
    });
});

module.exports = router;

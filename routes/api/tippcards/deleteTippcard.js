const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {verifyToken} = require('../../functions/verifyToken');

//Kind model
const Tippcard = require('../../../models/Tippcard');

// @route DELETE api/items/:id
// @desc Delete a Item
// @access public
router.post('/', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        } else {
            Tippcard.findById(req.body.id)
                .then(
                    item => {
                        item.remove().then(
                            ()=> {
                                res.json({success: true})
                            }
                        )
                    }
                ).catch(err => {res.status(404).json({success: false})})
        }
    });
});

module.exports = router;

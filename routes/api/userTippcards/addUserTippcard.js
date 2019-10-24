const express = require('express');
const router = express.Router();

//Kind model
const UserTippcard = require('../../../models/UserTippcard');


// @route POST api/userTippcards
// @desc Create a UserTippcard
// @access public
router.post('/',(req, res) => {
    const newUserTippcard = new UserTippcard({
        text: req.body.text,
        category: req.body.category,
        interaction: req.body.interaction,
        kind: req.body.kind
    });

    newUserTippcard.save().then(userTippcard => res.json(userTippcard));
});

module.exports = router;

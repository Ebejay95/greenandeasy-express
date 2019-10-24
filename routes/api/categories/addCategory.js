const express = require('express');
const router = express.Router();

//Kind model
const Category = require('../../../models/Category');


// @route POST api/userTippcards
// @desc Create a UserTippcard
// @access public
router.post('/',(req, res) => {
    const newCategory = new Category({
        name: req.body.name
    });

    newCategory.save().then(category => res.json(category));
});

module.exports = router;

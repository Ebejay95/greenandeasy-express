const express = require('express');
const router = express.Router();

//Location model
const Location = require('../../../models/Location');

// @route GET api/tippcards
// @desc Gets All tippcards
// @access public
router.get('/', (req, res) => {
    Location.find()
        .then(locations => res.json(locations));
});

module.exports = router;

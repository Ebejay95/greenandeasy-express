const express = require('express');
const router = express.Router();

//Kind model
const Tippcard = require('../../../models/Tippcard');

// @route GET api/tippcards
// @desc Gets All tippcards
// @access public
router.get('/', (req, res) => {
    Tippcard.find()
        .then(tippcards => res.json(tippcards));
});

module.exports = router;

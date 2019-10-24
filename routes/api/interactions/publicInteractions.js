const express = require('express');
const router = express.Router();

//Interaction model
const Interaction = require('../../../models/Interaction');

// @route GET api/items
// @desc Gets All items
// @access public
router.get('/', (req, res) => {
    Interaction.find()
        .then(interactions => res.json(interactions));
});

module.exports = router;

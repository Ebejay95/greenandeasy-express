const express = require('express');
const router = express.Router();

//Kind model
const Kind = require('../../../models/Kind');

// @route GET api/kinds
// @desc Gets All kinds
// @access public
router.get('/', (req, res) => {
   Kind.find()
       .then(kinds => res.json(kinds));
});

module.exports = router;

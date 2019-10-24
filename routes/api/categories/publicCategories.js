const express = require('express');
const router = express.Router();

//Category model
const Category = require('../../../models/Category');

// @route GET api/categories
// @desc Gets All categories
// @access public
router.get('/', (req, res) => {
   Category.find()
       .then(categories => res.json(categories));
});

module.exports = router;

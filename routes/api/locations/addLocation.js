const express = require('express');
const router = express.Router();

//Location model
const Location = require('../../../models/Location');

// @route POST api/addLocation
// @desc Create a Location
// @access public
router.post('/' ,(req, res) => {
    const newLocation = new Location({
        uuid: req.body.uuid,
        lat: req.body.lat,
        long: req.body.long,
        text: req.body.text,
        url: req.body.url,
    });
    newLocation.save().then(location => res.json(location));
});

module.exports = router;

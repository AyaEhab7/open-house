const express = require('express');
const router = express.Router();

const Listing = require('../models/listing');

router.get('/', async (req, res) => {
    try {
        const listings = await Listing.find();// Fetch all listings
        console.log(listings);// Log the listings to the console
        res.render("Listings/index.ejs");// Send a message back to the client
    } catch (error) {
        console.error(error);// Log any errors
    }
});

router.get('/new', (req, res) => {
    res.render('listings/new.ejs');
});

module.exports = router;
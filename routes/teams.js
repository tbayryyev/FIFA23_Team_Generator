const express = require('express');
const router = express.Router();
const data = require('../data');
const teamsData = data.teams;
const { ObjectId } = require('mongodb');

router
    .route('')
    .get(async (req, res) => {
        try {
            res.render('pages/main_page');
        } catch (e) {
            console.log(e);
            res.status(404).json(e);
        }
    });




module.exports = router;
const express = require('express');
const router = express.Router();
const data = require('../data');
const teamsData = data.teams;
const { ObjectId } = require('mongodb');

router
    .route('')
    .get(async (req, res) => {
        try {
            res.json("we are at this page");
        } catch (e) {
            res.status(404).json({ error: 'Id not found' });
        }
    });




module.exports = router;
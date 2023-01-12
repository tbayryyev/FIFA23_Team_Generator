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

router
    .route('/teams')
    .post(async (req, res) => {
        try {
            let rating = Number(req.body.rating);
            let league = req.body.league;
            const teams = await teamsData.generateTeams(rating,league);
            res.render('pages/teams', {team1: teams[0], team2: teams[1] });


        } catch (e) {
            res.status(400).json({Error: e})
        }
    });




module.exports = router;
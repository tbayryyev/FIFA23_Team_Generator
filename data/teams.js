const mongoCollections = require("../config/mongoCollections");
const teams = mongoCollections.teams;
const { ObjectId } = require('mongodb');
const validation = require("../validation");

async function createTeam(team_name,team_image,star_rating,league){
    if(arguments.length != 4){
        throw "this function must take only 4 inputs";
    }
    // validating the team name string 
    team_name = validation.checkString(team_name,"team name");

    // validating the star_rating 
    rating = validation.checkRating(star_rating);

    // validating the league string
    league = validation.checkString(league,"league");

    // creating the new team object to be inserted in to the DB
    let new_team = {
        _id : ObjectId(),
        name : team_name,
        image: team_image,
        league: league

    }

    // inserting the new team into the DB
    const team_collection = await teams()
    const insertInfo = await team_collection.insertOne(new_team);


    // Checking if the insertion was successful 
    if (!insertInfo.acknowledged || !insertInfo.insertedId) {
        throw 'Team could not be added to DB';
    }


    new_team._id = new_team._id.toString();




    return new_team



}

module.exports= {createTeam};
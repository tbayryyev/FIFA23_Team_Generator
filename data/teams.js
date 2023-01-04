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
        league: league,
        rating: rating

    };

    // inserting the new team into the DB
    const team_collection = await teams();
    const insertInfo = await team_collection.insertOne(new_team);


    // Checking if the insertion was successful 
    if (!insertInfo.acknowledged || !insertInfo.insertedId) {
        throw 'Team could not be added to DB';
    }


    new_team._id = new_team._id.toString();

    return new_team;



}

async function get_leagues(){
    const team_collection = await teams();
    leagues = [];

    // go through the teams databsae and return the league of each team in an array
    const leagues_list = await team_collection.find({}, {
        projection: {
            _id: 0,league:1

        }
    }).toArray();

    // checking if there are no leagues in the database throw an error if there are none
    if(leagues_list.length == 0){
        throw "Currently there are no leagues in the Database";
    }

    // get a list of leagues with no duplicates
    leagues_list.forEach(value => {
        if(leagues.indexOf(value["league"]) == -1){
            leagues.push(value["league"]);
        }
    });

    return leagues;

}

module.exports= {createTeam,get_leagues};
const teams = require("./data/teams");

const connection = require("./config/mongoConnection");

async function main(){
    const db = await connection.connectToDb();
    // to clear database
    await db.dropDatabase(); 


    try {
        Arsenal = await teams.createTeam("Arsenal","https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",4.5,"Premier League");
        console.log(Arsenal);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }

    try {
        Man_city = await teams.createTeam("Manchester City","https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",5.0,"Premier League");
        console.log(Man_city);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        Liverpool = await teams.createTeam("Liverpool","https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png",5.0,"Premier League");
        console.log(Liverpool);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        Chelsea = await teams.createTeam("Chelsea","https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",5.0,"Premier League");
        console.log(Chelsea);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        Tottenham_Hotspur = await teams.createTeam("Tottenham Hotspur","https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png",4.5,"Premier League");
        console.log(Tottenham_Hotspur);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        Manchester_United = await teams.createTeam("Manchester United","https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png",4.5,"Premier League");
        console.log(Manchester_United);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }


    await connection.closeConnection();
}
main();
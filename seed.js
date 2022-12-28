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
        Arsenal = await teams.createTeam("Arsenal","https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",4.5,"Premier League");
        console.log(Arsenal);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    await connection.closeConnection();
}
main();
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
    try {
        West_ham = await teams.createTeam("West Ham United","https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/1200px-West_Ham_United_FC_logo.svg.png",4.5,"Premier League");
        console.log(West_ham);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        Leicester_City = await teams.createTeam("Leicester City","https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/1200px-Leicester_City_crest.svg.png",4.5,"Premier League");
        console.log(Leicester_City);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        Aston_Villa = await teams.createTeam("Aston Villa","https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aston_Villa_FC_crest_%282016%29.svg/800px-Aston_Villa_FC_crest_%282016%29.svg.png",4.5,"Premier League");
        console.log(Aston_Villa);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        Wolverhampton_Wanderers = await teams.createTeam("Wolverhampton Wanderers","https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Wolverhampton_Wanderers.svg/1200px-Wolverhampton_Wanderers.svg.png",4.0,"Premier League");
        console.log(Wolverhampton_Wanderers);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        Newcastle_United = await teams.createTeam("Newcastle United","https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/1200px-Newcastle_United_Logo.svg.png",4.0,"Premier League");
        console.log(Newcastle_United);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        Everton = await teams.createTeam("Everton","https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/1200px-Everton_FC_logo.svg.png",4.0,"Premier League");
        console.log(Everton);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        Leeds_United = await teams.createTeam("Leeds United","https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Leeds_United_F.C._logo.svg/800px-Leeds_United_F.C._logo.svg.png",4.0,"Premier League");
        console.log(Leeds_United);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        Brighton = await teams.createTeam("Brighton & Hove Albion","https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png",4.0,"Premier League");
        console.log(Brighton);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        Crystal_Palace = await teams.createTeam("Crystal Palace","https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Crystal_Palace_FC_logo_%282022%29.svg/1200px-Crystal_Palace_FC_logo_%282022%29.svg.png",4.0,"Premier League");
        console.log(Crystal_Palace);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        Southampton = await teams.createTeam("Southampton","https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/FC_Southampton.svg/800px-FC_Southampton.svg.png",4.0,"Premier League");
        console.log(Southampton);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        Fulham = await teams.createTeam("Fulham","https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Fulham_FC_%28shield%29.svg/1200px-Fulham_FC_%28shield%29.svg.png",4.0,"Premier League");
        console.log(Fulham);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        Brentford = await teams.createTeam("Brentford","https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/1200px-Brentford_FC_crest.svg.png",4.0,"Premier League");
        console.log(Brentford);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        Nottingham_Forest = await teams.createTeam("Nottingham Forest","https://upload.wikimedia.org/wikipedia/fr/thumb/3/37/Logo_Nottingham_Forest_FC.svg/1200px-Logo_Nottingham_Forest_FC.svg.png",3.5,"Premier League");
        console.log(Nottingham_Forest);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        AFC_Bournemouth = await teams.createTeam("AFC Bournemouth","https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/1200px-AFC_Bournemouth_%282013%29.svg.png",3.5,"Premier League");
        console.log(AFC_Bournemouth);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }
    try {
        leagues = await teams.getLeagues();
        console.log(leagues);
    } catch (e) {
        console.log("Got an error.");
        console.log(e);
    }


    
    




    await connection.closeConnection();
}
main();
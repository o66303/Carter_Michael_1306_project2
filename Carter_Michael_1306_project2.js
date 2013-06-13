alert("JavaScript works!");

alert("JavaScript works!");

//Michael Carter
//June 6, 2013
//SDI Project 1
//starting a halo match

//variable declaration
var teamLeader = "Sarge";
var playerName = "Grif";
var matchType = "Team Deathmatch";
var playersReq = 4;
var numbOfPlayers = 2;
var startGame = false;

//string outputs
console.log ( teamLeader + ": Attention, Squad! I am the team leader, but you can call me " + teamLeader + "." );
console.log ( teamLeader + ": We are going to be playing a game of " + matchType + ".");
console.log ( playerName + ": So does that mean we have to kill each other?" );
console.log ( teamLeader + ": Yes!" );
console.log ( "Announcer: A total of " + playersReq + " players is needed to form a squad" );
console.log ( playerName + ": So does that mean we can play a match?" );
console.log ( "Announcer: " + startGame + " you currently have " + numbOfPlayers + " players in your squad." );


if ( startGame == true ) {
	
	if ( numbOfPlayers == playersReq ) {
		console.log ( "Announcer: Match will start in 10 seconds." );
	
	}else {
		var remainPlayers = playersReq - numbOfPlayers;
		console.log ( "Announcer: " + remainPlayers + " more players are needed for the match to begin." );
	}
} else {
	
	if ( playerName == "Grif" ) {
		console.log ( playerName + ": So does that mean we can't play a match?" );
		console.log ( teamLeader + ": That's what the announcer just said, dummy." );
	} else {
		var announce = teamLeader + "'s squad still requires " + remainPlayers + " to begin the match.";
		console.log ( announce );
	}
}



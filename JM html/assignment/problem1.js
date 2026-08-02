function matchWinner(teamAGoals, teamBGoals) {
    if(teamAGoals > teamBGoals) {
        return "Team A wins";
    } else if(teamBGoals > teamAGoals) {
        return "Team B wins";
    } 
    else if (teamAGoals < 0 || teamBGoals < 0) {
        return "Invalid";
    }
    else {
        return "It's a draw";
    }
  
}
console.log(matchWinner(3, 2)); // Output: "Team A wins"

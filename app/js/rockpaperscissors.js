////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
   return move || getInput();
}

function getComputerMove(move) {
   return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
  function getWinner(playerMove,computerMove) {
      var winner;
      if (playerMove === computerMove) {
          return 'tie';
      }
      else if (playerMove === 'rock') {
          if(computerMove === 'scissors') {
              return 'player';
          }
          else {
              return 'computer';
          }}
      else if (playerMove === 'paper') {
          if(computerMove === 'rock') {
              return 'player';
          }
          else {
              return 'computer';
          }}
      else if (playerMove === 'scissors') {
          if(computerMove === 'paper') {
              return 'player';
          }
          else {
              return 'computer';
          }}}
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}


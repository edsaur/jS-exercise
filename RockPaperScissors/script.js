const picks = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
}; // let choices be [rock, paper, scissors]
const winners = [];
const computerChoices = Object.keys(picks);


function game() {
  for(let i = 1; i <= 5; i++){
    playRound(i);
  }
  logWinners()
};

function playRound(round) {
  const playerSelection = playerPicks(); // primary choice
  const computerSelection = computerPicks(); // calls the randomized choices
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function computerPicks() {
  let randomizeChoice = Math.floor(Math.random() * computerChoices.length); // randomize rock paper and scissors
  return computerChoices[randomizeChoice];
}

function playerPicks() {
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Type, Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();

  let check = validateInput(input);
  while (check == false) {
    input = prompt("Type Rock, Paper, Scissors. Spelling needs to be exact, but captialized");
    while(input == null) {
      prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  }
  
  // Check if player beats computer
  if (picks[playerSelection] === computerSelection) {
    return "Player";
  }

  // if user lost return
  return "Computer";
}

function validateInput(choice) {
  return picks.hasOwnProperty(choice);
}

function logWinners() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Tie:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round)
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  console.log(winner, "Won the Round");
  console.log("-----------------------------------");
}
game();


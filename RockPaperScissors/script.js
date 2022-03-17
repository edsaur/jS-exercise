const picks = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
}; // let choices be [rock, paper, scissors]

let playerOne = 0;
let computer = 0;
const computerChoices = Object.keys(picks);


function game() {
  for(let i = 0; i<=5; i++){
    playRound(i);
  }
};
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

function playRound() {
  const playerSelection = playerPicks(); // primary choice
  const computerSelection = computerPicks(); // calls the randomized choices
  const winner = checkWinner(playerSelection, computerSelection);
  console.log(winner);
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! ${playerSelection} vs ${computerSelection}`;
  }
  
  // Check if player beats computer
  if (picks[playerSelection] === computerSelection) {
    return `You Win this game! ${playerSelection} vs ${computerSelection}`;
  }

  // if user lost return
  return `You lose, computer wins! ${playerSelection} vs ${computerSelection}`;
}

function validateInput(choice) {
  return picks.hasOwnProperty(choice);
}

game();


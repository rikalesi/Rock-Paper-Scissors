// This array stores the possible choices for the game: rock, paper, or scissors
const choices = ['rock', 'paper', 'scissors'];

// This object stores the results of the game based on the player's and computer's choices
// If the player chooses rock and the computer chooses paper, the player loses
// If the player chooses paper and the computer chooses scissors, the player wins
// And so on
const results = {
  rock: { rock: 'tie', paper: 'lose', scissors: 'win' },
  paper: { rock: 'win', paper: 'tie', scissors: 'lose' },
  scissors: { rock: 'lose', paper: 'win', scissors: 'tie' },
};

// These variables store the score for the game
let wins = 0;
let ties = 0;
let losses = 0;

// This is the game loop, which runs until the player decides to stop playing
while (true) {
  // Ask the player for their choice
  let playerChoice = prompt('Enter rock, paper, or scissors:');

  // Validate the player's choice
  // If it's not a valid choice, ask the player to try again
  if (!choices.join('|').includes(playerChoice.toLowerCase(), 'i')) {
    alert('Invalid choice, try again');
    continue;
  }

  // Generate the computer's choice randomly
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determine the result of the game based on the player's and computer's choices
  let result = results[playerChoice.toLowerCase()][computerChoice.toLowerCase()];

  // Update the score based on the result
  if (result === 'win') {
    wins++;
  } else if (result === 'tie') {
    ties++;
  } else if (result === 'lose') {
    losses++;
  }

  // Display the result to the player
  alert(`You chose ${playerChoice}, I chose ${computerChoice}. You ${result}!`);

  // Ask the player if they want to play again
  if (!confirm('Do you want to play again?')) {
    break;
  }
}

// The game has ended, so display the final score
alert(`You won ${wins} times, tied ${ties} times and lost ${losses} times!`);


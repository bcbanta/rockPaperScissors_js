// Player will type their selection; Computer will log their choice
// Result will be printed out to console
// Winner will receive 1 point to their game score
// If one player has 5 points:
// Game will end and winner will be announced along with the other player's score
// Game will ask user if they want to play again

function getPlayerChoice(){
    let rps = prompt("Rock, Paper, Scissors...");
    console.log("user input: " + rps);
    let p1_choice = rps.toUpperCase();
    return p1_choice;
}

function getComputerChoice(){
    let computer_choice = '';
    let num = Math.random() // float 0 - 1 
    console.log(num)
     
    if (num <= 0.334) {
        computer_choice = 'ROCK'
    } else if (num >= 0.667) {
        computer_choice = 'PAPER'
    } else {
        computer_choice = 'SCISSORS'
    };

    return computer_choice;
}

function playRound(){
    let round_result = '';

    let p1_choice = getPlayerChoice();
    let p2_choice = getComputerChoice();

    console.log("p1 choice: " + p1_choice);
    console.log("p2 choice: " + p2_choice);

    if (p1_choice === p2_choice) {
        round_result = 'tie';
    } else if (p1_choice === 'ROCK' && p2_choice === 'SCISSORS'){
        round_result = 'p1'
    } else if (p1_choice === 'SCISSORS' && p2_choice === 'PAPER'){
        round_result = 'p1'
    } else if (p1_choice === 'PAPER' && p2_choice === 'ROCK'){
        round_result = 'p1'
    } else {
        round_result = 'p2'
    };

    return round_result;
}

let round_winner = playRound();
console.log("Round Winner: " + round_winner);



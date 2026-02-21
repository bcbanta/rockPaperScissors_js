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



function playGame(){
    let p1_score = 0;
    let p2_score = 0;
    let round = 1;
    let winner = '';

    while (p1_score !== 5 && p2_score !== 5){
        console.log("Round: "+round);
        console.log("Player 1 score: " + p1_score);
        console.log("Player 2 score: " +p2_score);

        let round_winner = playRound();

        if (round_winner === 'tie') {
            console.log("It was a tie! Let's try that again...")
            round++; //keep track of the number of rounds/ties 
        } else if (round_winner === 'p1') {
            p1_score++;
            round++;
        } else if (round_winner ==='p2'){
            p2_score++;
            round++;
        }
    }

    if (p1_score === 5){
        // console.log("Player 1 wins!")
        winner = 'p1';
    } else {
        // console.log("The computer wins!")
        winner = 'p2'; 
    }

    return winner;
}

function askUserToPlay(){
    let play_again = prompt("Do you want to play a game of Rock, Paper, Scissors? (YES,NO)(Y/N)");
    console.log("user input: " + play_again);
    play_again = play_again.toUpperCase();
    return play_again;
}


let selection = document.querySelector('#selection'); 

selection.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            console.log("ROCK was selected");
            break;
        case 'paper':
            console.log("PAPER was selected");
            break;
        case 'scissors':
            console.log("SCISSORS was selected");
            break;
    }
});








// main game loop 

// play game boolean 
// comment out to test button logic 
// let play_game = true;

// while (play_game === true){
//     let play_again = askUserToPlay();
//     if (play_again.includes('Y')) {
//         console.clear();
//         let game_winner = playGame();
//         if (game_winner === 'p1'){
//             console.log("Player 1 Wins!")
//         } else {
//             console.log("Player 2 Wins!!")
//         }
//     } else {
//     play_game = false;
//     }
// }

console.log("Thank you for playing! Goodbye!");



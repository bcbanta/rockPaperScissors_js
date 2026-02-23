// Player will type their selection; Computer will log their choice
// Result will be printed out to console
// Winner will receive 1 point to their game score
// If one player has 5 points:
// Game will end and winner will be announced along with the other player's score
// Game will ask user if they want to play again

// no longer needed
// function getPlayerChoice(){
//     let rps = prompt("Rock, Paper, Scissors...");
//     console.log("user input: " + rps);
//     let p1_choice = rps.toUpperCase();

//     return p1_choice;
// }

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


// main game funcationality 
function playRound(p1_choice){
    let round_result = '';

    // let p1_choice = getPlayerChoice();
    let p2_choice = getComputerChoice();

    console.log("p1 choice: " + p1_choice);
    console.log("p2 choice: " + p2_choice);

    // determine winner 
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

    // assign winner points and incrememnt round
    if (round_result === 'tie') {
        result_log = "Round " + round+" was a tie. Let's try that again..."
        console.log("It was a tie! Let's try that again...")
        round++; //keep track of the number of rounds/ties 
    } else if (round_result === 'p1') {
        p1_score++;
        round++;
        result_log = "Player 2 won round " + round+". Player 1 chose "+p1_choice+"; Player 2 chose "+p2_choice+"."
        console.log("Player 1 won round " + round);
    } else if (round_result ==='p2'){
        p2_score++;
        round++;
        result_log = "Player 2 won round " + round+". Player 1 chose "+p1_choice+"; Player 2 chose "+p2_choice+"."
        console.log("Player 2 won round " + round);
    }

    updateScoreboardContent(); // update scoreboard 
    roundResultLog(); // add new line to result log 

}


// moved to playRound()
// function updateScore(winner){ /// logic moved to playRound() for result log tracker capability

//     if (winner === 'tie') {
//         console.log("It was a tie! Let's try that again...")
//         round++; //keep track of the number of rounds/ties 
//     } else if (winner === 'p1') {
//         p1_score++;
//         round++;
//         console.log("Player 1 won round " + round);
//     } else if (winner ==='p2'){
//         p2_score++;
//         round++;
//         console.log("Player 2 won round " + round);
//     }

//     updateScoreboardContent(); 
// };

// playGame ---------> no longer needed 

// function playGame(){
//     let p1_score = 0;
//     let p2_score = 0;
//     let round = 1;
//     let winner = '';

//     while (p1_score !== 5 && p2_score !== 5){
//         console.log("Round: "+round);
//         console.log("Player 1 score: " + p1_score);
//         console.log("Player 2 score: " +p2_score);

//         let round_winner = playRound();

//         if (round_winner === 'tie') {
//             console.log("It was a tie! Let's try that again...")
//             round++; //keep track of the number of rounds/ties 
//         } else if (round_winner === 'p1') {
//             p1_score++;
//             round++;
//         } else if (round_winner ==='p2'){
//             p2_score++;
//             round++;
//         }
//     }

//     if (p1_score === 5){
//         // console.log("Player 1 wins!")
//         winner = 'p1';
//     } else {
//         // console.log("The computer wins!")
//         winner = 'p2'; 
//     }

//     return winner;
// }

// askUserToPlay ---------> no longer needed 
function askUserToPlay(){
    let play_again = prompt("Do you want to play a game of Rock, Paper, Scissors? (YES,NO)(Y/N)");
    console.log("user input: " + play_again);
    play_again = play_again.toUpperCase();
    return play_again;
}


function resetGame(){
    round = 1;
    p1_score = 0;
    p2_score = 0; 


    updateScoreboardContent(); 

    // reset tracker 
    let tracker = document.querySelector("#round-result-tracker");
    tracker.innerHTML = ""; // clears out child elements 

    console.log("Resetting global variables.");
    console.log("Round: " + round);
    console.log("Player 1 Score: " + p1_score);
    console.log("Player 2 Score: " + p2_score);
};

function updateScoreboardContent(){

    let update_p1_score = document.querySelector("#player-1-score");
    update_p1_score.textContent = p1_score;

    let update_p2_score = document.querySelector("#player-2-score");
    update_p2_score.textContent = p2_score;

    let update_round = document.querySelector("#round");
    update_round.textContent = round;
};

// add log entry 
function roundResultLog() {
    let tracker = document.querySelector("#round-result-tracker");
    tracker_child = document.createElement("li")
    tracker_child.textContent = result_log;

    // append child to parent 
    tracker.prepend(tracker_child);
};



// main game loop 

// set global variables 
let p1_score = 0;
let p2_score = 0;
let round = 1; 
let result_log = '';

updateScoreboardContent(p1_score, p2_score, round); 

// reset game 
let reset_game_button = document.querySelector("#reset-game");
reset_game_button.addEventListener("click", (event)=> {
    resetGame()
})

// play round 
let buttons = document.querySelectorAll("#selection button");
buttons.forEach((button) => {
    // add event listener to each button 
    button.addEventListener("click", (event) => {
        playRound(event.target.id)
    })
});



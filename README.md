# rockPaperScissors_js
A javascript console rock paper scissors game - the odin project - foundations course  




1. Understand the Task 
    - Rock Paper Scissors Rules Based game 
        - How to play the game? 
            - Player selects 1 of 3 options: rock, paper, or scissors. 
            - Computer does the same
            - Rock beats Scissors 
            - Scissors beats paper
            - Paper beats rock 
            - If both players select the same choice, it is a push(tie) and no one recieves a point
        - This game will be played in the console.
        - The game will end after a player receives 5 points (max 9 rounds). 
        - The game will provide score updates after every round 
2. Overall Plan 
    - Player will type their selection; Computer will log their choice
    - Result will be printed out to console 
        - Winner will receive 1 point to their game score
    - if one player has 5 points...
        - game will end and winner will be announced along with the other players score
    - Game will ask user if they want to play again 

Pseudo Code 
-- how to handle varialbe scope ? 
    - playGame()
        ---- Returns Winner's Name "string" ----  
        - will initialize variables 
        - track points and round 
        - decide winner & return string  
        - **outside of playGame()** -> ask player if they would like to play 
    - playRound()
        --- return round winner "string" -----

SEQUENCE 
    - ask player1 if they'd like to play a game of RPS
    - set play_game = true 
        - WHILE - condition - play_game == true 
        if yes
            - game_winner = playGame()
            - print game_winner
            - once game ends - ask p1 if they'd like to play a game 
                - if yes 
                    - set play_game = true
                - if no 
                    - set play_game = false 
    if no 
    - set play_game = false 
    - exit program  


playGame()
    set p1 score = 0
    set p2 score = 0 
    set round = 1 

    - WHILE - condition p1 or p2 score !=== 5 

        print round # 

        round_winner = playRound()

        if round_winner === 'p1'
            p1 score ++ 
        else p2 score ++ 
    
        log/print variable values
        - print out Round #
        - print out p1 & p2 score 
        - round ++ 
    
    print winner
    return winner "string" 

        
playRound()

- print out "select rock, paper or scissors..."
- get p1 and p2 choices 
    - p1_choice = getPlayerChoice() 
    - p2_choice = getComputerChoice()
- decide winner 
    - round_winner = ''
    - IF p1_choice == ROCK && p2_chocie == Scissors
        round_winner = 'p1'
      else if p1_choice == Scissors && p2_choice == Paper 
        round_winner = 'p1'
      else if p1_choice == PAPER && p2_choice == ROCK 
        round_winner = 'p1'
      else 
        round_winner = 'p2'
    
    return round_winner "string"


getPlayerChoice() 
    player_choice = accept user input (case-insensitive)
        - use js prompt method
    return player_choice 

getComputerChoice()
    computer_choice = ''
    num = math.random(0-1)
    if num <= .3334
        computer_choice = 'ROCK' 
    else if num >= .6667
        computer_choice = 'SCISSORS'
    else 
        computer_choice = 'PAPER'

    return computer_choice "string" 

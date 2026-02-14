# rockPaperScissors_js
A javascript console rock paper scissors game - the odin project - foundations course  

# Rock Paper Scissors Game - Pseudocode

## 1. Understanding the Task

### Rock Paper Scissors Rules-Based Game

#### How to Play
- Player selects 1 of 3 options: **rock**, **paper**, or **scissors**
- Computer does the same
- **Game Rules:**
  - Rock beats Scissors
  - Scissors beats Paper
  - Paper beats Rock
  - If both players select the same choice, it is a **push (tie)** and no one receives a point

#### Game Details
- This game will be played in the **console**
- The game will end after a player receives **5 points** (max 9 rounds)
- The game will provide score updates after every round

---

## 2. Overall Plan

### Game Flow
1. Player will type their selection; Computer will log their choice
2. Result will be printed out to console
   - Winner will receive 1 point to their game score
3. If one player has 5 points:
   - Game will end and winner will be announced along with the other player's score
4. Game will ask user if they want to play again

---

## Pseudocode

### Variable Scope Strategy

#### `playGame()`
**Returns:** Winner's Name (string)

- Will initialize variables
- Track points and round
- Decide winner & return string
- **Outside of playGame()** → ask player if they would like to play

#### `playRound()`
**Returns:** Round winner (string)

---

## Sequence

### Main Game Loop

```
- Ask player1 if they'd like to play a game of RPS
- Set play_game = true

WHILE play_game == true:
    IF yes:
        - game_winner = playGame()
        - Print game_winner
        - Once game ends - ask p1 if they'd like to play a game
            IF yes:
                - Set play_game = true
            IF no:
                - Set play_game = false
    
    IF no:
        - Set play_game = false
        - Exit program
```

---

## Function Definitions

### `playGame()`

```
Initialize:
    - Set p1_score = 0
    - Set p2_score = 0
    - Set round = 1

WHILE (p1_score !== 5 AND p2_score !== 5):
    - Print round number
    
    - round_winner = playRound()
    
    IF round_winner === 'tie:
        print - it was a tie! lets try that again 
    ELSE IF round_winner === 'p1':
        p1_score++
        round ++ 
    ELSE:
        p2_score++
        round++ 
    
    Log/Print variable values:
        - Print Round #
        - Print p1 & p2 scores

Print winner
Return winner (string)
```

---

### `playRound()`

```
- Print "Select rock, paper or scissors..."

Get player choices:
    - p1_choice = getPlayerChoice()
    - p2_choice = getComputerChoice()

Decide winner:
    - round_winner = ''
    
    IF p1_choice == p2_choice:
        round_winner = 'tie'
    ELSE IF p1_choice == ROCK AND p2_choice == SCISSORS:
        round_winner = 'p1'
    ELSE IF p1_choice == SCISSORS AND p2_choice == PAPER:
        round_winner = 'p1'
    ELSE IF p1_choice == PAPER AND p2_choice == ROCK:
        round_winner = 'p1'
    ELSE:
        round_winner = 'p2'
    
Return round_winner (string)
```

---

### `getPlayerChoice()`

```
- player_choice = accept user input (case-insensitive)
    - Use JS prompt method

Return player_choice (string)
```

---

### `getComputerChoice()`

```
- computer_choice = ''
- num = Math.random() (0-1)

IF num <= 0.3334:
    computer_choice = 'ROCK'
ELSE IF num >= 0.6667:
    computer_choice = 'SCISSORS'
ELSE:
    computer_choice = 'PAPER'

Return computer_choice (string)
```
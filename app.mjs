"use strict";

import promptSync from "prompt-sync";

import chalk from "chalk";

const prompt = promptSync({sigint: true});

console.log(chalk.magentaBright("\nAre you ready to play rock paper scissors?\n"));

const playerName = prompt(chalk.blueBright("Enter your name: "));

console.log(chalk.greenBright(`Welcome to the game ${playerName}!`));

console.log(chalk.bold.yellow("\nRules of the Game: "));

console.log(chalk.yellow("-> Type R, P, or S to enter your choice"));

console.log(chalk.yellow("-> \"R\" stands for \"Rock\""));

console.log(chalk.yellow("-> \"P\" stands for \"Paper\""));

console.log(chalk.yellow("-> \"S\" stands for \"Scissors\""));

console.log(chalk.yellow("-> Rock beats Scissors, Scissors beats Paper, and Paper beats Rock"));

console.log(chalk.yellow("-> Whoever scores 3 points first, will win the game!"));

console.log(chalk.bold.magentaBright("\nEnjoy!"));

let playerScore = 0;

let computerScore = 0;

console.log(chalk.cyanBright(`\nScore:\n${playerName}: ${playerScore} || Computer: ${computerScore}\n`));

const computerChoiceArray = [ "Rock", "Paper", "Scissors" ];

let winner = "Draw";

playGame();

// Functions to Play the game

function playTurn() {

    let playerChoice = prompt("Enter your choice: ").trim().toUpperCase();

    const computerChoice = computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)];

    switch (playerChoice) {

        case "R" :
            
            playerChoice = "Rock";

            winner = computerChoice === "Rock" ? "Draw" : computerChoice === "Paper" ? "Computer" : "Player" ;
            
            break;
        
        case "P" :
    
            playerChoice = "Paper";

            winner = computerChoice === "Paper" ? "Draw" : computerChoice === "Scissors" ? "Computer" : "Player" ;
    
            break;
        
        
        case "S" :
    
            playerChoice = "Scissors";

            winner = computerChoice === "Scissors" ? "Draw" : computerChoice === "Rock" ? "Computer" : "Player" ;
    
            break;
    
        default : 
    
            console.log(chalk.bgRed("Please enter a valid choice"));
            
            return;

    }

    console.log(`You have chosen ${playerChoice} , The computer have chosen ${computerChoice}`);

    if (winner === "Draw") {

        console.log(chalk.yellow("Its a Draw!"));
    
    } else if (winner === "Computer") {
    
        computerScore++;
    
        console.log(chalk.red("Computer wins!"));
    
    } else {
        
        playerScore++;
    
        console.log(chalk.green(`${playerName} wins!`));
        
    }

    console.log(chalk.cyanBright(`${playerName}: ${playerScore} || Computer: ${computerScore}\n`));

};

function playGame() {

    while ( !(playerScore === 3 || computerScore === 3) ) playTurn();

    console.log(chalk.bold.greenBright(`Final Score: \n${playerName}: ${playerScore} || Computer: ${computerScore}`));

    const result = playerScore === computerScore ? "The Game is a Draw" : playerScore > computerScore ? `Congratulations ${playerName}! You have the game` : `Sorry ${playerName}, Computer have won the game. Better luck next time!`;

    console.log(chalk.magentaBright(result)); 

    console.log(chalk.yellow("\nEnter \"Y\" to play again or any other key to quit the game."));

    const again = prompt(chalk.bold.cyanBright("Play Again? ")).trim().toUpperCase();

    if(again === "Y") playAgain();

};

function playAgain() {

    playerScore = 0;

    computerScore = 0;

    console.log(chalk.cyanBright(`\nScore:\n${playerName}: ${playerScore} || Computer: ${computerScore}\n`));

    playGame();

};


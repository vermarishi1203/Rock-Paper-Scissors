"use strict";

import promptSync from "prompt-sync";

import chalk from "chalk";

const prompt = promptSync({sigint: true});

console.log(chalk.magentaBright("\nAre you ready to play rock paper scissors?\n"));

const playerName = prompt(chalk.blueBright("Enter your name: "));

console.log(chalk.greenBright(`Welcome to the game ${playerName}!`));

console.log(chalk.bold.yellow("\nRules of the Game: "));

console.log(chalk.yellow("-> \"R\" stands for \"Rock\""));

console.log(chalk.yellow("-> \"P\" stands for \"Paper\""));

console.log(chalk.yellow("-> \"S\" stands for \"Scissors\""));

console.log(chalk.yellow("-> Type R, P, or S to enter your choice"));

console.log(chalk.yellow("-> Best of three turns will win the game."));

console.log(chalk.bold.magentaBright("Enjoy!"));

let playerScore = 0;

let computerScore = 0;

console.log(chalk.cyanBright(`\nScore:\n${playerName}: ${playerScore} || Computer: ${computerScore}\n`));

const computerChoiceArray = [ "R", "P", "S" ];

let winner = "Draw";

for(let i = 0; i < 3; i++) {
    playTurn();
}

console.log(chalk.bold.greenBright(`Final Score: \n${playerName}: ${playerScore} || Computer: ${computerScore}`));

const result = playerScore === computerScore ? "The Game is a Draw" : playerScore > computerScore ? `Congratulations ${playerName}! You have the game` : `Sorry ${playerName}, Computer have won the game. Better luck next time!`;

console.log(chalk.magentaBright(result)); 

// Function to Play a turn of the game

function playTurn() {

    const playerChoice = prompt("Enter your choice: ").trim().toUpperCase();

    const computerChoice = computerChoiceArray[Math.floor(Math.random() * 3)];

    console.log(`You have chosen ${playerChoice} , The computer have chosen ${computerChoice}`);

    switch (playerChoice) {

        case "R" :
            
            winner = computerChoice === "R" ? "Draw" : computerChoice === "P" ? "Computer" : "Player" ;
            
            break;
        
        case "P" :
    
            winner = computerChoice === "P" ? "Draw" : computerChoice === "S" ? "Computer" : "Player" ;
    
            break;
        
        
        case "S" :
    
            winner = computerChoice === "S" ? "Draw" : computerChoice === "R" ? "Computer" : "Player" ;
    
            break;
    
        default : 
    
            console.log(chalk.bgRed("Please enter a valid choice"));
            
            return;

    }

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

}
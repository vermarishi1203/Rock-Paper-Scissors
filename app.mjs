"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true});

console.log("\nAre you ready to play rock paper scissors?\n");

const playerName = prompt("Enter your name: ");

console.log(`Welcome to the game ${playerName}!`);

console.log("\nRules of the Game: ");

console.log("-> \"R\" stands for \"Rock\"");

console.log("-> \"P\" stands for \"Paper\"");

console.log("-> \"S\" stands for \"Scissors\"");

console.log("-> Type R, P, or S to enter your choice");

console.log("-> Best of three turns will win the game.");

console.log("Enjoy!");

let playerScore = 0;

let computerScore = 0;

console.log(`\nScore:\n${playerName}: ${playerScore} || Computer: ${computerScore}\n`);

const computerChoiceArray = [ "R", "P", "S" ];

let winner = "Draw";

for(let i = 0; i < 3; i++) {
    playTurn();
}

console.log(`Final Score: \n${playerName}: ${playerScore} || Computer: ${computerScore}`);

const result = playerScore === computerScore ? "The Game is a Draw" : playerScore > computerScore ? `Congratulations ${playerName}! You have the game` : `Sorry ${playerName}, Computer have won the game. Better luck next time!`;

console.log(result); 

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
    
            console.log("Please enter a valid choice");
            
            return;

    }

    if (winner === "Draw") {

        console.log("Its a Draw!");
    
    } else if (winner === "Computer") {
    
        computerScore++;
    
        console.log("Computer wins!");
    
    } else {
        
        playerScore++;
    
        console.log(`${playerName} wins!`);
        
    }

    console.log(`${playerName}: ${playerScore} || Computer: ${computerScore}\n`);

}
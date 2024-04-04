#! /usr/bin/env node
import inquirer from "inquirer";
// first step is to generate a random number form  computer
// second step is to take a number as guess from user 
// third step is to compare user input with computer generated number and show results 
const random_num = Math.floor(Math.random() * 10 + 1);
//  +1 is liyay so that 0 na aay aay bh to 1 add ho kar 1 aa jay 
const guess_num = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess or enter any number :",
    }
]);
if (guess_num.userGuessedNumber === random_num) {
    console.log("Congrats ! You have guessed right number ");
}
else {
    console.log("You have guessed wrong number ");
}

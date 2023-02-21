let guess = prompt("Enter either rock, paper or scissor");
let computerAnswer = ["rock","paper", "scissor"];
console.log(computerAnswer);

guess = guess.toLowerCase();

function getComputerChoice () {
    index = Math.floor(Math.random()* 3);
    x = computerAnswer[index];
    return x;
}
console.log(getComputerChoice())

function result (x,y) {
    if (x == y) {

        console.log("tie");

    } else if (x == "rock" && y=="paper"){
        console.log("you win!!!");

    } else if (x == "paper" && y == "rock") {
        console.log("You lost");

    } else if (x == "paper" && y== "scissor"){
        console.log("You win");

    } else if (x == "scissor" && y == "rock") {
        console.log("you Win");

    } else if (x == "scissor" && y == "paper") {
        console.log("you lose");
    } else if (x == "rock" && y == "scissor") {
        console.log("You lose!")
    }
}

result(x, guess);

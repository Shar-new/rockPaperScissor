let guess = prompt("Enter either rock, paper or scissor");
let computerAnswer = ["rock","paper", "scissor"];
// console.log(computerAnswer);

guess = guess.toLowerCase();

function getComputerChoice () {
    index = Math.floor(Math.random()* 3);
    x = computerAnswer[index];
    return x;
}
//console.log(getComputerChoice())

function playRound (x,y) {
    if (x == y) {

        return("tie");

    } else if (x == "rock" && y=="paper"){
        return("you win!!!");

    } else if (x == "paper" && y == "rock") {
        return("You lost");

    } else if (x == "paper" && y== "scissor"){
        return("You win");

    } else if (x == "scissor" && y == "rock") {
        return("you Win");

    } else if (x == "scissor" && y == "paper") {
        return("you lose");

    } else if (x == "rock" && y == "scissor") {
        return("You lose!")
    }

}

//console.log(playRound(x,guess));

function game(z) {
    for (let i =0; i<5; i++) {
        getComputerChoice(); 
        z = playRound(x,guess);
        console.log(z)
        
    }
}

game();

//console.log(playRound(x, guess)); 

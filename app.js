const choices = ["rock", "paper", "scissors"];
const scoreboard = {
    playerscore: 0,
    computerscore:0
}


function game(){
    for(let i =0;i<5;i++){     
const playerSelection = prompt("What is your choice?").trim().toLowerCase();
const computerSelection = computerPlay();
const winner = getWinner(playerSelection,computerSelection);
// console.log(playerSelection, computerSelection, winner);
showWinner(winner, computerSelection);
}
console.log("End of 5 moves- Game Over");
if(scoreboard.playerscore>scoreboard.computerscore){
    console.log(`Player Wins with ${scoreboard.playerscore} scores`)
}else if(scoreboard.playerscore<scoreboard.computerscore){
    console.log(`Computer Wins with ${scoreboard.computerscore} scores`)
}else{
    console.log("It's a draw!")
}
}

//get computer choice
function computerPlay(){
const rand = Math.floor(Math.random()*3 + 1);
if(rand === 1){
return choices[rand-1];
}else if(rand === 2){
return choices[rand-1];
}else{
return choices[rand-1];
}
}

//get winner
function getWinner(p,c){
if(p===c){
return "draw";
}else if(p === "rock"){
if(c === "paper"){
return "computer"
}else{
    return "player";
}
}else if(p === "paper"){
    if(c === "scissors"){
        return "computer";
    }else{
        return "player";
    }
}else if(p === "scissors"){
    if(c === "rock"){
        return "computer";
    }else{
        return "player";
    }
}
}
//show winner and scores
function showWinner(winner, computerSelection){
    if(winner === "player"){
        scoreboard.playerscore++;
        console.log(`You Win with:  ${scoreboard.playerscore} scores!`);
        console.log(`Computer Chose: ${computerSelection}` );
    }else if(winner === "computer"){
        scoreboard.computerscore++;
        console.log(`Computer Wins with:  ${scoreboard.computerscore} scores!`);
        console.log(`Computer chose: ${computerSelection}`);

    }else{
        console.log("It's a Tie!");
    }
}
game();
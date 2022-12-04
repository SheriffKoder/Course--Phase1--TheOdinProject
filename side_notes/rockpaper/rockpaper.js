console.log("here");


let gameValues = {
    choicesOptions: ['rock', 'paper', 'scissors'],
    computerScore: 0,
    userScore: 0,
    ties: 0,

};



//function randomly return either rock,paper,scissors
function getComputerChoice () {
    
    let randomChoice = Math.floor(Math.random() * 3);
    //console.log('computer choose '+ gameValues['choicesOptions'][randomChoice]);

    return gameValues['choicesOptions'][randomChoice];



}

//console.log(getComputerChoice());


//function plays a single round of rock paper scissors
//playerSelection is case insensitive  
function getUserInput (playerSelection) {

    let userChoice = prompt("choose from rock, paper, scissors");
    console.log('user choose ' + userChoice);

    return userChoice;
    //returns string declares the winner
}



function computerWinner (userInput,computerInput) {

    let scoreObject = {
        'rock': {'rock': 0, 'paper':-1, 'scissors':1 },
        'paper': {'rock': 1, 'paper':0, 'scissors':-1 },
        'scissors': {'rock': -1, 'paper':1, 'scissors':0 }
    };

    //console.log( 'your score is ', scoreObject[userInput][computerInput]);
    return scoreObject[userInput][computerInput];

}


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/




function game(e) {

    //play 5 rounds of playRound, keeps the score
    //reports a winner or loser at end

    //for (i=0; i<2; i++) {

        let user = e.target.textContent.toLowerCase();
        //let user = getUserInput();
        let computer = getComputerChoice();
        let score = computerWinner(user, computer);
        gameValues['userScore'] += score;

        //console.log(user);
        //console.log(computer);
        //console.log("this round's score" + score);
        //console.log("total score" + gameValues['userScore']);

        document.getElementById("user_selection_display").textContent = "User Selected: " + user;
        document.getElementById("computer_selection_display").textContent = "Computer Selected: " + computer;
        document.getElementById("result_display").textContent = "Round Score: " + score;
        document.getElementById("total_display").textContent = "Total Score: " + gameValues['userScore'];


    //}

    //game score, if > 0 , user wins, if < 0 computer wins
    //console.log(gameValues['userScore']);




}

//game();

let buttons = document.getElementsByTagName("button");

for (button of buttons) {
    button.addEventListener("click", game);

}
//playRound();

function playRound (e) {

    let selection = e.target.textContent.toLowerCase();
    console.log(selection); 
    return selection;


}
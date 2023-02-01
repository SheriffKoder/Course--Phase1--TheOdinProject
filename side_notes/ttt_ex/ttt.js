

function Player (name, start, score, symbol) {

    this.name = name;
    this.start = start;
    this.score = score;
    this.inputs =[];
    this.symbol = symbol;
}




const gameBoard = function (){

    const buttons = document.querySelectorAll(".game_board div");
    const start_button = document.getElementById("start_button");
    const display_message = document.querySelector(".message_header");
    console.log(buttons);

    this.Player1 = new Player("Player1", false, 0, "X");
    this.Player2 = new Player("Player2", false, 0, "O");

    let boardChecks = [];
    let turn;

    const Actions = {

        startGame : function () {
            console.log(Player1);
            start_button.addEventListener("click",this.StartPlayer(Player1));
        },

        /////////Playing loops from here on different players each turn
        StartPlayer: function (Player_number) {
            turn = Player_number;
            console.log("turn on ", turn.name);
            //console.log(Player_number);
            gameBoard.Actions.MessageAskPlayerInput(Player_number);
        },


        MessageAskPlayerInput: function (currentPlayer) {
            display_message.innerHTML = `${currentPlayer.name} please mark an available space`;
            this.listenForClicks();
        },

        listenForClicks: function () {
            buttons.forEach(cell => cell.addEventListener("click", this.checkCell));
        },

        checkCell: function (e) {
            let currentCell = e.target.id;

            let alreadyChecked = boardChecks.indexOf(currentCell);
            //console.log(alreadyChecked);

            if (alreadyChecked > -1 ) {
                console.log("already checked, please check another slot");
            }

            else {
                boardChecks.push(currentCell);
                e.target.innerHTML = turn.symbol;
                //console.log(currentCell);
    
            }

            turn.inputs.push(currentCell);
            if (gameBoard.Actions.checkWin() === 1) {
                gameBoard.Actions.determineWinner(turn.name);
            }
            else {

            gameBoard.Actions.BoardFull();
            }
        },

        checkWin : function (currentCell) {
            console.log(turn.name + " has cells of " + turn.inputs);
            let array = turn.inputs;
            array2 = array.sort( (num1,num2) => num1-num2 );  
            console.log("array2 is " + array2);

            let xx = Number(array2[0])+1;
            console.log(xx );

            if ((Number(array2[0])+1 == Number(array2[1])) && (Number(array2[0])+2 == Number(array2[2]))) {
                console.log("we have a winner");
                return 1;
            }
            else if ((Number(array2[0])*2 == Number(array2[1])) && (Number(array2[0])*3 == Number(array2[2]))) {
                return 1;
            }

            else if ((Number(array2[0])-9 == Number(array2[1])) && (Number(array2[0])-18 == Number(array2[2]))) {
                return 1;
            }

            else if ((Number(array2[0])-10 == Number(array2[1])) && (Number(array2[0])-20 == Number(array2[2]))) {
                return 1;
            }
            else {
                return 0;
            }



        },

        BoardFull: function () {
            console.log("board is " + boardChecks.length + " / 9");
            if (boardChecks.length === 9) {
                console.log("GAME OVER, Both tied");
            }
            else {
                this.switchPlayer();
            }
        },

        switchPlayer : function () {
            console.log("playerSwitched");
            //console.log(this);

            (turn === Player2) ? this.StartPlayer(Player1) : this.StartPlayer(Player2);
        },

        determineWinner: function (winner) {
            console.log("Winner is " + winner);
            display_message.innerHTML = `${winner} won this round`;
            buttons.forEach(cell => cell.removeEventListener("click",this.determineWinner));
            console.log(gameBoard[winner]);

        },

        pause : function () {

        }


    }
    

    


    return {Actions};
}();



//gameBoard.Actions.listenForClicks();
gameBoard.Actions.startGame();


let array2 = [11,13,12];  
array2 = array2.sort( (num1,num2) => num1-num2 );  
console.log(array2);

if (array2[0]+1 === array2[1] && array2[0]+2 === array2[2]) {
    console.log("we have a winner");
}










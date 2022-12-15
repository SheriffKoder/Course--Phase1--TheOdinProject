console.time('fetching data');

const text_space = document.querySelector(".writing_space");
text_space.textContent = "Hello World";

const result_space = document.querySelector(".result_space");
result_space.textContent = "Result";




/*
window.addEventListener("load", () =>{

    setTimeout(() => {
        let input = prompt("enter name");
        text_space.textContent = "Hello " + input;
  
    }, 5000);

});
*/

//any button pressed, display its value
//using eventlistener
//it has to be the calc's only
//this value is used to build a string
//which is added to the display
//include only the numbers or the arithmetic signs other wise no display





const buttons = document.querySelectorAll(".calc_buttons table tr td button");
let text_string = "";
let arithmetic = ["ONE","+","-","/","X","."];

console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", (e)=>{

        let valueGot = e.target.innerHTML;
        
        if ( (checkNaN(valueGot) && checkArith(valueGot)) || (!checkNaN(valueGot) && !checkArith(valueGot)) ) {
            //not and equal and is number or arithmetic
            console.log(valueGot);
            text_string += valueGot;
            text_space.textContent = text_string;
        }
        else if (valueGot == "=") {     //an equal
            console.log("its an equal");
        }
        else if (valueGot == "ANS") {   //calc buttons
            console.log("its an ANS");
        }
    })
});





/* reference functions */

function checkNaN (n) {
    return isNaN(Number(n));
}
function checkArith(n) {
    return (arithmetic.indexOf(n) > 0 );
}
function checkEqual(n) {
    return (n === "=")
}


//console.log(checkNaN("DEL"));
//console.log(checkArith("DEL"));
//console.log(checkEqual("DEL"));





console.timeEnd('fetching data');
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
//if no sign was put before accept any input , if sign was put before accept only digits to not cause sign errors






const buttons = document.querySelectorAll(".calc_buttons table tr td button, .calc_fn table tr td button");

let text_string = "";
let arithmetic = ["ONE","+","-","/","X","."];
let brackets = ["ONE",")"];

console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", (e)=>{

        //let valueGot = e.target.innerHTML;
        buttonSwitch(e.target.innerHTML);
    })
});

window.addEventListener("keydown", (e) => {
    console.log(e.key);
    buttonSwitch(e.key);
});


/*////////////////////////////////////////////////////////////////////*/


function buttonSwitch (valueGot) {

    if ( (checkNaN(valueGot) && checkArith(valueGot)) || (!checkNaN(valueGot) && !checkArith(valueGot)) || isBracket(valueGot)) {
        //its a not-a-number/is arithmetic OR is number/not-arithmetic OR bracket
        
        
        if ((!signBefore(text_string)) || ((signBefore(text_string)) && Number(valueGot)) )  {     
            //no sign/start was put before (for arithmetics), 
            //if sign-before/start accept only digits
            console.log(valueGot);
            text_string += valueGot;
            text_space.textContent = text_string;
        }
    
    
    }

    //inserting a safe - open bracket (
    else if ((valueGot === "(") && safeBracketOpening(text_string) && signBefore(text_string)) {
        text_string += valueGot;
        text_space.textContent = text_string;
    }

    else if ((valueGot === ")") && safeBracketClosing(text_string)) {
        text_string += valueGot;
        text_space.textContent = text_string;

    }


    else if (valueGot == "=") {     //an equal
        console.log("its an equal");
    }
    else if (valueGot == "AC") {   //calc buttons
        text_string = "";
        text_space.textContent = text_string;

    }
    else if (valueGot == "DEL" || valueGot == "Backspace") {   //calc buttons
        //console.log(text_string.length);
        text_string = text_string.slice(0, -1);
        //console.log(text_string.length);

        text_space.textContent = text_string;

    }

}


/*////////////////////////////////////////////////////////////////////*/










/* reference functions */

function checkNaN (n) {
    return isNaN(Number(n));
}
function checkArith(n) {
    return (arithmetic.indexOf(n) > 0 );
}

function isBracket(n) {
    return (brackets.indexOf(n) > 0 );
}

function checkEqual(n) {
    return (n === "=")
}

function signBefore(text) {
    
    if (Number(text[text.length-1]) || text == "" ) {
        return false;
    }
    else {
        return true;
    }

}
/*
function ArithBefore (text) {
    if (!checkArith(text[text.length-1]) || text == "" ) {
        return false;
    }
    else {
        return true;
    }

}
*/

function safeBracketOpening (text) {

    //find finds the first it finds,
    //find from last index to start so we reversed
    let bracketClosed = text.split("").reverse().find((i)=> i == ")");
    let bracketOpened = text.split("").reverse().find((i)=> i == "(");
    
    if (bracketClosed || !bracketOpened) {
        return true;
    }
    else {
        return false;
    }

}


function safeBracketClosing (text) {
    let bracketClosed = text.indexOf(")");
    let bracketOpened = text.indexOf("(");
    let Arith = checkArith(text[text.length-1]);
    let NumBefore = Number(text[text.length-1]);

    if ((bracketOpened < bracketClosed) && !Arith && NumBefore) {
        return true;
    }    
    else {
        return false;
    }


}

let text = "(123)+(9)";
console.log(safeBracketClosing(text));


//let text = "+";
//console.log(text[text.length-1]);
//console.log(signBefore(text));

//console.log(checkNaN("DEL"));
//console.log(checkArith("DEL"));
//console.log(checkEqual("DEL"));





console.timeEnd('fetching data');
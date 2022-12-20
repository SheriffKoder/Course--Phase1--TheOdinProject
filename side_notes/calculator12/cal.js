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

let text_string = "";   //start
let arithmetic = ["ONE","+","-","/","X",".","x","*","^"];
let ProhibitedStartSigns = ["ONE", "/", "X","x","*", "^"];

console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", (e)=>{

        //let valueGot = e.target.innerHTML;
        buttonSwitch(e.target.innerHTML);
    })
});

window.addEventListener("keydown", (e) => {
    buttonSwitch(e.key);
});


/*////////////////////////////////////////////////////////////////////*/


function buttonSwitch (valueGot) {

    //detect overflow and allow right ...ellipsis to text
    if (text_space.offsetWidth < text_space.scrollWidth) {
        text_space.style.cssText = "direction: rtl;"
    }
    else if (text_space.offsetWidth > text_space.scrollWidth) {
        text_space.style.cssText = "direction: ltr;"

    }

    
    if ( (checkNaN(valueGot) && checkArith(valueGot)) || (!checkNaN(valueGot) && !checkArith(valueGot)) ) {
        //its a not-a-number/is arithmetic OR is number/not-arithmetic OR bracket
        
        
        if ( (!ArithBefore(text_string)
        || ((ArithBefore(text_string)) && Number(valueGot)))
        && (!ProhibitedStart(text_string, valueGot))
        ) {     
            //no sign/start was put before (for arithmetics), 
            //if sign-before/start accept only digits
            //not a X or / after a start or open bracket
                
            console.log(valueGot);
            text_string += valueGot;
            text_space.textContent = text_string;
        
        }
    
    
    }

    //inserting a safe - open bracket (
    else if ((valueGot === "(") && safeBracketOpening(text_string) && signBefore(text_string)) {
        console.log("opened");
        text_string += valueGot;
        text_space.textContent = text_string;
    }

    else if ((valueGot === ")") && safeBracketClosing(text_string)) {
        //console.log(safeBracketClosing(text_string));
        
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
        text_string = text_string.slice(0, -1);
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
    
    if (ArithBefore(text) || text == "" || (text[text.length-1] == "(" ) ) {
        return true;
    }
    else {
        return false;
    }

}

function ArithBefore (text) {
    if (!checkArith(text[text.length-1]) ) {
        return false;
    }
    else {
        return true;
    }

}


function safeBracketOpening (text) {

    //find finds the first it finds,
    //find from last index to start so we reversed
    let bracketClosed = text.split("").reverse().find((i)=> i == ")");
    let bracketOpened = text.split("").reverse().find((i)=> i == "(");
    
    if (bracketClosed || !bracketOpened) {
        return true;
    }
    else if (text === "") {
        return true;

    }
    else if (text[text.length-1] == "(" ){
        return true;

    }
    else {
        return false;
    }

}


function NumberAfterLastOpened (text) {
    let TextReverse = text.split("").reverse();
    let bracketOpened = TextReverse.indexOf("(");
    let lastIndex = TextReverse[bracketOpened-1];
     
    //closing tag accepted if there is a number/+ or -
    //after the last open tag
    if (!isNaN(lastIndex) || lastIndex == "+" || lastIndex == "-") {
        return true;
    }
}

//let text = "(2+1";

//console.log(NumberAfterLastOpened(text));


function safeBracketClosing (text) {
    let bracketClosed = text.indexOf(")");
    let bracketOpened = text.indexOf("(");
    let Arith = checkArith(text[text.length-1]);
    let NumBefore = Number(text[text.length-1]);
    let OpenedCount = text.match(/[(]/g);
    let ClosedCount = text.match(/[)]/g);
    
    //console.log("bracket opened at " + bracketOpened + " bracket closed at " + bracketClosed + " Arith " + Arith + " Numbefore "+ NumBefore);

    if (!Arith && (OpenedCount !== null) && NumberAfterLastOpened(text) ) {
        console.log(true);

        if ( ((bracketClosed < 0) || (bracketOpened < bracketClosed)) && NumBefore) {
            return true;
        }
        else if ((OpenedCount.length > 0) && ClosedCount == null) {
            return true;
        }
        else if (OpenedCount.length > ClosedCount.length) {
            return true;
        }  
        else {
            return false;
        }
    }
    else {
        console.log(false);
        return false;
    }
    



}

//console.log(safeBracketClosing(text));
//let OpenedCount = text.match(/[(]/g);
//let ClosedCount = text.match(/[(]/g);

//console.log("Opened " + OpenedCount.length + "Closed " + ClosedCount.length);

//let text = "+";
//console.log(text[text.length-1]);
//console.log(signBefore(text));

//console.log(checkNaN("DEL"));
//console.log(checkArith("DEL"));
//console.log(checkEqual("DEL"));


function ProhibitedStart (text, valueGot) {


    console.log(text[text.length-1]);
    console.log(valueGot);

    if ( (text[text.length-1] == "(" || text == "") && (ProhibitedStartSigns.indexOf(valueGot) > 0) ) {
        return true;
    } 
    else {
        return false;
    }

}

let text = "(";
console.log(ProhibitedStart(text, "/"));





console.timeEnd('fetching data');
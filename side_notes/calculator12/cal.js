console.time('fetching data');

const text_space = document.querySelector(".writing_space");
text_space.textContent = "Hello World";

const result_space = document.querySelector(".result_space");
result_space.textContent = "Result";


console.dir(text_space); //check properties incl. scroll height

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

    if ( (text[text.length-1] == "(" || text == "") && (ProhibitedStartSigns.indexOf(valueGot) > 0) ) {
        return true;
    } 
    else {
        return false;
    }

}

//let text = "(";
//console.log(ProhibitedStart(text, "/"));





console.timeEnd('fetching data');




let textOriginal = "1+3+(4X5/2+(-3+4))";
let temp = "";
console.log("text is " + textOriginal);






/*
checkForBrackets(textOriginal);
checkForBrackets(textOriginal);
checkForBrackets(textOriginal);
*/

//check for brackets
function checkForBrackets (textInput) {

    let Opened =0;
    let Closed =0;
    for (let index in textInput ) {
        if (textInput[index] === ")") {
            //console.log(")");
            Closed++;
        }
        else if (textInput[index] === "(") {
            //console.log("(");
            Opened++;
        }
    }

    //tell if there is a missing bracket
    if (Opened > Closed ) {
        console.log("opened is greater than closed");
    }
    else if (Opened > Closed ) {
        console.log("closed is greater than opened");
    }
    //tell if there are no brackets at all
    else if (Opened =="0" && Closed =="0") {
        console.log("there are no brackets");
        //compute
    }
    else {

        temp = ReplacingBrackets(textOriginal);
        textOriginal = temp;
        console.log("text now is " + textOriginal);

    }


}


function ReplacingBrackets (text) {


//find last opened bracket

let LastOpenedBracket = text.lastIndexOf("(");
//console.log("( opened at " + LastOpenedBracket);

//find first closed bracket after it

let firstClosedBracket = text.indexOf(")",LastOpenedBracket);
//console.log(") closed at " + firstClosedBracket);

//take the string in between out
let tempText = text.slice(LastOpenedBracket+1,firstClosedBracket );
//console.log(tempText);


//compute the between string
//console.log(computeString (tempText));
let inBetween = computeString (tempText);


//slice the before and after parts from the main string
let String1 = text.slice(0,LastOpenedBracket);
//console.log(String1);

let String2 = text.slice(firstClosedBracket+1);
//console.log(String2);

let newString = `${String1}${inBetween}${String2}`;
//console.log(newString);

return newString;

}


let text22 = "1-1+44/222+1*1"

computeString(text22);

function computeString (input) {

    //find / then if not *,+,-

    if (input.indexOf("/")>0) {
        console.log("found a / ");
        let SignIndex = input.indexOf("/");
        console.log("at ", SignIndex);

        let x = getBefore_After(input, SignIndex);
        console.log(x);


    }

    else if (input.indexOf("*")>0) {
        console.log("found a * ");
    }


    else if (input.indexOf("+")>0) {
        console.log("found a + ");
    }

    else if (input.indexOf("-")>0) {
        console.log("found a - ");

    }


}


function checkLocationOfPreviousSign (inputString) {
    let signsPlaces = [];

    arithmetic.forEach(sign => {
        let x = inputString.lastIndexOf(sign);
        if (x > 0) {
        signsPlaces.push(x);
        }

    });
    signsPlaces = signsPlaces.sort();

    //console.log(signsPlaces);
    //console.log(signsPlaces[signsPlaces.length-1]);
    return signsPlaces[signsPlaces.length-1];
}


function checkLocationOfNextSign (inputString) {
    let signsPlaces = [];

    arithmetic.forEach(sign => {
        let x = inputString.indexOf(sign);
        if (x > 0) {
            signsPlaces.push(x);
        }

    });
    signsPlaces = signsPlaces.sort();

    //console.log(signsPlaces);
    //console.log(signsPlaces[0]);
    return signsPlaces[0];
}

    

function getBefore_After (input, SignIndex) {
    ////firstSplit
    //get the string before this sign to find the last sign
    let BeforeSignCheckSplit = input.slice(0,SignIndex);
    //console.log(BeforeSignCheckSplit);
    
    //get the last sign position
    let lastSignPosition = checkLocationOfPreviousSign(BeforeSignCheckSplit);

    //the number1 is from the last sign till end (the sign index)
    let firstSplit = BeforeSignCheckSplit.slice(lastSignPosition+1);
    //console.log("first Split " + firstSplit);


    ///secondSplit
    let AfterSignCheckSplit = input.slice(SignIndex+1);
    //console.log(AfterSignCheckSplit);

    //get the first sign position
    let nextSignPosition = checkLocationOfNextSign(AfterSignCheckSplit);

    //the number2 is from the sign index position[0] sign till next sign
    let secondSplit = AfterSignCheckSplit.slice(0,nextSignPosition);
    //console.log("second Split " + secondSplit);

    return [firstSplit,secondSplit];
}

//find first opened bracket after this location
/*
let newText = text.slice(LastOpenedBracket);
let FirstOpenedBracket = newText.indexOf(")");

console.log("> " + newText);
console.log("> " + FirstOpenedBracket);

let start = LastOpenedBracket+1;
let end = LastOpenedBracket+FirstOpenedBracket;

console.log(text[LastOpenedBracket+1]);
console.log(text[(LastOpenedBracket+FirstOpenedBracket)]);

let currentEquation = text.slice(start,end);
console.log(currentEquation);

//calculateEq(currentEquation);




let text2 = "1/1";
calculateEq(text2);

function calculateEq (input) {

    console.log(input);
    //find division
    let x = input.indexOf("/");

    console.log(x);


}

*/
/*
let text2312 = "1+(3+(4X5/2+(-3+4))";
let StringObject = {
    numbers: [],

}
let StartingNumbersString = 0;
/*
StringObject.numbers[0] = [];
StringObject.numbers[0].push(0);
console.log(StringObject.numbers[0]);
StringObject.numbers[0].push(1);
console.log(StringObject.numbers[0]);
*/
/*
function findAllSignLocations (inputString) {

    console.log(inputString);
    inputString = "01+1";

    StringObject.numbers[StartingNumbersString]=[];

    for (i=0; i<inputString.length; i++) {

        console.log(inputString[i]);

        let current = inputString[i];

        if (!isNaN(current)) {
            console.log("its a number");
            StringObject.numbers[StartingNumbersString].push(i);
            console.log(StringObject.numbers[StartingNumbersString]);
        }

        else if (isNaN(current)) {
            StartingNumbersString++;
            StringObject.numbers[StartingNumbersString] = [];
            console.log("current array is in location "+ StartingNumbersString);
        }
    

    }

    console.log(StringObject.numbers);

}

//findAllSignLocations(text2312);


let text2312528 = "3";
let temp;

function checkSign(beforebefore, before, number) {

    if (!isNaN(number)) {

        if (isNaN(before) && (beforebefore==undefined || beforebefore=="(")) {
            temp = `${before}${number}`;
            console.log(temp);


        }
        else {
            temp = text2312528[i];
            console.log(temp);

        }



}


}
for (i=0; i<text2312528.length; i++) {
        if (!isNaN(text2312528[i])) {
            console.log(text2312528[i]);
            console.log(text2312528[i-1]);
            console.log(text2312528[i-2]);

            if (isNaN(text2312528[i-1]) && (text2312528[i-2]==undefined || text2312528[i-2]=="(")) {
                temp = `${text2312528[i-1]}${text2312528[i]}`;
                console.log(temp);
            }
            else {
                temp = text2312528[i];
                console.log(temp);
 
            }

        }
}


*/

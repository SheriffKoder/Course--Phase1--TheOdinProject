console.time('fetching data');

const text_space = document.querySelector(".writing_space_input");
text_space.textContent = "Hello World";

const result_space = document.querySelector(".result_space_output");
result_space.textContent = "Result";

const overFlowDots = document.querySelector("#overflowDots");
const overFlowDots2 = document.querySelector("#overflowDots2");

overFlowDots.innerHTML = "";


//console.dir(text_space); //check properties incl. scroll height

/*20
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
let arithmetic = ["ONE","+","-","/","X","x","*","^", " "]; //removed .
//add space to be used as an indication of a string end to be checked when computing a last number
let ProhibitedStartSigns = ["ONE", "/", "X","x","*", "^"];

console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", (e)=>{

        //let valueGot = e.target.innerHTML;
        buttonSwitch(e.target.innerHTML);
    })
});

window.addEventListener("keydown", (e) => {
    //console.log(e.key);
    buttonSwitch(e.key);
});


/*////////////////////////////////////////////////////////////////////*/


function buttonSwitch (valueGot) {



    /////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////
    /* accept the right types */
    //only accept inputs if is number/not-arithmetic
    if (  !checkNaN(valueGot) && !checkArith(valueGot))  {
       // console.log("pass1");


            console.log(valueGot);
            text_string += valueGot;
            text_space.textContent = text_string;
        
        
    
    
    }

    //entering a sign
    //a NaN and from the arithmetic defined inputs
    else if ( checkNaN(valueGot) && checkArith(valueGot)) {
        //check passes accepted inputs if arithmetic has to not have a sign before 
        //no dot before
        //and some arithmetics cannot be a starting point like x or /
        if ( !ArithBefore(text_string) && !DotAtEnd(text_string) && !ProhibitedStart(text_string, valueGot)
        ) {     
                
            console.log(valueGot);
            text_string += valueGot;
            text_space.textContent = text_string;
        
        }
    
    
    }



    /*opened and closed brackets conditions */
    //inserting a safe - open bracket (
    ////safe opening if: 
    //there is a bracket closed before in the string or are no opened brackets
    //it is a start, there is a bracket opened before (not yet closed)
    ////arithmetic before starting point or another opened bracket

    else if (valueGot == "." && text_string[text_string.length-1] !== "." && text_string[text_string.length-1] !== ")") {
        
            console.log(valueGot);
            text_string += valueGot;
            text_space.textContent = text_string;
        
    }


    /*else if ((valueGot === "(") && safeBracketOpening(text_string) && signBefore(text_string)) {*/
    else if (valueGot === "(") {

        console.log("opened");
        text_string += valueGot;
        text_space.textContent = text_string;
    }

    else if ((valueGot === ")") && safeBracketClosing(text_string)) {
        //console.log(safeBracketClosing(text_string));
        
        text_string += valueGot;
        text_space.textContent = text_string;

    }

    /////////////////////////////////////////////////////////////
    /* other buttons */
    //to be used with a calculating function on the final string
    else if (valueGot == "=" ||valueGot == "Enter") {     //an equal

        console.log("its an equal");
        console.log(text_string);

        if (notProhibitedEnd(text_string)) {

            //round output to 2 decimal digits
            let result = Number(checkForBracketsAndCompute(text_string)).toFixed(2);
            result_space.textContent = result;

        }

        else {
            console.log("prohibited end");
        }
    }
    //AC cleans the string value and display
    else if (valueGot == "AC" || valueGot == "Meta") {   //calc buttons
        text_string = "";
        text_space.textContent = ">";
        result_space.textContent = "...";

    }
    //(Delete or backspace) removes one value from the end of the string
    else if (valueGot == "DEL" || valueGot == "Backspace") {   //calc buttons
        text_string = text_string.slice(0, -1);
        text_space.textContent = text_string;

    }

    /////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////



    /////////////////////////////////////////////////////////////
    //detect overflow and allow right ...ellipsis to text
    //placed here so when the string has an extra value added its activated
    if (text_space.offsetWidth < text_space.scrollWidth) {
        //text_space.style.cssText = "direction: rtl;"
        console.log("overflow");
        console.log("text_space.offsetWidth " + text_space.offsetWidth);
        console.log("text_space.scrollWidth " + text_space.scrollWidth);

        text_space.scrollTo(text_space.scrollWidth,0);

        overFlowDots.innerHTML = "..";
        overFlowDots.classList.add("overflowDotsBlink");

    

    }
    else  {
        //text_space.style.cssText = "direction: ltr;"
        overFlowDots.innerHTML = "";
        overFlowDots.classList.remove("overflowDotsBlink");

    }

    if (result_space.offsetWidth < result_space.scrollWidth) {
        //text_space.style.cssText = "direction: rtl;"
        console.log("overflow");
        console.log("result_space.offsetWidth " + result_space.offsetWidth);
        console.log("result_space.scrollWidth " + result_space.scrollWidth);

        result_space.scrollTo(0,0);

        overFlowDots2.innerHTML = "..";
        overFlowDots2.classList.add("overflowDotsBlink");

    

    }
    else  {
        //text_space.style.cssText = "direction: ltr;"
        overFlowDots2.innerHTML = "";
        //overFlowDots2.classList.remove("overflowDotsBlink");

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

// arithmetic before starting point or another opened bracket
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

//safe opening if: 
//there is a bracket closed before in the string or are no opened brackets
//it is a start, there is a bracket opened before (not yet closed)
//not used: actually allow opening anywhere and will calculate
function safeBracketOpening (text) {

    //find finds the first it finds,
    //find from last index to start so we reversed
    let bracketClosed = text.split("").reverse().find((i)=> i == ")");
    let bracketOpened = text.split("").reverse().find((i)=> i == "(");
    
    if (bracketClosed || !bracketOpened) {
        return true;
    }
     if (text === "") {
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

//close accepted when there is sign before, no opened brackets and its a number and no dot before
//also when there are more opened brackets than closed brackets 
//also when there are more opened brackets but no closed brackets yet
//no brackets closed or if there are brackets closed a bracket opened has to be yet opened not closed also checks for validity of this opened bracket to be safe*extra?
function safeBracketClosing (text) {
    let bracketClosed = text.indexOf(")");
    let bracketOpened = text.indexOf("(");
    let Arith = checkArith(text[text.length-1]);
    let NumBefore = Number(text[text.length-1]);
    let OpenedCount = text.match(/[(]/g);
    let ClosedCount = text.match(/[)]/g);
    let dotBefore = text[text.length-1] == ".";
    
    //console.log("bracket opened at " + bracketOpened + " bracket closed at " + bracketClosed + " Arith " + Arith + " Numbefore "+ NumBefore);

    if (!Arith && (OpenedCount !== null) && NumberAfterLastOpened(text) && !dotBefore ) {
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


let text3012 = "1+";
console.log(notProhibitedEnd(text3012));

function DotAtEnd (text) {

    if (text[text.length-1] == ".") {
        return true;
    }
    else {
        return false;
    }

}


function notProhibitedEnd (text) {

    let lastDigit = text[text.length-1];
    //console.log(lastDigit);
    if ( (DotAtEnd(text) || lastDigit == undefined || arithmetic.indexOf(lastDigit) > 0) ) {
        return false;
    } 
    else {
        return true;
    }

}





//let text = "(";
//console.log(ProhibitedStart(text, "/"));





console.timeEnd('fetching data');




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/



let textOriginal = "(1+1)2";

//checkAdjacentBrackets(textOriginal);
//console.log(checkAdjacentBrackets(textOriginal));

//console.log(checkAdjacentBrackets(textOriginal));

//function puts * in between any adjacent 2()2 combinations
//used before calulating
function checkAdjacentBrackets (text) {

    //console.log(text);

    //loop over the whole input string characters
    for (let index in text) {
        //console.log(text[index]);

        //if there is an open adjacent to a close, but * in between
        if(text[index] == "(" && text[index-1] == ")") {
            console.log("will insert");
            let part1 = text.slice(0,index);
            console.log("part1 " + part1);

            let part2 = text.slice(index);
            console.log("part2 " + part2);

            text = part1 + "*" + part2;

            //text[index] = "*("; //did not work, slice?

        }

        //and if there is a number then a "(" after it, but * in between
        else if(!isNaN(text[index-1]) && text[index] == "(" ) {
            console.log("there is a number before ( ");
            let part1 = text.slice(0,index);

            let part2 = text.slice(index);

            text = part1 + "*" + part2;

        }

        //and if there is a ")" then a number after it, but * in between
        else if (text[index-1] == ")" && !isNaN(text[index]) ) {
            console.log("there is a number after ) ");
            let part1 = text.slice(0,index);
            console.log(part1);
            let part2 = text.slice(index);
            console.log(part2);
            text = part1 + "*" + part2;
            
        }

        else {
            text = text;
        }
    }
    console.log("text result " +text);
    return text;
}





//checkForBracketsAndCompute(textOriginal);
//checkForBrackets(textOriginal);
//checkForBrackets(textOriginal);


//check for how many opened and closed brackets in the string
//if one greater than the other react upon that (because not valid yet to compute)
//no brackets then compute
//else(i.e brackets counts are equal) then also compute
function checkForBracketsAndCompute (textInput) {

    textInput = checkAdjacentBrackets(textInput);
    //console.log("text now is2 " + textInput);
    let temp = "";

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
    else if (Opened < Closed ) {
        console.log("closed is greater than opened");
    }
    //tell if there are no brackets at all (compute)
    else if (Opened =="0" && Closed =="0") {
        console.log("there are no brackets");
        console.log("and will compute "+ textInput);
        //compute
        temp = computeString(textInput);
        textInput = temp;
        console.log("text now is textInput final zero is " + textInput);
        return textInput;
    }
    //brackets are equal (compute)
    else {

        //compute (code exist)
        temp = ReplacingBrackets(textInput);
        textInput = temp;
        console.log("text now is textInput " + textInput);
        return textInput;


    }


}

let text2812 = "1+1+(1+1)";
//text2812 = ReplacingBrackets(text2812);
//ReplacingBrackets(text2812);
//ReplacingBrackets(text2812);

function checkSignCount (inputText) {

    let count = 0;

    for (let item in inputText) {
        if (arithmetic.indexOf(inputText[item])>0) {
            count++;
        }
    }
   //console.log("count is "+ count);
   return count;

}


//if brackets are checked will come here
//computing starts with taking the most nested opened/closed bracket
//giving it a dummy value "1" (inbetween) variable for now
//and compose string returns the original text with the bracket removed and inbetween value inserted
function ReplacingBrackets (text) {

console.log("Brackets " + text);
let returnValue = "";


while (checkSignCount(text)>0) {
    if (text.indexOf("(") === -1 ) {
        console.log("there is no bracket");

        text = computeString(text);
        console.log("and the no bracket equals to ", text);

    }

    else {
    //find last opened bracket
    let LastOpenedBracket = text.lastIndexOf("(");
    console.log("( opened at " + LastOpenedBracket);


    //find first closed bracket after it
    let firstClosedBracket = text.indexOf(")",LastOpenedBracket);
    console.log(") closed at " + firstClosedBracket);

    //take the string in between out
    let tempText = text.slice(LastOpenedBracket+1,firstClosedBracket );
    console.log("text to be computed " + tempText);


    //compute the between string
    let inBetween = computeString (tempText);
    console.log("string after compution " + inBetween);
    //let inBetween = 1;


    returnValue = makeString(text , LastOpenedBracket , inBetween, firstClosedBracket);
    console.log("returnValue " + returnValue);
    text = returnValue;


    console.log("Replacing brackets return value", text);
    }

}
console.log("calc finished");
return text;

}


//the function responsible for removing the old part(most nested till now) 
//and inserting the computed value (inbetween) the text for the new text
function makeString (inputText,firstSignOccurance,calculated,lastSignOccurance) {
    //slice the before and after parts from the main string

    //console.log("length" , inputText.length-1);
    inputText = inputText.trim();   //remove the added space to output the string correctly
    console.log("text is," + inputText + ",");

    let String1 = inputText.slice(0,firstSignOccurance);
    console.log("will take," + String1);
    
    console.log("and put," + calculated + ",");

    let String2 = inputText.slice(lastSignOccurance+1);
    console.log("then," + String2 + ",");
    
    let newString = `${String1}${calculated}${String2}`;
    console.log(newString);
    
    return newString;
    
    
    }


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


//let text22 = "1-1+100/200+1+1";
//let text22 = "1-4*4+1";
//computeString(text22);

let text22 = "1-.5";


//computeString(text22);



//computeString(text22);
//computeString(text22);
//computeString(text22);

//check("/","200/2");
//function to allow less code reused in compute string
function check (signFound,input) {

    console.log("// check function //");
    console.log("checking for " + input);
    input = input + " ";    //add space to be used as an indication of a string end

    //console.log(`found a ${signFound} `);          //dummy
    let SignIndex = input.indexOf(signFound);
    //console.log("at ", SignIndex);      //dummy

    //will return before and after also the signs indexes
    let BeforeAfter = getBefore_After(input, SignIndex);
    //console.log("BeforeAfter " + BeforeAfter);

    let BeforeAftercalculation = signCalculator (signFound, BeforeAfter[0],BeforeAfter[1]);
    //console.log("BeforeAftercalculation is " + BeforeAftercalculation);
    let BeforeSign = BeforeAfter[2]+1;
    let AfterSign = SignIndex+BeforeAfter[3];

    input = makeString (input,BeforeSign,BeforeAftercalculation,AfterSign);
    //console.log("output " + output);
    //input = output;
    //console.log("Result>>>>" + input);
    console.log("// end of check function //");

    return input;


}




//console.log(signCalculator("/",2,1));
//function does calculation depending on the sign provided and inputs
function signCalculator (inputSign, beforePart, afterPart) {

    switch(inputSign) {
    case "/":
        return Number(beforePart) / Number(afterPart);
        break;
    
    case "*":
        return Number(beforePart) * Number(afterPart);
        break;

    case "+":
        return Number(beforePart) + Number(afterPart);
        break;
    case "-":
        //console.log("subracting ", beforePart, afterPart);
        return Number(beforePart) - Number(afterPart);
        break;
    }


}


//finding from left to right 
// / first then * then + then -
//
function computeString (inputpassed) {

    let input = inputpassed;    //removed: add space to be used as an indication of a string end
    let calculation = "";

    //console.log("input>>>>" + input);

    while(calculation !== "end") {

    //find / then if not *,+,-
    if (input.indexOf("/")>0) {

        input = check("/",input);

/*
        console.log("found a / ");          //dummy
        let SignIndex = input.indexOf("/");
        //console.log("at ", SignIndex);      //dummy

        //will return before and after also the signs indexes
        let BeforeAfter = getBefore_After(input, SignIndex);
        //console.log("BeforeAfter " + BeforeAfter);

        let BeforeAftercalculation = BeforeAfter[0] / BeforeAfter[1];
        //console.log(BeforeAftercalculation);
        let BeforeSign = BeforeAfter[2]+1;
        let AfterSign = SignIndex+BeforeAfter[3];
        
        //let zz = input.slice(x[2]+1,SignIndex+x[3]+1);
        //console.log(zz);

        let output = ComposeString (input,BeforeSign,BeforeAftercalculation,AfterSign);
        //console.log("output" + output);
        input = output;
        console.log("Result>>>>" + input);

*/

    }


    else if (input.indexOf("*")>0) {
        input = check("*",input);

        /*
        console.log("found a * ");
        let SignIndex = input.indexOf("*");
        //console.log("at ", SignIndex);

        //will return before and after also the signs indexes
        let BeforeAfter = getBefore_After(input, SignIndex);
        //console.log(BeforeAfter);

        let BeforeAftercalculation = BeforeAfter[0] * BeforeAfter[1];
        //console.log(BeforeAftercalculation);
        let BeforeSign = BeforeAfter[2]+1;
        let AfterSign = SignIndex+BeforeAfter[3];
        
        //let zz = input.slice(x[2]+1,SignIndex+x[3]+1);
        //console.log(zz);

        let output = ComposeString (input,BeforeSign,BeforeAftercalculation,AfterSign);
        //console.log(output);
        input = output;
        console.log("Result>>>>" + input);
        */
        
    }


    else if (input.indexOf("+")>0) {

        input = check("+",input);
/*
        console.log("found a + ");
        let SignIndex = input.indexOf("+");
        console.log("at ", SignIndex);


        //will return before and after also the signs indexes
        let BeforeAfter = getBefore_After(input, SignIndex);
        console.log(BeforeAfter);

        let BeforeAftercalculation = Number(BeforeAfter[0]) + Number(BeforeAfter[1]);
        console.log(BeforeAftercalculation);
        let BeforeSign = BeforeAfter[2]+1;
        let AfterSign = SignIndex+BeforeAfter[3];
        
        //let zz = input.slice(x[2]+1,SignIndex+x[3]+1);
        //console.log(zz);

        let output = ComposeString (input,BeforeSign,BeforeAftercalculation,AfterSign);
        //console.log(output);
        input = output;
        console.log("Result>>>>" + input);
*/
    }

    else if (input.indexOf("-")>0) {

        input = check("-",input);

    }

    else {
        //console.log(input);
        return input;
        calculation = "end";
        
    }

}



}




//used in getBefore_After
function checkLocationOfPreviousSign (inputString) {
    let signsPlaces = [];

    //checks on the arithmetic values array defined at the begining of code
    arithmetic.forEach(sign => {
        let x = inputString.lastIndexOf(sign);
        if (x > 0) {
        signsPlaces.push(x);
        }

    });
    signsPlaces = signsPlaces.sort();

    //console.log("signsPlaces prev " + signsPlaces);
    //console.log("signsPlaces prev value " + signsPlaces[signsPlaces.length-1]);
    return signsPlaces[signsPlaces.length-1];
}


//used in getBefore_After
function checkLocationOfNextSign (inputString) {
    let signsPlaces = [];

    arithmetic.forEach(sign => {
        let x = inputString.indexOf(sign);
        if (x > 0) {
            signsPlaces.push(x);
        }

    });
    signsPlaces = signsPlaces.sort();

    if (signsPlaces[0] == undefined) {
        //console.log("end of string, the added space will be used ");
    }

    //console.log("signsPlaces next " + signsPlaces);
    //console.log("signsPlaces next value " + signsPlaces[0]);
    return signsPlaces[0];
}

    

function getBefore_After (input, SignIndex) {
    
    /* firstSplit */
    //get the whole string before this sign, to find the last sign next
    let BeforeSignCheckSplit = input.slice(0,SignIndex);
    //console.log("BeforeSignCheckSplit " + BeforeSignCheckSplit);
    
    //get the last sign position
    let lastSignPosition = checkLocationOfPreviousSign(BeforeSignCheckSplit);
    //console.log("lastSignPosition " + lastSignPosition);

    //the number1 is from the last sign till end (the sign index)
    let firstSplit = BeforeSignCheckSplit.slice(lastSignPosition+1);
    //console.log("first Split " + firstSplit);


    /* secondSplit */
    let AfterSignCheckSplit = input.slice(SignIndex+1);
    //console.log("AfterSignCheckSplit "+ AfterSignCheckSplit);

    //get the first sign position
    let nextSignPosition = checkLocationOfNextSign(AfterSignCheckSplit);
    //console.log("nextSignPosition "+nextSignPosition);

    //the number2 is from the sign index position[0] sign till next sign
    let secondSplit = AfterSignCheckSplit.slice(0,nextSignPosition);
    //console.log("second Split " + secondSplit);

    //return the prev/next numbers for our sign and the last/next sign positions to be used later
    //console.log("firstSplit ", firstSplit, "secondSplit ", secondSplit, "lastSignPosition ", lastSignPosition, "nextSignPosition ", nextSignPosition);
    return [firstSplit,secondSplit,lastSignPosition,nextSignPosition];
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

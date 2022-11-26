
let stringInput = "Hello 123!";


const reverseString = function(stringInput) {

    //console.log(stringInput.length);
    let stringOutput="";

    for(let i=(stringInput.length-1); i>=0; i--){
        //console.log(stringInput[i]);
        stringOutput+=stringInput[i];

    }

    //console.log(stringOutput);
    return stringOutput;

};

//reverseString(stringInput);

// Do not edit below this line
module.exports = reverseString;

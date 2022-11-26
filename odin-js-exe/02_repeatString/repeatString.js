

let stringInput = "hey";
let nTimes = 3;

const repeatString = function(stringInput, nTimes) {

    let stringOutput="";

    //console.log(stringInput +" "+ nTimes);

    if (nTimes >= 0 ) {
        for (i=0; i<nTimes; i++) {
            stringOutput += stringInput;
    
        }
    }

    else {
        stringOutput = "ERROR";
    }

    return stringOutput;
};

//repeatString(stringInput, nTimes);
//console.log(stringOutput);

// Do not edit below this line
module.exports = repeatString;


//if n 0, 1 ... do this
//if n -1 ... do this



//repeat string, n times
//arguments: string, num

//test against multiple tests

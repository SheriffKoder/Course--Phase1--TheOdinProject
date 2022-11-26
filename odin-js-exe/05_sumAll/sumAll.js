const sumAll = function(input1, input2) {

    //console.log(input1);
    //console.log(input2);

    let start;
    let end;

    let sum = 0;
    
    if(input1 < input2) {
        start = input1;
        end = input2;
    }
    else {
        start = input2;
        end = input1;
    }

    if ( (input1 < 0 || input2 < 0) ) {
        //console.log("there is a negative");
        return "ERROR";

    }

    else if (isNaN(input1) || isNaN(input2)) {
        //console.log("there is a non-number");
        return "ERROR";

    }

    else if ((typeof input1 === "string") || (typeof input2 === "string")) {
        //console.log("there is a non-number");
        return "ERROR";

    }

    else {
        for (i=start; i<=end; i++) {
            console.log(i);
            sum+=i;
        }
        //console.log("sum is " + sum);
        return sum;

    }




};



//console.log(sumAll("90",4));


// Do not edit below this line
module.exports = sumAll;






//takes 2 integers
//returns the sum of every number between and including them


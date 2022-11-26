
let arrayInput = [1,2,3,4];

const removeFromArray = function(arrayInput, ...args) {

    //console.log(arrayInput);
    //console.log(arrayInput.indexOf(arg));

    args.forEach(arg => {

        if (arrayInput.indexOf(arg) >= 0 ) {
            //console.log(arrayInput.length+ "will be reduced");

            let targetPosition = arrayInput.indexOf(arg);
            arrayInput.splice(targetPosition, 1);
            //console.log(arrayInput.length+ "to here");

        }
    });

    //console.log(arrayInput);
    return arrayInput;

};


//when length is 0, there is an output



//multiple inputs 
//try on input0, try on input1
//input[0]
//input[1]//forEach?

//items not in the array, ignore, multiple ignore


removeFromArray(arrayInput, "1",2);


// Do not edit below this line
module.exports = removeFromArray;



//takes an array, and a value
//return index of this value
//remove this value from the array
//same type


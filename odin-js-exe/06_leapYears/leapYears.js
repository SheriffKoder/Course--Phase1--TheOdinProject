const leapYears = function(input1) {

    console.log(input1);

    let condition1 = (input1 % 4);
    let condition2 = (input1 % 100);
    let condition3 = (input1 % 400);

    console.log(condition1);
    console.log(condition2);
    console.log(condition3);

   if (condition1===0 && (condition2===0 && condition3 === 0) ) {
        return true;
    }

    else if (condition1===0 && (condition2 > 0)) {
        return true;

    }
    else if (condition1 > 0 && (condition2===0 && condition3 === 0) ) {
        return true;
    }

    else {
        return false;
    }


    

};


//console.log(leapYears(1996));


// Do not edit below this line
module.exports = leapYears;


//check if this year is a leap type

//divisibe by 4
//if divisable by 100 and 400 ok 
//if divisable by 100 and not 400 , not ok

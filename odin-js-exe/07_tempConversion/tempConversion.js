const ftoc = function(tempInput) {
  //console.log("F in change "+ tempInput);

  let outputTemp = Number((( tempInput - 32 ) * (5 / 9)).toFixed(1));
  //console.log(typeof outputTemp);

  return outputTemp;

};

const ctof = function(tempInput) {

    //console.log("C in change "+ tempInput);
    return Number(( (tempInput* (9/5)) + 32  ).toFixed(1));
};

//console.log("F is > " + ctof(-10));
console.log(ftoc(100));


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
 };


//let us take a C temp

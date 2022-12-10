
/*

const palindromes = function(string) {
  const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );
};


*/

const palindromes = function (input) {

    //make the input all letters only
   let input2 = "";
   let regCheck = /^[a-z\d]$/i;

    for (i=0; i<input.length; i++){
        if (regCheck.test(input[i])) {
            console.log("its a word");
            input2 += input[i].toLowerCase();
        }
    }

    //remove all white spaces into an array
    let input_nospace = input2.split(" ");


    //array combined without ,
    //each array input added to an empty string
    let new_string = "";

    for (i=0; i<input_nospace.length; i++){
        new_string+=(input_nospace[i]);
    }

    //reverse items added to a new string

    let index = (new_string.length)-1;
    let new_input_nospace = "";

    for (i=index; i>=0; i--) {

        new_input_nospace += new_string[i];        

    }


    //console.log(new_input_nospace);

    if (input2 === new_input_nospace) {
        return true;
    }
    else {
        return false;
    }

};

//let stringX = "A car, a man, a maraca.";

//palindromes(stringX);
//console.log(palindromes(stringX));


// Do not edit below this line

module.exports = palindromes;


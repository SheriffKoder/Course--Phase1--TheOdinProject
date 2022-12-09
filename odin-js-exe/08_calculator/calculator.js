const add = function(a,b) {
  return a + b;
	
};


const subtract = function(a,b) {

  return a - b;
	
};

//console.log(subtract(10,4));


const sum = function(a) {
	
  let sum = 0;
  a.forEach(element => {
    sum = sum + element;
  });

  return sum ;

};

//console.log(sum([1,3,5,7,8]));


const multiply = function(a) {
  let total = 1;
  a.forEach(element => {
    total = total * element;
  });

  return total ;

};

//console.log(multiply([2,4,2]));


const power = function(x,n) {

  let total = 1;
  
  for (i=0; i<n; i++) {
      total = total * x;
  }

  return total;

	
};

//console.log(power(4,3));


const factorial = function(n) {
	
  if (n === 0) {
    return 1;
  }
  else {

    let x = n;
    for (i=1; i<n; i++){
      x = x * (n-i);
    }

    return x;

  }

};

//console.log(factorial(10));


// Do not edit below this line 

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};


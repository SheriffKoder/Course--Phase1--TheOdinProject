const fibonacci = function(nInput) {

    if (nInput < 0 ) {
        return "OOPS";
    }

    else {
        
        let fibo = [0,1];

        for (i=1; i<nInput; i++){
            fibo[i+1] = fibo[i]+fibo[i-1];
        }

        return fibo[nInput];
    }

};


//let n = "0";
//fibonacci(n);
//console.log(fibonacci(n));



// Do not edit below this line

module.exports = fibonacci;

const helloWorld = require('./helloWorld');
//import code from the js file name.js

describe('Hello World', function() {
//body of test
  test('says "Hello, World!"', function() {
  //the result in english as a message , expect function
    expect(helloWorld()).toEqual('Hello, World!');
  });
});


/*

////code analysis:

js file module.exports = outputFunctionName
inputFunction = require("filepath")

describe ("inputFunction", testfunction );
testfunction () { test(resultMessage, expectFunction );
expectFunction () { const , expect(inputFunction(arg).toEqual("outputRequired") )}


////npm output be like: 


inputFunction > resultMessage
inputFunction > outputRequired

Expected : outputRequired
Received : ?



/*
    /*The .match(/((hey))/g).length is a regex that will count the number of heys
    in the result, which if your function works correctly will equal the number that
    was randomly generated.
    expect(repeatString('hey', number).match(/((hey))/g).length).toEqual(number);
  });
*/
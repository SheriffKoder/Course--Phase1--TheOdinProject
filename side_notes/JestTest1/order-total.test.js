const orderTotal = require('./order-total');

const emptyFunction = () => {

}


//adding jest
//adding insertions as expectations
////not expecting a promise

//simple test
/*
it ('works', () => {
    expect(1).toBe(1);
})

//another simple test
test('OutputMessage', () => {
  expect(orderTotal({
    items: [
      { "name": "Dragon food",          price: 2,   quantity: 3 }
    ]
  })).toBe(6);
})
*/

//test expecting a promise
test('OutputMessage2', () => {
  expect(orderTotal({
    items: [
      { "name": "Dragon food (L)",          price: 4,   quantity: 3 }
    ]
  }).then(result => expect(result).toBe(12)));
})



//test.only, tests this only ignores the rest in test output
test.only("what_actually_want_code_to_do", () => {
  
  let isFakeFetchCalled = false;

  const fakeFetch = (url) => {
    expect(url).toBe('https://vatapi.com/v1/country/country-code-check?code=DE');
    isFakeFetchCalled = true;

    return Promise.resolve({
      //data.rates.standard.value
      json: () => Promise.resolve({
        rates: {
          standard: {
            value: 19
          }
        }
      })
    })
  }
  orderTotal(emptyFunction, {
    country: "DE",
    items: [
      { "name": "Dragon food",          price: 2,   quantity: 3 }
    ]

  }).then(result => {
    //
    expect(result).toBe(20*2*1.19);
    expect(isFakeFetchCalled).toBe(true);
  })
})


//it("pending test as a todo test");

/*
if (orderTotal({
    items: [
      { "name": "Dragon food",          price: 2,   quantity: 3 }
    ]
  }) !==6) {
    throw new Error("check fail: quantity");
  }

  */


  test('Assertions with tape.', (assert) => {
    const expected = 'something to test';
    const actual = 'sonething to test';
  
    assert.equal(actual, expected,
      'Given two mismatched values, .equal() should produce a nice bug report');
  
    assert.end();
  });
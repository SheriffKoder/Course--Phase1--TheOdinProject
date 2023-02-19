const orderTotal = require('./order-total');

const emptyFunction = () => {

}


//adding jest
//adding insertions as expectations
////not expecting a promise

/*
it ('works', () => {
    expect(1).toBe(1);
})

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

test ("what_actually_want_code_to_do",() => {
  
  let isFakeFetchCalled = false;

  const fakeFetch = (url) => {
    expect(url).toBe('https://vatapi.com/v1/country/country-code-check?code=DE');
    isFakeFetchCalled = true;
  }
  orderTotal(emptyFunction, {
    country: "DE",
    items: [
      { "name": "Dragon food",          price: 2,   quantity: 3 }
    ]

  }).then(result => {
    //
    expect(isFakeFetchCalled).toBe(true);
  })
})


it("pending test as a todo test");

/*
if (orderTotal({
    items: [
      { "name": "Dragon food",          price: 2,   quantity: 3 }
    ]
  }) !==6) {
    throw new Error("check fail: quantity");
  }

  */
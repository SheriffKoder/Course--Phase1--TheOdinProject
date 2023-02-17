const orderTotal = require('./order-total');

//adding jest
//adding insertions as expectations
it ('works', () => {
    expect(1).toBe(1);
})

it('Quantity', () => {
  expect(orderTotal({
    items: [
      { "name": "Dragon food",          price: 2,   quantity: 3 }
    ]
  })).toBe(6);
})


/*
if (orderTotal({
    items: [
      { "name": "Dragon food",          price: 2,   quantity: 3 }
    ]
  }) !==6) {
    throw new Error("check fail: quantity");
  }

  */
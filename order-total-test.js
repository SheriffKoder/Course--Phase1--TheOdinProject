const orderTotal = require('order-total');

if (orderTotal({
    items: [
      { name: "Dragon food",          price: 2,   quantity: 3 }
    ]
  }) !==6) {
    throw new Error("check fail: quantity");
  }
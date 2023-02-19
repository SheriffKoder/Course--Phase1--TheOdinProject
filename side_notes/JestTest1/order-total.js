function orderTotal(fetch, order) {

  fetch("https://vatapi.com/v1/country/country-code-check?code=DE" + order.country);
  ////not expecting a promise
  //return order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0)

  ////expecting a promise
  return Promise.resolve(order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0))
  

}

module.exports = orderTotal;
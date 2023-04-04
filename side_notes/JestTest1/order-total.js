function orderTotal(fetch, order) {

  if (order.country) {
    return fetch("https://vatapi.com/v1/country/country-code-check?code=DE" + order.country)
    .then(response => response.json())
    .then(data => data.rates.standard.value)
    .then(vat => order.items.reduce((prev, cur) =>
    cur.price * (cur.quantity || 1) + prev, 0) *(1+vat/100));
  }
  ////not expecting a promise (used in simple test codes in test.js)
  //return order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0)

  ////expecting a promise
  return Promise.resolve(order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0))
  

}

module.exports = orderTotal;
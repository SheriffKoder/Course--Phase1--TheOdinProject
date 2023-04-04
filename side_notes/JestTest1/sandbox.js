
//this file was a trial to use a VAT API from fun fun functions

const fetch = require('node-fetch');
const orderTotal = require('./order-total');

const result =
    fetch('https://vatapi.com/v1/country/country-code-check?code=DE', {
        headers: {
            'apikey' : process.env.VAT_API:KEY
        }
    })
    .then(response => response.json())
    .then(data => data.rates.standard.value) //extract the VAT


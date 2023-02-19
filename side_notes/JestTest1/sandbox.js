const fetch = require('node-fetch');
const result =
    fetch('https://vatapi.com/v1/country/country-code-check?code=DE', {
        headers: {
            'apikey' : process.env.VAT_API:KEY
        }
    })
    .then(response => response.json())
    .then(data => data.rates.standard.value)
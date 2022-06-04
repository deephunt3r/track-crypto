const axios = require('axios')
const colors = require('colors')

class cryptoApi{
    constructor(apiKey){
        this.apiKey = apiKey
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker'
    }
    async getPriceData(coinOpt,curOpt){
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: curOpt
          });
        try {
            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOpt}&convert=${curOpt}`)
            
            let output = '';

      res.data.forEach(coin => {
        output += `Coin: ${coin.symbol.yellow} (${coin.name})| Price: ${ formatter.format(coin.price).green } | Rank: ${coin.rank.blue}\n`;
      });
      
      return output;
    } catch (err) {
      handleAPIError(err);
    }
  }
}

function handleAPIError(err) {
  if (err.response.status === 401) {
    throw new Error('Your API key is invalid - Go to https://nomics.com');
  } else if (err.response.status === 404) {
    throw new Error('Your API is not responding');
  } else {
    throw new Error('Something is not working');
  }
}

module.exports = cryptoApi;
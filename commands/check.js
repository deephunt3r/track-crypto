const KeyManager = require('../lib/KeyManager');
const cryptoApi = require('../lib/cryptoApi');

const check = {
  async price(cmd) {
      
    try {
      const keyManagers = new KeyManager();
      const key = keyManagers.getKey();

      const api = new cryptoApi(key);

      const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

      console.log(priceOutputData);
    } catch (err) {
      console.error(err.message.red);
    }
  }
};

module.exports = check;
const program = require('commander')
const check = require('../commands/check')

program
    .command('price')
    .description('Check prices of the coin')
    .option('--coin <type>','Add specific coin types in CSV format','BTC,ETH,XRP,BNB,USDT,ADA,BUSD,DOGE,DOT,HEX')
    .option('--cur <currency>', 'Change the currency', 'USD')
    .action(cmd => check.price(cmd));



program.parse(process.argv)
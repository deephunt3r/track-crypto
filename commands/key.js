const inquirer = require('inquirer')
const colors = require('colors')
const KeyManager = require('../lib/KeyManager');
const { isRequired } = require('../utils/validation');

const key = {
    async set(){
        const KeyManagers = new KeyManager();
        const input = await inquirer.prompt([
            {
                type:'input',
                name:'key',
                message:'Enter API key '.green + 'https://nomics.com/',
                validate: isRequired

            }
        ]);

        const key = KeyManagers.setKey(input.key);
        if(key){
            console.log('API KEY set'.blue)
        }
    },

    show(){
       try{
        const KeyManagers = new KeyManager();
        const key = KeyManagers.getKey();
        console.log('Current API key is', key.yellow);
        return key;
       }
       catch(err){
        console.log(err.message.red)
       }
    },

    remove(){
        try{
            const KeyManagers = new KeyManager();
            KeyManagers.deleteKey();
            console.log('API key removed'.blue);
            return ;
           }
           catch(err){
            console.log(err.message.red)
           }
    }
};

module.exports = key;
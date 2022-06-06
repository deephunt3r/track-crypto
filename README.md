# track-crypto
`track-crypto` is a tool for displaying live cryptocurrency prices via command-line interface (CLI). It is possible to view prices in the currency of your choice as well as using the coins you wish to use

## Output
![image](https://user-images.githubusercontent.com/60481830/172158722-45f6e632-0640-4d7b-8f9b-a3f7fadcacaa.png)


## Install
You can install <b>track-crypto</b> using npm or you can clone the project and install it from the repository

 ## Using npm
 `$ npm i -g track-crypto`
 
 ## Cloning the project yourself
 
`$ git clone https://github.com/deephunt3r/track-crypto.git`

`$ cd track-crypto`

`$ npm install -g`

## Getting an API
- Get an API key from nomics.com
- Use the command `track key set` to set the API key
- Use the command `track key show` to check the API key
- Use the command `track key remove` to remove the API key

## Usage

* `track --help` - display usage information
* `track check price` - display cryptocurrencies 
    * `--coin=BTC` - To check price of a particular coins
    * `--cur=USD` - To check prices in respective currency 

## Requirements

You will only need Node.js and a node global package, npm, installed in your environement.

## Node

- #### Download

Just go on [official Node.js website](https://nodejs.org/) and download the installer.


- #### Package

You can install nodejs and npm easily with apt install

`$ sudo apt install nodejs`

`$ sudo apt install npm`

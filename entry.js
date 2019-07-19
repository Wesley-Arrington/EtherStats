// import Web3 from 'web3';
const Web3 = require('web3');

// const index = './index.html';
const web3 = new Web3(
    new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/e58d5891ebaf464dbcad6a926a107adf')
);

web3.eth.getBlock('latest').then(console.log)

console.log("UHHHHH")
// const web3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/e58d5891ebaf464dbcad6a926a107adf'));
// Web3.setProvider(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/e58d5891ebaf464dbcad6a926a107adf'));
// console.log(web3.eth.blockNumber());

// document.write(index);
require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift rival random coin grace pave army genius'; 
let testAccounts = [
"0x3490cdbbb7b9cd912a13f1a3ebd21711463a36abe0a61e60158d54d787086d4c",
"0x6a17bcd6fc20bb772afcfec13fe9534cf189884ec232af7c4739e4541bc7746c",
"0xf36f9ec02fd688d52d3e94d9e7d67ed00a780e39f420f81cc49b9985ab72e44b",
"0xe134afb69d1bf57daaff0c3c0436df0d756f24f962524be9c899040cd83dc5e0",
"0xca3ec2068c0be45b466fc7b8541013c9b6f80f39de0ce3c5344b7c082526adea",
"0x6e01f6b35fc172ac31a66fb5d3f11cf43e3ca918503bd7446c46752ae6b336e7",
"0xe0537422a7c67afc1c8b90313e366403e4b206327f348a539922515e7b26554f",
"0x33f37463c481634638ef2cc5575915a1f07f3b4058ae6352a06221e0c9566908",
"0x03609b99ed5540fd5a020920fa2e649c4a47bd9cfd9d5d6c41a1b85cd6a9acd8",
"0x48ac63d1b7dd3442335670caa367c417dc62d6a6f3ba674095bf65c3cc597930"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

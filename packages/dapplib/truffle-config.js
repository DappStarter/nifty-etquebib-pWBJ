require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture stone riot shift protect give enrich metal gather'; 
let testAccounts = [
"0x2c119b3f6ad777d04fb9fb9ec7bb8e2d57c9c004167dfeef50d5c6dfc08dc56b",
"0x4c48933023590051110a4ca7cdb0333a11fa383c5dfca81ef6ad06f596650d8f",
"0x8a34db66590b0dfe8b6ac63525bb9a23ec291ae08a85e85a2c379edbe9fbdee2",
"0x379c58410954eb6ceca52ff07dc5c72433bbead53834b955b6df66aa340a9928",
"0x0ffd6d8ce9eb839c0092f3628859971dc767fb2f29183d4e3fe35179642ef5ae",
"0xd01e14cbfd71d38c5e1af0ebd003c01b947fd84a15089f5581301dd97c7fdb3b",
"0xcf00c80234a8f305ab4ca780cbe944921d0c56289ecb794ac0345add14a6a847",
"0x470236038c0457dbf21064d62f70dfd2a5bb0883523be2afece32dab547e9a89",
"0x4022f2e7d006b9e97e9121e0c03e9c1b4c695fc94500d6a99c59e987d4f7e928",
"0x5b3e2998444677e4ef6ffaf7f8a0f28f922f480261977422a38618633d8ca2d1"
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
            version: '^0.8.0'
        }
    }
};


require("@nomiclabs/hardhat-waffle");
const fs = require('fs');

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 80001
    },
    mumbai: {
      url: "https://speedy-nodes-nyc.moralis.io/34fd482dcefadffdc49f8f37/polygon/mumbai",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}




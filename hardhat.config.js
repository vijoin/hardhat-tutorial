require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const ALCHEMY_API_KEY = "KEY"; // get it in alchemy.com
const ROPSTEN_PRIVATE_KEY = "PRIVKEY"; // get in metamask

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};

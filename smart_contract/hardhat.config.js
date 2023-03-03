// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */

//https://eth-goerli.g.alchemy.com/v2/E0uArwOLKL1odVnRlhwiX-0OUtKclLsi

require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")

const Api_url ="https://eth-goerli.g.alchemy.com/v2/E0uArwOLKL1odVnRlhwiX-0OUtKclLsi";
const 
private_key ="b289b8a7b2160f627c5f6b3ffc6c8836d492361c3a7a0f7a138db92acdf8eaf9";

module.exports = {
  solidity: "0.8.17",
  networks:
  {
    goerli:
    {
      url :Api_url ,
      accounts :[private_key]
    }
  }
};

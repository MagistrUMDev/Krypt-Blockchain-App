require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/ng5dH2zGa2NiZThgsddjg_lw4dCH0uzW",
      accounts: [
        "7df8fe5e8517ecbbc837cff82bdf2cea41a92255c922552ad31d9be5489371e9",
      ],
    },
  },
};

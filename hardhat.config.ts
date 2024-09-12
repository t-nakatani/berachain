import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [  
      { version: "0.8.24" },
      {
        version: "0.8.19",
        settings: {
          viaIR: true,
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
    ],
  },
  networks: {
    mainnet: {
      url: `${process.env.RPC_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    testnet: {
      chainId: 80084,
      url: `${process.env.TEST_RPC_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
  },
};

export default config;

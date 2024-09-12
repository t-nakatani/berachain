// npx hardhat run backend-service/utils/deploy/TestLiquidateEngine.ts --network testnet
const hre = require("hardhat");
const { ethers } = hre;

async function main(): Promise<void> {
    const [deployer] = await ethers.getSigners();

    console.log("deployer:", deployer.address);

    const Contract = await ethers.getContractFactory("TestLiquidateEngine");
    const contract = await Contract.deploy();
    // const contract = await Contract.deploy({ gasLimit: 5000000 });

    console.log("contract address:", contract.address);
}

// import hre from "hardhat";

// async function main() {
//     const contract = await hre.viem.deployContract("TestLiquidateEngine");
//     console.log(`HelloWorld deployed to ${contract.address}`);
//   }

main()
    .then(() => process.exit(0))
    .catch((error: Error) => {
        console.error(error);
        process.exit(1);
    });

import { ethers } from "ethers";
import { config } from "../config";
import { aWETH } from "../constants";
import { PoolClient } from "../contract-client/PoolClient";
import { RoutescanClient } from "../../backend-service/retriever/RoutescanClient";


async function main() {
    const provider = new ethers.providers.JsonRpcProvider(config.RPC_URL);
    const client = new RoutescanClient("apiKey", "https://api.routescan.io/v2/network/testnet/evm/80084/etherscan/api");
    const poolClient = new PoolClient(provider);
    const tokenHolders = await client.getTokenHolder(aWETH);
    for (const tokenHolder of tokenHolders.result) {
        const address = tokenHolder.TokenHolderAddress;
        const healthFactor = await poolClient.getHealthFactor(address);
        console.log(address, healthFactor);
    }
}

main();

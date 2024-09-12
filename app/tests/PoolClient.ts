import { config } from "../config";
import { ethers } from "ethers";
import { PoolClient } from "../contract-client/PoolClient";

const provider = new ethers.providers.JsonRpcProvider(config.RPC_URL);

class TestPoolClient {
    private poolClient: PoolClient;

    constructor(provider: ethers.providers.JsonRpcProvider) {
        this.poolClient = new PoolClient(provider);
    }

    async getHealthFactor(userAddress: string) {
        const userAccountData = await this.poolClient.getUserAccountData(userAddress);
        const healthFactor = userAccountData.healthFactor;
        return healthFactor / 1e18;
    }
    
    async getUserAccountData(userAddress: string) {
        return this.poolClient.getUserAccountData(userAddress);
    }

    async getReservesList() {
        return this.poolClient.getReservesList();
    }
    
}

async function main() {
    const testPoolClient = new TestPoolClient(provider);
    const healthFactor = await testPoolClient.getHealthFactor("0xE2A5f550fa726c8C9C140Ef2F42a508bdC885386");
    console.log(healthFactor);
}

main();

import { ethers, Signer } from "ethers";
import { POOL_CONTRACT_ADDRESS, POOL_CONTRACT_ABI } from "../constants/contract/Pool";
import { ContractClient } from "./ContractClient";

export class PoolClient extends ContractClient {
    constructor(provider: ethers.providers.Provider | Signer) {
        super(provider, POOL_CONTRACT_ADDRESS, POOL_CONTRACT_ABI);
    }

    async getPoolInfo(tokenAddress: string): Promise<any> {
        return this.contract.getPoolInfo(tokenAddress);
    }

    async getHealthFactor(user: string): Promise<any> {
        const userAccountData = await this.getUserAccountData(user);
        const healthFactor = userAccountData.healthFactor;
        return healthFactor / 1e18;
    }
    
    async getUserAccountData(user: string): Promise<any> {
        return this.contract.getUserAccountData(user);
    }

    async getReservesList(): Promise<any> {
        return this.contract.getReservesList();
    }
}

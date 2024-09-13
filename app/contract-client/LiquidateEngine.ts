import { ethers, Signer } from "ethers";
import { ContractClient } from "./ContractClient";
import { LIQUIDATE_ENGINE_CONTRACT_ADDRESS, LIQUIDATE_ENGINE_ABI } from "../constants/contract/LiquidateEngine";

export class LiquidateEngine extends ContractClient {
    constructor(provider: ethers.providers.Provider | Signer) {
        super(provider, LIQUIDATE_ENGINE_CONTRACT_ADDRESS, LIQUIDATE_ENGINE_ABI);
    }

    async liquidate(
        collateral: string,
        debt: string,
        liquidator: string,
        borrower: string,
        amount: number
    ) {
        return this.contract.liquidate(collateral, debt, liquidator, borrower, amount);
    }

    async recover(token: string, amount: number) {
        return this.contract.recover(token, amount);
    }
}

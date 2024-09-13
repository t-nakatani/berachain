import { LiquidateEngine } from "../contract-client/LiquidateEngine";
import { ethers } from "ethers";
import { config } from "../config";

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(config.RPC_URL);
    const signer = new ethers.Wallet(config.PRIVATE_KEY, provider);
    const liquidateEngine = new LiquidateEngine(signer);

    const tx = await liquidateEngine.recover('0x0000000000000000000000000000000000000000', 0);
    console.log(tx);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

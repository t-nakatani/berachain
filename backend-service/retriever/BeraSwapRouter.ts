// https://bartio-bex-router.berachain-devnet.com/dex/route?fromAsset=0x7507c1dc16935B82698e4C63f2746A2fCf994dF8&toAsset=0x0E4aaF1351de4c0264C5c7056Ef3777b41BD8e03&amount=100000000000000000

import "node-fetch";

class BeraSwapRouter {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getBeraSwapRoute(fromAsset: string, toAsset: string, amount: string) {
        const url = new URL(this.baseUrl);
        url.searchParams.append("fromAsset", fromAsset);
        url.searchParams.append("toAsset", toAsset);
        url.searchParams.append("amount", amount);
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}

export const beraSwapRouter = new BeraSwapRouter("https://bartio-bex-router.berachain-devnet.com/dex/route");

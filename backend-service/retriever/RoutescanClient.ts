// https://api.routescan.io/v2/network/testnet/evm/80084/etherscan/api?module=token&action=tokenholderlist&contractaddress=0xCA97345aD6A91176429CAF5aa2896732cbF66EBd&page=1&offset=10
import "node-fetch";

export class RoutescanClient {
    private apiKey: string;
    private baseUrl: string;

    constructor(apiKey: string, baseUrl: string) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }

    async getTokenHolder(tokenAddress: string) {
        const url = new URL(this.baseUrl);
        url.searchParams.append("module", "token");
        url.searchParams.append("action", "tokenholderlist");
        url.searchParams.append("contractaddress", tokenAddress);
        url.searchParams.append("page", "1");
        url.searchParams.append("offset", "100");
        if (this.apiKey) {
            url.searchParams.append("apikey", this.apiKey);
        }
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}

// async function main() {
//     const client = new RoutescanClient("apiKey", "https://api.routescan.io/v2/network/testnet/evm/80084/etherscan/api");
//     const tokenHolder = await client.getTokenHolder("0xCA97345aD6A91176429CAF5aa2896732cbF66EBd");
//     console.log(tokenHolder);
// }

// main();
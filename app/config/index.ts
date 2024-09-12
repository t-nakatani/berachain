import dotenv from "dotenv";

dotenv.config();

export const config = process.env.ENV === 'mainnet' ? {
    ENV: 'mainnet',
    RPC_URL: process.env.RPC_URL as string,
    EXPLORER_URL: process.env.EXPLORER_URL as string,
    PRIVATE_KEY: process.env.PRIVATE_KEY as string,
} : {
    ENV: 'testnet',
    RPC_URL: process.env.TEST_RPC_URL as string,
    EXPLORER_URL: process.env.TESTNET_EXPLORER_URL as string,
    PRIVATE_KEY: process.env.PRIVATE_KEY as string,
};

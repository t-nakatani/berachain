export const LIQUIDATE_ENGINE_CONTRACT_ADDRESS = "0x132c63D92DE64Bf555Cff2954899924C7BEB64F7";
export const LIQUIDATE_ENGINE_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "premium",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "initiator",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "params",
                "type": "bytes"
            }
        ],
        "name": "executeOperation",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "collateral",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "debt",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "debtToFlashloan",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "poolIdx",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "base",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "quote",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "isBuy",
                        "type": "bool"
                    }
                ],
                "internalType": "struct SwapStep[]",
                "name": "steps",
                "type": "tuple[]"
            }
        ],
        "name": "liquidate",
        "outputs": [
            {
                "internalType": "int256",
                "name": "debtGain",
                "type": "int256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "recover",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
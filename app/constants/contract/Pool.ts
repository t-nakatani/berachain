export const POOL_CONTRACT_ADDRESS = "0x30A3039675E5b5cbEA49d9a5eacbc11f9199B86D";
export const POOL_CONTRACT_ABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "provider",
                "type": "address",
                "internalType": "contract IPoolAddressesProvider"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "ADDRESSES_PROVIDER",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IPoolAddressesProvider"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "BRIDGE_PROTOCOL_FEE",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "FLASHLOAN_PREMIUM_TOTAL",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint128",
                "internalType": "uint128"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "FLASHLOAN_PREMIUM_TO_PROTOCOL",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint128",
                "internalType": "uint128"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "MAX_NUMBER_RESERVES",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "MAX_STABLE_RATE_BORROW_SIZE_PERCENT",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "POOL_REVISION",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "backUnbacked",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "fee",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "borrow",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "interestRateMode",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "referralCode",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "onBehalfOf",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "configureEModeCategory",
        "inputs": [
            {
                "name": "id",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "category",
                "type": "tuple",
                "internalType": "struct DataTypes.EModeCategory",
                "components": [
                    {
                        "name": "ltv",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "liquidationThreshold",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "liquidationBonus",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "priceSource",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "label",
                        "type": "string",
                        "internalType": "string"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "deposit",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "onBehalfOf",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "referralCode",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "dropReserve",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "finalizeTransfer",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "from",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "balanceFromBefore",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "balanceToBefore",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "flashLoan",
        "inputs": [
            {
                "name": "receiverAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "assets",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "amounts",
                "type": "uint256[]",
                "internalType": "uint256[]"
            },
            {
                "name": "interestRateModes",
                "type": "uint256[]",
                "internalType": "uint256[]"
            },
            {
                "name": "onBehalfOf",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "params",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "referralCode",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "flashLoanSimple",
        "inputs": [
            {
                "name": "receiverAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "params",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "referralCode",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getConfiguration",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct DataTypes.ReserveConfigurationMap",
                "components": [
                    {
                        "name": "data",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getEModeCategoryData",
        "inputs": [
            {
                "name": "id",
                "type": "uint8",
                "internalType": "uint8"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct DataTypes.EModeCategory",
                "components": [
                    {
                        "name": "ltv",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "liquidationThreshold",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "liquidationBonus",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "priceSource",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "label",
                        "type": "string",
                        "internalType": "string"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getReserveAddressById",
        "inputs": [
            {
                "name": "id",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getReserveData",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct DataTypes.ReserveData",
                "components": [
                    {
                        "name": "configuration",
                        "type": "tuple",
                        "internalType": "struct DataTypes.ReserveConfigurationMap",
                        "components": [
                            {
                                "name": "data",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "liquidityIndex",
                        "type": "uint128",
                        "internalType": "uint128"
                    },
                    {
                        "name": "currentLiquidityRate",
                        "type": "uint128",
                        "internalType": "uint128"
                    },
                    {
                        "name": "variableBorrowIndex",
                        "type": "uint128",
                        "internalType": "uint128"
                    },
                    {
                        "name": "currentVariableBorrowRate",
                        "type": "uint128",
                        "internalType": "uint128"
                    },
                    {
                        "name": "currentStableBorrowRate",
                        "type": "uint128",
                        "internalType": "uint128"
                    },
                    {
                        "name": "lastUpdateTimestamp",
                        "type": "uint40",
                        "internalType": "uint40"
                    },
                    {
                        "name": "id",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "aTokenAddress",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "stableDebtTokenAddress",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "variableDebtTokenAddress",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "interestRateStrategyAddress",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "accruedToTreasury",
                        "type": "uint128",
                        "internalType": "uint128"
                    },
                    {
                        "name": "unbacked",
                        "type": "uint128",
                        "internalType": "uint128"
                    },
                    {
                        "name": "isolationModeTotalDebt",
                        "type": "uint128",
                        "internalType": "uint128"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getReserveNormalizedIncome",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getReserveNormalizedVariableDebt",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getReservesList",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getUserAccountData",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "totalCollateralBase",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "totalDebtBase",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "availableBorrowsBase",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "currentLiquidationThreshold",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "ltv",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "healthFactor",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getUserConfiguration",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct DataTypes.UserConfigurationMap",
                "components": [
                    {
                        "name": "data",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getUserEMode",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "initReserve",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "aTokenAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "stableDebtAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "variableDebtAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "interestRateStrategyAddress",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "initialize",
        "inputs": [
            {
                "name": "provider",
                "type": "address",
                "internalType": "contract IPoolAddressesProvider"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "liquidationCall",
        "inputs": [
            {
                "name": "collateralAsset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "debtAsset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "debtToCover",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "receiveAToken",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "mintToPOLFeeCollector",
        "inputs": [
            {
                "name": "assets",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "mintUnbacked",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "onBehalfOf",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "referralCode",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "rebalanceStableBorrowRate",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "repay",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "interestRateMode",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "onBehalfOf",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "repayWithATokens",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "interestRateMode",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "repayWithPermit",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "interestRateMode",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "onBehalfOf",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "deadline",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "permitV",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "permitR",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "permitS",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "rescueTokens",
        "inputs": [
            {
                "name": "token",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "resetIsolationModeTotalDebt",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setConfiguration",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "configuration",
                "type": "tuple",
                "internalType": "struct DataTypes.ReserveConfigurationMap",
                "components": [
                    {
                        "name": "data",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setReserveInterestRateStrategyAddress",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "rateStrategyAddress",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setUserEMode",
        "inputs": [
            {
                "name": "categoryId",
                "type": "uint8",
                "internalType": "uint8"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setUserUseReserveAsCollateral",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "useAsCollateral",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "supply",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "onBehalfOf",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "referralCode",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "supplyWithPermit",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "onBehalfOf",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "referralCode",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "deadline",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "permitV",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "permitR",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "permitS",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "swapBorrowRateMode",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "interestRateMode",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updateBridgeProtocolFee",
        "inputs": [
            {
                "name": "protocolFee",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updateFlashloanPremiums",
        "inputs": [
            {
                "name": "flashLoanPremiumTotal",
                "type": "uint128",
                "internalType": "uint128"
            },
            {
                "name": "flashLoanPremiumToProtocol",
                "type": "uint128",
                "internalType": "uint128"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "withdraw",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "to",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "BackUnbacked",
        "inputs": [
            {
                "name": "reserve",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "backer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "fee",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Borrow",
        "inputs": [
            {
                "name": "reserve",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "user",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "onBehalfOf",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "interestRateMode",
                "type": "uint8",
                "indexed": false,
                "internalType": "enum DataTypes.InterestRateMode"
            },
            {
                "name": "borrowRate",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "referralCode",
                "type": "uint16",
                "indexed": true,
                "internalType": "uint16"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "FlashLoan",
        "inputs": [
            {
                "name": "target",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "initiator",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "asset",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "interestRateMode",
                "type": "uint8",
                "indexed": false,
                "internalType": "enum DataTypes.InterestRateMode"
            },
            {
                "name": "premium",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "referralCode",
                "type": "uint16",
                "indexed": true,
                "internalType": "uint16"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "IsolationModeTotalDebtUpdated",
        "inputs": [
            {
                "name": "asset",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "totalDebt",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "LiquidationCall",
        "inputs": [
            {
                "name": "collateralAsset",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "debtAsset",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "debtToCover",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "liquidatedCollateralAmount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "liquidator",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "receiveAToken",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "MintUnbacked",
        "inputs": [
            {
                "name": "reserve",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "user",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "onBehalfOf",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "referralCode",
                "type": "uint16",
                "indexed": true,
                "internalType": "uint16"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "MintedToPOLFeeCollector",
        "inputs": [
            {
                "name": "reserve",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amountMinted",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RebalanceStableBorrowRate",
        "inputs": [
            {
                "name": "reserve",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Repay",
        "inputs": [
            {
                "name": "reserve",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "repayer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "useATokens",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ReserveDataUpdated",
        "inputs": [
            {
                "name": "reserve",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "liquidityRate",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "stableBorrowRate",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "variableBorrowRate",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "liquidityIndex",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "variableBorrowIndex",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ReserveUsedAsCollateralDisabled",
        "inputs": [
            {
                "name": "reserve",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ReserveUsedAsCollateralEnabled",
        "inputs": [
            {
                "name": "reserve",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Supply",
        "inputs": [
            {
                "name": "reserve",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "user",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "onBehalfOf",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "referralCode",
                "type": "uint16",
                "indexed": true,
                "internalType": "uint16"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "SwapBorrowRateMode",
        "inputs": [
            {
                "name": "reserve",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "interestRateMode",
                "type": "uint8",
                "indexed": false,
                "internalType": "enum DataTypes.InterestRateMode"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "UserEModeSet",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "categoryId",
                "type": "uint8",
                "indexed": false,
                "internalType": "uint8"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Withdraw",
        "inputs": [
            {
                "name": "reserve",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    }
];

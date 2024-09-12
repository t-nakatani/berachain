// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import { IWBERA } from "./bera-native/IWBERA.sol";
import { IERC20 } from "./bera-native/IERC20.sol";
import { IPool } from "./aave-v3/IPool.sol";
import { IFlashLoanSimpleReceiver } from "./aave-v3/IFlashLoanSimpleReceiver.sol";
import { SwapStep, IBeraCrocMultiSwap } from "./bera-native/IBeraCrocMultiSwap.sol";

contract TestLiquidateEngine is IFlashLoanSimpleReceiver {
    address private immutable owner;
    IWBERA private immutable WBERA = IWBERA(0x7507c1dc16935B82698e4C63f2746A2fCf994dF8);
    IPool private immutable pool = IPool(0x30A3039675E5b5cbEA49d9a5eacbc11f9199B86D);
    IBeraCrocMultiSwap private beraCrocMultiSwap = IBeraCrocMultiSwap(payable(0x21e2C0AFd058A89FCf7caf3aEA3cB84Ae977B73D));

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function recover(address token, uint256 amount) external onlyOwner {
        if (token == address(0)) {
            (bool success, ) = payable(owner).call{value: amount}("");
            require(success, "Transfer failed");
            return;
        }
        IERC20(token).transfer(owner, amount);
    }

    function liquidate(
        address borrower,
        address collateral,
        address debt,
        uint256 debtToFlashloan,
        SwapStep[] memory steps
    ) external onlyOwner returns (int256 debtGain) {
        (, , , , , uint256 health) = pool.getUserAccountData(borrower);
        require(health < 1e18, "Health factor is higher than 1");
        uint256 debtBalance = IERC20(debt).balanceOf(borrower);
        pool.flashLoanSimple(
            address(this),
            debt,
            debtToFlashloan,
            abi.encode(address(pool), borrower, collateral, debt, steps),
            0
        );
        debtGain = int256(IERC20(debt).balanceOf(address(this))) - int256(debtBalance);
        require(debtGain > 0, "No gain");
        return debtGain;
    }

    function executeOperation(
        address asset,
        uint256 amount,
        uint256 premium,
        address initiator,
        bytes calldata params
    ) external override returns (bool) {
        uint256 repayAmount = amount + premium;
        (address poolAddress, address borrower, address collateral, address debt, SwapStep[] memory steps) = 
            abi.decode(params, (address, address, address, address, SwapStep[]));
        require(msg.sender == poolAddress, "Invalid caller");
        pool.liquidationCall(collateral, debt, borrower, amount, false);

        // swap collateral for debt
        if (collateral == debt) {
            IERC20(collateral).approve(address(pool), repayAmount);
            return true;
        }
        if (collateral == address(WBERA)) {
            WBERA.deposit{value: repayAmount}();
        }
        uint amountDebt = IERC20(debt).balanceOf(address(this));
        beraCrocMultiSwap.multiSwap(
            steps,
            uint128(amountDebt),
            0
        );
        IERC20(debt).approve(address(pool), repayAmount);
        return true;
    }
}

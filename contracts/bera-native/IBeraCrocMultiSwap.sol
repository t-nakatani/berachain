pragma solidity 0.8.19;

struct SwapStep {
    uint256 poolIdx;
    address base;
    address quote;
    bool isBuy;
}

interface IBeraCrocMultiSwap {
    function previewMultiSwap(
        SwapStep[] calldata _steps,
        uint128 _amount
    ) external view returns (uint128 out, uint256 predictedQty);

    function multiSwap(
        SwapStep[] memory _steps,
        uint128 _amount,
        uint128 _minOut
    ) external payable returns (uint128 out);

    function retire() external;

    receive() external payable;
}

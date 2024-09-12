// SPDX-License-Identifier: GPL-3

pragma solidity 0.8.19;

interface ICrocSwapDex {
    function swap(
        address base,
        address quote,
        uint256 poolIdx,
        bool isBuy,
        bool inBaseQty,
        uint128 qty,
        uint16 tip,
        uint128 limitPrice,
        uint128 minOut,
        uint8 reserveFlags
    ) external payable returns (int128 baseFlow, int128 quoteFlow);

    function protocolCmd(uint16 callpath, bytes calldata cmd, bool sudo) external payable;

    function userCmd(uint16 callpath, bytes calldata cmd) external payable returns (bytes memory);

    function userCmdRelayer(
        uint16 callpath,
        bytes calldata cmd,
        bytes calldata conds,
        bytes calldata relayerTip,
        bytes calldata signature
    ) external payable returns (bytes memory output);

    function userCmdRouter(uint16 callpath, bytes calldata cmd, address client)
        external
        payable
        returns (bytes memory);

    function readSlot(uint256 slot) external view returns (uint256 data);

    function acceptCrocDex() external pure returns (bool);

    receive() external payable;
}
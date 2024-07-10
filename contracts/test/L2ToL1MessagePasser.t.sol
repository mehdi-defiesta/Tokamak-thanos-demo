// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import {CommonTest} from "./CommonTest.t.sol";
import {L2ToL1MessagePasser} from "../L2/L2ToL1MessagePasser.sol";
import {Types} from "../libraries/Types.sol";
import {Hashing} from "../libraries/Hashing.sol";

contract L2ToL1MessagePasserTest is CommonTest {
    L2ToL1MessagePasser messagePasser;

    event WithdrawalInitiated(
        uint256 indexed nonce,
        address indexed sender,
        address indexed target,
        uint256 value,
        uint256 gasLimit,
        bytes data
    );

    event WithdrawalInitiatedExtension1(bytes32 indexed hash);

    event WithdrawerBalanceBurnt(uint256 indexed amount);

    function setUp() public virtual {
        messagePasser = new L2ToL1MessagePasser();
    }

    function test_fuzz_initiateWithdrawal(
        address _sender,
        address _target,
        uint256 _value,
        uint256 _gasLimit,
        bytes memory _data
    ) external {
        uint256 nonce = messagePasser.msgNonce();

        vm.expectEmit(true, true, true, true);
        emit WithdrawalInitiated(nonce, _sender, _target, _value, _gasLimit, _data);

        bytes32 withdrawalHash = Hashing.hashWithdrawal(
            Types.WithdrawalTransaction({
                nonce: nonce,
                sender: _sender,
                target: _target,
                value: _value,
                gasLimit: _gasLimit,
                data: _data
            })
        );

        vm.expectEmit(true, true, true, true);
        emit WithdrawalInitiatedExtension1(withdrawalHash);

        vm.deal(_sender, _value);
        vm.prank(_sender);
        messagePasser.initiateWithdrawal{value: _value}(_target, _gasLimit, _data);

        assertEq(messagePasser.sentMessages(withdrawalHash), true);

        bytes32 slot = keccak256(bytes.concat(withdrawalHash, bytes32(0)));

        assertEq(vm.load(address(messagePasser), slot), bytes32(uint256(1)));
    }
}

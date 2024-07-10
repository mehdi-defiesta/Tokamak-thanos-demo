// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import {Messenger_Initializer, Reverter, CallerCaller} from "./CommonTest.t.sol";

import {AddressAliasHelper} from "../vendor/AddressAliasHelper.sol";
import {L2ToL1MessagePasser} from "../L2/L2ToL1MessagePasser.sol";
import {L2OutputOracle} from "../L1/L2OutputOracle.sol";
import {L2CrossDomainMessenger} from "../L2/L2CrossDomainMessenger.sol";
import {L1CrossDomainMessenger} from "../L1/L1CrossDomainMessenger.sol";
import {Hashing} from "../libraries/Hashing.sol";
import {Encoding} from "../libraries/Encoding.sol";

contract L2CrossDomainMessenger_Test is Messenger_Initializer {
    // Receiver address for testing
    address recipient = address(0xabbaacdc);

    function setUp() public override {
        super.setUp();
    }

    function test_L2MessengerSendMessage() external {
        vm.expectCall(
            address(messagePasser),
            abi.encodeWithSelector(
                L2ToL1MessagePasser.initiateWithdrawal.selector,
                address(L1Messenger),
                L2Messenger.baseGas(hex"ff", 100),
                Encoding.encodeCrossDomainMessage(L2Messenger.messageNonce(), alice, recipient, 0, 100, hex"ff")
            )
        );

        // WithdrawalInitiated event
        vm.expectEmit(true, true, true, true);
        emit WithdrawalInitiated(
            messagePasser.msgNonce(),
            address(L2Messenger),
            address(L1Messenger),
            0,
            L2Messenger.baseGas(hex"ff", 100),
            Encoding.encodeCrossDomainMessage(L2Messenger.messageNonce(), alice, recipient, 0, 100, hex"ff")
        );

        vm.prank(alice);
        L2Messenger.sendMessage(recipient, hex"ff", uint32(100));
    }

    function test_L2MessengerRelayMessageSucceeds() external {
        address target = address(0xabcd);
        address sender = address(L1Messenger);
        address caller = AddressAliasHelper.applyL1ToL2Alias(address(L1Messenger));

        vm.expectCall(target, hex"1111");

        vm.prank(caller);

        vm.expectEmit(true, true, true, true);

        bytes32 hash =
            Hashing.hashCrossDomainMessage(Encoding.encodeVersionedNonce(0, 1), sender, target, 0, 0, hex"1111");

        emit RelayedMessage(hash);

        L2Messenger.relayMessage(
            Encoding.encodeVersionedNonce(0, 1), // nonce
            sender,
            target,
            0, // value
            0,
            hex"1111"
        );

        // the message hash is in the successfulMessages mapping
        assert(L2Messenger.successfulMessages(hash));
    }
}

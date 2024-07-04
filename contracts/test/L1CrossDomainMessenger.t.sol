// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

/* Testing utilities */
import {Messenger_Initializer, Reverter, CallerCaller} from "./CommonTest.t.sol";
import {L2OutputOracle_Initializer} from "./L2OutputOracle.t.sol";

/* Libraries */
import {AddressAliasHelper} from "../vendor/AddressAliasHelper.sol";
import {Predeploys} from "../libraries/Predeploys.sol";
import {Hashing} from "../libraries/Hashing.sol";
import {Encoding} from "../libraries/Encoding.sol";

/* Target contract dependencies */
import {L2OutputOracle} from "../L1/L2OutputOracle.sol";
import {OptimismPortal} from "../L1/OptimismPortal.sol";

/* Target contract */
import {L1CrossDomainMessenger} from "../L1/L1CrossDomainMessenger.sol";

contract L1CrossDomainMessenger_Test is Messenger_Initializer {
    // Receiver address for testing
    address recipient = address(0xabbaacdc);

    function setUp() public override {
        super.setUp();
    }

    // sendMessage: should be able to send a single message
    // TODO: this same test needs to be done with the legacy message type
    // by setting the message version to 0
    function test_L1MessengerSendMessage() external {
        // deposit transaction on the optimism portal should be called
        vm.expectCall(
            address(op),
            abi.encodeWithSelector(
                OptimismPortal.depositTransaction.selector,
                Predeploys.L2_CROSS_DOMAIN_MESSENGER,
                0,
                L1Messenger.baseGas(hex"ff", 100),
                false,
                Encoding.encodeCrossDomainMessage(L1Messenger.messageNonce(), alice, recipient, 0, 100, hex"ff")
            )
        );

        // TransactionDeposited event
        vm.expectEmit(true, true, true, true);
        emitTransactionDeposited(
            AddressAliasHelper.applyL1ToL2Alias(address(L1Messenger)),
            Predeploys.L2_CROSS_DOMAIN_MESSENGER,
            0,
            0,
            L1Messenger.baseGas(hex"ff", 100),
            false,
            Encoding.encodeCrossDomainMessage(L1Messenger.messageNonce(), alice, recipient, 0, 100, hex"ff")
        );

        // SentMessage event
        vm.expectEmit(true, true, true, true);
        emit SentMessage(recipient, alice, hex"ff", L1Messenger.messageNonce(), 100);

        // SentMessageExtension1 event
        vm.expectEmit(true, true, true, true);
        emit SentMessageExtension1(alice, 0);

        vm.prank(alice);
        L1Messenger.sendMessage(recipient, hex"ff", uint32(100));
    }

    // relayMessage: should send a successful call to the target contract
    function test_L1MessengerRelayMessageSucceeds() external {
        address target = address(0xabcd);
        address sender = Predeploys.L2_CROSS_DOMAIN_MESSENGER;

        vm.expectCall(target, hex"1111");

        // set the value of op.l2Sender() to be the L2 Cross Domain Messenger.
        uint256 senderSlotIndex = 51;
        vm.store(address(op), bytes32(senderSlotIndex), bytes32(abi.encode(sender)));
        vm.prank(address(op));

        vm.expectEmit(true, true, true, true);

        bytes32 hash =
            Hashing.hashCrossDomainMessage(Encoding.encodeVersionedNonce(0, 1), sender, target, 0, 0, hex"1111");

        emit RelayedMessage(hash);

        L1Messenger.relayMessage(
            Encoding.encodeVersionedNonce(0, 1), // nonce
            sender,
            target,
            0, // value
            0,
            hex"1111"
        );

        // the message hash is in the successfulMessages mapping
        assert(L1Messenger.successfulMessages(hash));
        // it is not in the received messages mapping
        assertEq(L1Messenger.receivedMessages(hash), false);
    }

    // relayMessage: should revert if eth is sent from a contract other than the standard bridge
    function test_L1MessengerReplayMessageWithValue() external {
        address target = address(0xabcd);
        address sender = Predeploys.L2_CROSS_DOMAIN_MESSENGER;
        bytes memory message = hex"1111";

        vm.expectRevert("CrossDomainMessenger: value must be zero unless message is from a system address");
        L1Messenger.relayMessage{value: 100}(Encoding.encodeVersionedNonce(0, 1), sender, target, 0, 0, message);
    }
}

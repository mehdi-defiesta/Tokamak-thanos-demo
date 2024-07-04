// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import {Bridge_Initializer} from "./CommonTest.t.sol";
import {StandardBridge} from "../universal/StandardBridge.sol";
import {L2StandardBridge} from "../L2/L2StandardBridge.sol";
import {CrossDomainMessenger} from "../universal/CrossDomainMessenger.sol";
import {Predeploys} from "../libraries/Predeploys.sol";
import {AddressAliasHelper} from "../vendor/AddressAliasHelper.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {stdStorage, StdStorage} from "forge-std/Test.sol";

contract L1StandardBridge_Test is Bridge_Initializer {
    using stdStorage for StdStorage;

    function setUp() public override {
        super.setUp();
    }

    function test_initialize() external {
        assertEq(address(L1Bridge.messenger()), address(L1Messenger));

        assertEq(address(L1Bridge.otherBridge()), Predeploys.L2_STANDARD_BRIDGE);

        assertEq(address(L2Bridge), Predeploys.L2_STANDARD_BRIDGE);
    }

    // receive
    // - can accept ETH
    function test_receive() external {
        assertEq(address(op).balance, 0);

        vm.expectEmit(true, true, true, true);
        emit ETHBridgeInitiated(alice, alice, 100, hex"");

        vm.expectCall(
            address(L1Messenger),
            abi.encodeWithSelector(
                CrossDomainMessenger.sendMessage.selector,
                address(L2Bridge),
                abi.encodeWithSelector(StandardBridge.finalizeBridgeETH.selector, alice, alice, 100, hex""),
                200_000
            )
        );

        vm.prank(alice, alice);
        (bool success,) = address(L1Bridge).call{value: 100}(hex"");
        assertEq(success, true);
        assertEq(address(op).balance, 100);
    }

    // depositETH
    // - emits ETHDepositInitiated
    // - calls optimismPortal.depositTransaction
    // - only EOA
    // - ETH ends up in the optimismPortal
    function test_depositETH() external {
        assertEq(address(op).balance, 0);

        vm.expectEmit(true, true, true, true);
        emit ETHBridgeInitiated(alice, alice, 500, hex"ff");

        vm.expectCall(
            address(L1Messenger),
            abi.encodeWithSelector(
                CrossDomainMessenger.sendMessage.selector,
                address(L2Bridge),
                abi.encodeWithSelector(StandardBridge.finalizeBridgeETH.selector, alice, alice, 500, hex"ff"),
                50000
            )
        );

        vm.prank(alice, alice);
        L1Bridge.depositETH{value: 500}(50000, hex"ff");
        assertEq(address(op).balance, 500);
    }

    // finalizeETHWithdrawal
    // - emits ETHWithdrawalFinalized
    // - only callable by L2 bridge
    function test_finalizeETHWithdrawal() external {
        uint256 aliceBalance = alice.balance;

        vm.expectEmit(true, true, true, true);
        emit ETHWithdrawalFinalized(alice, alice, 100, hex"");

        vm.expectCall(alice, hex"");

        vm.mockCall(
            address(L1Bridge.messenger()),
            abi.encodeWithSelector(CrossDomainMessenger.xDomainMessageSender.selector),
            abi.encode(address(L1Bridge.otherBridge()))
        );
        // ensure that the messenger has ETH to call with
        vm.deal(address(L1Bridge.messenger()), 100);
        vm.prank(address(L1Bridge.messenger()));
        L1Bridge.finalizeETHWithdrawal{value: 100}(alice, alice, 100, hex"");

        assertEq(address(L1Bridge.messenger()).balance, 0);
        assertEq(aliceBalance + 100, alice.balance);
    }

    // finalizeERC20Withdrawal
    // - updates bridge.deposits
    // - emits ERC20WithdrawalFinalized
    // - only callable by L2 bridge
    function test_finalizeERC20Withdrawal() external {
        deal(address(L1Token), address(L1Bridge), 100, true);

        uint256 slot = stdstore.target(address(L1Bridge)).sig("deposits(address,address)").with_key(address(L1Token))
            .with_key(address(L2Token)).find();

        // Give the L1 bridge some ERC20 tokens
        vm.store(address(L1Bridge), bytes32(slot), bytes32(uint256(100)));
        assertEq(L1Bridge.deposits(address(L1Token), address(L2Token)), 100);

        vm.expectEmit(true, true, true, true);
        emit ERC20WithdrawalFinalized(address(L1Token), address(L2Token), alice, alice, 100, hex"");

        vm.expectCall(address(L1Token), abi.encodeWithSelector(ERC20.transfer.selector, alice, 100));

        vm.mockCall(
            address(L1Bridge.messenger()),
            abi.encodeWithSelector(CrossDomainMessenger.xDomainMessageSender.selector),
            abi.encode(address(L1Bridge.otherBridge()))
        );
        vm.prank(address(L1Bridge.messenger()));
        L1Bridge.finalizeERC20Withdrawal(address(L1Token), address(L2Token), alice, alice, 100, hex"");

        assertEq(L1Token.balanceOf(address(L1Bridge)), 0);
        assertEq(L1Token.balanceOf(address(alice)), 100);
    }
}

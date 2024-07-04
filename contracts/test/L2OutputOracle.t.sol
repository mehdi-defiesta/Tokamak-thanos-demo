// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import {L2OutputOracle_Initializer, NextImpl} from "./CommonTest.t.sol";
import {L2OutputOracle} from "../L1/L2OutputOracle.sol";
import {Proxy} from "../universal/Proxy.sol";
import {Types} from "../libraries/Types.sol";

contract L2OutputOracleTest is L2OutputOracle_Initializer {
    bytes32 proposedOutput1 = keccak256(abi.encode(1));

    function setUp() public override {
        super.setUp();
    }

    /**
     *
     * Getter Tests *
     *
     */

    // Test: getL2Output() should return the correct value
    function test_getL2Output() external {
        uint256 nextBlockNumber = oracle.nextBlockNumber();
        warpToProposeTime(nextBlockNumber);
        vm.prank(proposer);
        oracle.proposeL2Output(proposedOutput1, nextBlockNumber, 0, 0);

        Types.OutputProposal memory proposal = oracle.getL2Output(nextBlockNumber);
        assertEq(proposal.outputRoot, proposedOutput1);
        assertEq(proposal.timestamp, block.timestamp);

        // Handles a block number that is between checkpoints:
        proposal = oracle.getL2Output(nextBlockNumber - 1);
        assertEq(proposal.outputRoot, proposedOutput1);
        assertEq(proposal.timestamp, block.timestamp);

        // The block number is too low:
        vm.expectRevert("L2OutputOracle: block number cannot be less than the starting block number.");
        oracle.getL2Output(0);

        // The block number is larger than the latest proposed output:
        vm.expectRevert("L2OutputOracle: No output found for that block number.");
        oracle.getL2Output(nextBlockNumber + 1);
    }

    /**
     *
     * Propose Tests
     *
     */

    // Test: proposeL2Output succeeds when given valid input, and no block hash and number are
    // specified.
    function test_proposingAnotherOutput() public {
        bytes32 proposedOutput2 = keccak256(abi.encode(2));
        uint256 nextBlockNumber = oracle.nextBlockNumber();
        warpToProposeTime(nextBlockNumber);
        uint256 proposedNumber = oracle.latestBlockNumber();

        // Ensure the submissionInterval is enforced
        assertEq(nextBlockNumber, proposedNumber + submissionInterval);

        vm.roll(nextBlockNumber + 1);
        vm.prank(proposer);
        oracle.proposeL2Output(proposedOutput2, nextBlockNumber, 0, 0);
    }

    /**
     *
     * Delete Tests - Happy Path *
     *
     */

    event OutputDeleted(bytes32 indexed l2Output, uint256 indexed l1Timestamp, uint256 indexed l2BlockNumber);

    function test_deleteOutput() external {
        test_proposingAnotherOutput();

        uint256 latestBlockNumber = oracle.latestBlockNumber();
        Types.OutputProposal memory proposalToDelete = oracle.getL2Output(latestBlockNumber);
        Types.OutputProposal memory newLatestOutput = oracle.getL2Output(latestBlockNumber - submissionInterval);

        vm.prank(owner);
        vm.expectEmit(true, true, false, false);
        emit OutputDeleted(proposalToDelete.outputRoot, proposalToDelete.timestamp, latestBlockNumber);
        oracle.deleteL2Output(proposalToDelete);

        // validate latestBlockNumber has been reduced
        uint256 latestBlockNumberAfter = oracle.latestBlockNumber();
        assertEq(latestBlockNumber - submissionInterval, latestBlockNumberAfter);

        Types.OutputProposal memory proposal = oracle.getL2Output(latestBlockNumberAfter);
        // validate that the new latest output is as expected.
        assertEq(newLatestOutput.outputRoot, proposal.outputRoot);
        assertEq(newLatestOutput.timestamp, proposal.timestamp);
    }
}

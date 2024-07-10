// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "forge-std/Test.sol";
import "contracts/L1/OptimismPortal.sol";
import "contracts/L1/L2OutputOracle.sol";
import "contracts/L1/SystemConfig.sol";
import "contracts/L1/SuperchainConfig.sol";
import "contracts/libraries/Types.sol";
import "contracts/libraries/Hashing.sol";

contract OptimismPortalTest is Test {
    OptimismPortal portal;
    L2OutputOracle oracle;
    SystemConfig systemConfig;
    SuperchainConfig superchainConfig;
    address proposer = address(0x1);
    address challenger = address(0x2);

    function setUp() public {
        // Deploy the necessary contracts
        oracle = new L2OutputOracle();
        systemConfig = new SystemConfig();
        superchainConfig = new SuperchainConfig();

        // Manipulate the block timestamp to ensure it is always greater than 1000
        vm.warp(block.timestamp + 2000);

        // Initialize the L2OutputOracle
        oracle.initialize(
            10, // submissionInterval
            2, // l2BlockTime
            0, // startingBlockNumber
            block.timestamp - 1000, // startingTimestamp (set to a fixed past timestamp)
            proposer, // proposer
            challenger, // challenger
            60 // finalizationPeriodSeconds
        );

        // Deploy and initialize the OptimismPortal
        portal = new OptimismPortal();
        portal.initialize(oracle, systemConfig, superchainConfig);
    }

    function testInitialization() public {
        assertEq(address(portal.l2Oracle()), address(oracle));
        assertEq(address(portal.systemConfig()), address(systemConfig));
        assertEq(address(portal.superchainConfig()), address(superchainConfig));
    }

    function testProveWithdrawalTransaction() public {
        // Create a dummy withdrawal transaction
        Types.WithdrawalTransaction memory withdrawalTx = Types.WithdrawalTransaction({
            sender: address(this),
            target: address(0x3),
            value: 1 ether,
            gasLimit: 100000,
            nonce: 0,
            data: ""
        });

        // Propose an L2 output
        bytes32 outputRoot = keccak256(abi.encodePacked("outputRoot"));
        vm.prank(proposer);
        oracle.proposeL2Output(
            outputRoot,
            10, // l2BlockNumber
            bytes32(0), // l1BlockHash
            0 // l1BlockNumber
        );

        // Create a valid output root proof
        Types.OutputRootProof memory outputRootProof = Types.OutputRootProof({
            version: bytes32(uint256(1)),
            stateRoot: keccak256(abi.encodePacked("stateRoot")),
            messagePasserStorageRoot: keccak256(abi.encodePacked("messagePasserStorageRoot")),
            latestBlockhash: keccak256(abi.encodePacked("latestBlockhash"))
        });

        // Log the output root proof for debugging
        emit log_bytes32(outputRootProof.version);
        emit log_bytes32(outputRootProof.stateRoot);
        emit log_bytes32(outputRootProof.messagePasserStorageRoot);
        emit log_bytes32(outputRootProof.latestBlockhash);

        // Create a dummy withdrawal proof
        bytes[] memory withdrawalProof = new bytes[](1);
        withdrawalProof[0] = bytes("");

        // Manipulate the block timestamp to ensure it is not in the future
        vm.warp(block.timestamp + 10);

        // Prove the withdrawal transaction
        portal.proveWithdrawalTransaction(withdrawalTx, 0, outputRootProof, withdrawalProof);

        // Check that the withdrawal has been proven
        bytes32 withdrawalHash = Hashing.hashWithdrawal(withdrawalTx);
        OptimismPortal.ProvenWithdrawal memory provenWithdrawal = portal.getProvenWithdrawal(withdrawalHash);
        assertEq(provenWithdrawal.outputRoot, outputRoot);
        assertEq(provenWithdrawal.timestamp, uint128(block.timestamp));
        assertEq(provenWithdrawal.l2OutputIndex, uint128(0));
    }

    function testFinalizeWithdrawalTransaction() public {
        // Create a dummy withdrawal transaction
        Types.WithdrawalTransaction memory withdrawalTx = Types.WithdrawalTransaction({
            sender: address(this),
            target: address(0x3),
            value: 1 ether,
            gasLimit: 100000,
            nonce: 0,
            data: ""
        });

        // Propose an L2 output
        bytes32 outputRoot = keccak256(abi.encodePacked("outputRoot"));
        vm.prank(proposer);
        oracle.proposeL2Output(
            outputRoot,
            10, // l2BlockNumber
            bytes32(0), // l1BlockHash
            0 // l1BlockNumber
        );

        // Create a valid output root proof
        Types.OutputRootProof memory outputRootProof = Types.OutputRootProof({
            version: bytes32(uint256(1)),
            stateRoot: keccak256(abi.encodePacked("stateRoot")),
            messagePasserStorageRoot: keccak256(abi.encodePacked("messagePasserStorageRoot")),
            latestBlockhash: keccak256(abi.encodePacked("latestBlockhash"))
        });

        // Log the output root proof for debugging
        emit log_bytes32(outputRootProof.version);
        emit log_bytes32(outputRootProof.stateRoot);
        emit log_bytes32(outputRootProof.messagePasserStorageRoot);
        emit log_bytes32(outputRootProof.latestBlockhash);

        // Create a dummy withdrawal proof
        bytes[] memory withdrawalProof = new bytes[](1);
        withdrawalProof[0] = bytes("");

        // Manipulate the block timestamp to ensure it is not in the future
        vm.warp(block.timestamp + 10);

        // Prove the withdrawal transaction
        portal.proveWithdrawalTransaction(withdrawalTx, 0, outputRootProof, withdrawalProof);

        // Manipulate the block timestamp to ensure the finalization period has elapsed
        vm.warp(block.timestamp + 70);

        // Finalize the withdrawal transaction
        portal.finalizeWithdrawalTransaction(withdrawalTx);

        // Check that the withdrawal has been finalized
        bytes32 withdrawalHash = Hashing.hashWithdrawal(withdrawalTx);
        assertTrue(portal.finalizedWithdrawals(withdrawalHash));
    }
}

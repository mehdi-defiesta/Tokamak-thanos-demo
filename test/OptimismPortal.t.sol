// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "forge-std/Test.sol";
import "contracts/L1/OptimismPortal.sol";
import "contracts/L1/SystemConfig.sol";
import "contracts/L1/L2OutputOracle.sol";
import "contracts/L1/SuperchainConfig.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockERC20 is ERC20 {
    constructor() ERC20("Mock Token", "MTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}

contract OptimismPortalTest is Test {
    OptimismPortal portal;
    SystemConfig systemConfig;
    L2OutputOracle l2Oracle;
    SuperchainConfig superchainConfig;
    MockERC20 token;

    address user = address(0x123);

    event TransactionDeposited(address indexed from, address indexed to, uint256 indexed version, bytes opaqueData);

    function setUp() public {
        // Deploy mock contracts
        token = new MockERC20();
        systemConfig = new SystemConfig();
        l2Oracle = new L2OutputOracle();
        superchainConfig = new SuperchainConfig();

        // Initialize the SystemConfig contract with the native token address
        SystemConfig.Addresses memory addresses = SystemConfig.Addresses({
            l1CrossDomainMessenger: address(0),
            l1ERC721Bridge: address(0),
            l1StandardBridge: address(0),
            l2OutputOracle: address(l2Oracle),
            optimismPortal: address(0),
            optimismMintableERC20Factory: address(0),
            nativeTokenAddress: address(token)
        });

        systemConfig.initialize(
            address(this), // _owner
            0, // _overhead
            0, // _scalar
            bytes32(0), // _batcherHash
            1000000, // _gasLimit (increased gas limit)
            address(0), // _unsafeBlockSigner
            ResourceMetering.ResourceConfig({
                maxResourceLimit: 1000000, // Set a reasonable max resource limit
                elasticityMultiplier: 1,
                baseFeeMaxChangeDenominator: 2,
                minimumBaseFee: 0,
                systemTxMaxGas: 0,
                maximumBaseFee: 1000000 // Set a reasonable max base fee
            }), // _config
            address(0), // _batchInbox
            addresses // _addresses
        );

        // Deploy and initialize the OptimismPortal contract
        portal = new OptimismPortal();
        portal.initialize(l2Oracle, systemConfig, superchainConfig);

        // Transfer some tokens to the user
        token.transfer(user, 1000 * 10 ** token.decimals());
    }

    function testDepositTransaction() public {
        // User approves the portal to spend their tokens
        vm.startPrank(user);
        token.approve(address(portal), 100 * 10 ** token.decimals());
        vm.stopPrank();

        // Capture the emitted events
        vm.recordLogs();

        // Call depositTransaction with a higher gas limit
        vm.startPrank(user);
        portal.depositTransaction(
            address(0x456), // _to
            100 * 10 ** token.decimals(), // _mint
            0, // _value
            100000, // _gasLimit (increased gas limit)
            false, // _isCreation
            "" // _data
        );
        vm.stopPrank();

        // Get the recorded logs
        Vm.Log[] memory logs = vm.getRecordedLogs();

        // Check if the TransactionDeposited event was emitted
        bool eventFound = false;
        for (uint256 i = 0; i < logs.length; i++) {
            if (logs[i].topics[0] == keccak256("TransactionDeposited(address,address,uint256,bytes)")) {
                eventFound = true;
                break;
            }
        }

        // Assert that the event was found
        assertTrue(eventFound, "TransactionDeposited event was not emitted");
    }
}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "forge-std/Test.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "contracts/L1/L1CrossDomainMessenger.sol";
import "contracts/L1/SuperchainConfig.sol";
import "contracts/L1/OptimismPortal.sol";
import "contracts/L1/SystemConfig.sol";
import "contracts/L1/L2OutputOracle.sol";
import "contracts/libraries/Predeploys.sol";

contract L1CrossDomainMessengerTest is Test {
    using SafeERC20 for IERC20;

    L1CrossDomainMessenger messenger;
    SuperchainConfig superchainConfig;
    OptimismPortal portal;
    SystemConfig systemConfig;
    L2OutputOracle l2Oracle;
    MockERC20 nativeToken;
    address otherMessengerAddress = address(0x1234);
    address proposer = address(0x1);
    address challenger = address(0x2);

    // Declare the events from the CrossDomainMessenger contract
    event SentMessage(address indexed target, address sender, bytes message, uint256 messageNonce, uint256 gasLimit);
    event SentMessageExtension1(address indexed sender, uint256 value);
    event RelayedMessage(bytes32 indexed msgHash);
    event FailedRelayedMessage(bytes32 indexed msgHash);

    function setUp() public {
        superchainConfig = new SuperchainConfig();
        nativeToken = new MockERC20();

        // Initialize the SystemConfig contract with the native token address
        systemConfig = new SystemConfig();

        // L2Oracle initialization
        l2Oracle = new L2OutputOracle();
        // Manipulate the block timestamp to ensure it is always greater than 1000
        vm.warp(block.timestamp + 2000);

        // Initialize the L2OutputOracle
        l2Oracle.initialize(
            10, // submissionInterval
            2, // l2BlockTime
            0, // startingBlockNumber
            block.timestamp - 1000, // startingTimestamp (set to a fixed past timestamp)
            proposer, // proposer
            challenger, // challenger
            60 // finalizationPeriodSeconds
        );

        portal = new OptimismPortal();
        portal.initialize(l2Oracle, systemConfig, superchainConfig);

        messenger = new L1CrossDomainMessenger();
        messenger.initialize(superchainConfig, portal, systemConfig);
    }

    function testSendNativeTokenMessage() public {
        address target = address(0x5678);
        bytes memory message = "Hello, World!";
        uint32 minGasLimit = 5000; // Adjusted gas limit to be within acceptable range
        uint256 value = 1 ether; // Amount of native token to send

        // Mint tokens to the test contract
        nativeToken.mint(address(this), value);

        // Approve the messenger to spend the tokens
        nativeToken.approve(address(messenger), value);

        vm.expectEmit(true, true, true, true);
        emit SentMessage(target, address(this), message, messenger.messageNonce(), minGasLimit);
        vm.expectEmit(true, true, true, true);
        emit SentMessageExtension1(address(this), value);

        // Send the message with the native token value
        try messenger.sendNativeTokenMessage(target, value, message, minGasLimit) {
            // Verify that the message nonce has incremented
            assertEq(messenger.messageNonce(), 1);
        } catch Error(string memory reason) {
            emit log(reason);
            fail();
        } catch (bytes memory lowLevelData) {
            emit log_bytes(lowLevelData);
            fail();
        }
    }
}

contract MockERC20 is IERC20 {
    using SafeERC20 for IERC20;

    string public constant name = "MockERC20";
    string public constant symbol = "MERC20";
    uint8 public constant decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    function mint(address to, uint256 amount) public {
        balanceOf[to] += amount;
        totalSupply += amount;
        emit Transfer(address(0), to, amount);
    }

    function transfer(address to, uint256 amount) public override returns (bool) {
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
        emit Transfer(msg.sender, to, amount);
        return true;
    }

    function approve(address spender, uint256 amount) public override returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address from, address to, uint256 amount) public override returns (bool) {
        allowance[from][msg.sender] -= amount;
        balanceOf[from] -= amount;
        balanceOf[to] += amount;
        emit Transfer(from, to, amount);
        return true;
    }
}

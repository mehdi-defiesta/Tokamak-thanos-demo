/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  XDomainSetter2,
  XDomainSetter2Interface,
} from "../../../../contracts/test/CrossDomainOwnable2.t.sol/XDomainSetter2";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6104a68061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063715018a611610050578063715018a61461009d5780638da5cb5b146100a5578063f2fde38b146100cd57600080fd5b80633fa4f2451461006c57806360fe47b114610088575b600080fd5b61007560015481565b6040519081526020015b60405180910390f35b61009b61009636600461041d565b6100e0565b005b61009b6100ed565b60005460405173ffffffffffffffffffffffffffffffffffffffff909116815260200161007f565b61009b6100db366004610458565b610101565b6100e86101bd565b600155565b6100f56101bd565b6100ff60006103a8565b565b6101096101bd565b73ffffffffffffffffffffffffffffffffffffffff81166101b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6101ba816103a8565b50565b734200000000000000000000000000000000000007338114610261576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f43726f7373446f6d61696e4f776e61626c65323a2063616c6c6572206973206e60448201527f6f7420746865206d657373656e6765720000000000000000000000000000000060648201526084016101a8565b8073ffffffffffffffffffffffffffffffffffffffff16636e296e456040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d0919061047c565b73ffffffffffffffffffffffffffffffffffffffff1661030560005473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16146101ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f43726f7373446f6d61696e4f776e61626c65323a2063616c6c6572206973206e60448201527f6f7420746865206f776e6572000000000000000000000000000000000000000060648201526084016101a8565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561042f57600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff811681146101ba57600080fd5b60006020828403121561046a57600080fd5b813561047581610436565b9392505050565b60006020828403121561048e57600080fd5b81516104758161043656fea164736f6c634300080f000a";

type XDomainSetter2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: XDomainSetter2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class XDomainSetter2__factory extends ContractFactory {
  constructor(...args: XDomainSetter2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<XDomainSetter2> {
    return super.deploy(overrides || {}) as Promise<XDomainSetter2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): XDomainSetter2 {
    return super.attach(address) as XDomainSetter2;
  }
  override connect(signer: Signer): XDomainSetter2__factory {
    return super.connect(signer) as XDomainSetter2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XDomainSetter2Interface {
    return new utils.Interface(_abi) as XDomainSetter2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): XDomainSetter2 {
    return new Contract(address, _abi, signerOrProvider) as XDomainSetter2;
  }
}

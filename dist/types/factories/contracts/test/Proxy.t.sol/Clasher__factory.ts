/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Clasher,
  ClasherInterface,
} from "../../../../contracts/test/Proxy.t.sol/Clasher";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060ec8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80633659cfe614602d575b600080fd5b603c603836600460a4565b603e565b005b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f75706772616465546f0000000000000000000000000000000000000000000000604482015260640160405180910390fd5b60006020828403121560b557600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811460d857600080fd5b939250505056fea164736f6c634300080f000a";

type ClasherConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClasherConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Clasher__factory extends ContractFactory {
  constructor(...args: ClasherConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Clasher> {
    return super.deploy(overrides || {}) as Promise<Clasher>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Clasher {
    return super.attach(address) as Clasher;
  }
  override connect(signer: Signer): Clasher__factory {
    return super.connect(signer) as Clasher__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClasherInterface {
    return new utils.Interface(_abi) as ClasherInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Clasher {
    return new Contract(address, _abi, signerOrProvider) as Clasher;
  }
}

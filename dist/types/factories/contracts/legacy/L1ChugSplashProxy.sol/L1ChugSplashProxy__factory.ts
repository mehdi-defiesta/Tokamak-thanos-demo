/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  L1ChugSplashProxy,
  L1ChugSplashProxyInterface,
} from "../../../../contracts/legacy/L1ChugSplashProxy.sol/L1ChugSplashProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "getImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_code",
        type: "bytes",
      },
    ],
    name: "setCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_value",
        type: "bytes32",
      },
    ],
    name: "setStorage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610a44380380610a4483398101604081905261002f9161005d565b610057817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b5061008d565b60006020828403121561006f57600080fd5b81516001600160a01b038116811461008657600080fd5b9392505050565b6109a88061009c6000396000f3fe60806040526004361061005e5760003560e01c8063893d20e811610043578063893d20e8146100b55780639b0b0fda146100f3578063aaf10f42146101135761006d565b806313af4035146100755780636c5d4ad0146100955761006d565b3661006d5761006b610128565b005b61006b610128565b34801561008157600080fd5b5061006b6100903660046107a2565b6103cb565b3480156100a157600080fd5b5061006b6100b036600461080e565b61045c565b3480156100c157600080fd5b506100ca610611565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100ff57600080fd5b5061006b61010e3660046108dd565b6106a8565b34801561011f57600080fd5b506100ca610716565b60006101527fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fb7947262000000000000000000000000000000000000000000000000000000001790529051919250600091829173ffffffffffffffffffffffffffffffffffffffff8516916101d4919061093a565b600060405180830381855afa9150503d806000811461020f576040519150601f19603f3d011682016040523d82523d6000602084013e610214565b606091505b5091509150818015610227575080516020145b156102d9576000818060200190518101906102429190610946565b905080156102d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f4c314368756753706c61736850726f78793a2073797374656d2069732063757260448201527f72656e746c79206265696e67207570677261646564000000000000000000000060648201526084015b60405180910390fd5b505b60006103037f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905073ffffffffffffffffffffffffffffffffffffffff81166103a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f4c314368756753706c61736850726f78793a20696d706c656d656e746174696f60448201527f6e206973206e6f7420736574207965740000000000000000000000000000000060648201526084016102ce565b3660008037600080366000845af43d6000803e806103c5573d6000fd5b503d6000f35b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610424575033155b1561045457610451817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b50565b610451610128565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806104b5575033155b156104545760006104e47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b9050803f82516020840120036104f8575050565b60405160009061052e907f600d380380600d6000396000f30000000000000000000000000000000000000090859060200161095f565b604051602081830303815290604052905060008151602083016000f084516020860120909150813f146105e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4c314368756753706c61736850726f78793a20636f646520776173206e6f742060448201527f636f72726563746c79206465706c6f796564000000000000000000000000000060648201526084016102ce565b61060b817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b50505050565b600061063b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610672575033155b1561069d57507fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b6106a5610128565b90565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610701575033155b1561070a579055565b610712610128565b5050565b60006107407fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610777575033155b1561069d57507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6000602082840312156107b457600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146107d857600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561082057600080fd5b813567ffffffffffffffff8082111561083857600080fd5b818401915084601f83011261084c57600080fd5b81358181111561085e5761085e6107df565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156108a4576108a46107df565b816040528281528760208487010111156108bd57600080fd5b826020860160208301376000928101602001929092525095945050505050565b600080604083850312156108f057600080fd5b50508035926020909101359150565b6000815160005b818110156109205760208185018101518683015201610906565b8181111561092f576000828601525b509290920192915050565b60006107d882846108ff565b60006020828403121561095857600080fd5b5051919050565b7fffffffffffffffffffffffffff00000000000000000000000000000000000000831681526000610993600d8301846108ff565b94935050505056fea164736f6c634300080f000a";

type L1ChugSplashProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: L1ChugSplashProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class L1ChugSplashProxy__factory extends ContractFactory {
  constructor(...args: L1ChugSplashProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<L1ChugSplashProxy> {
    return super.deploy(_owner, overrides || {}) as Promise<L1ChugSplashProxy>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): L1ChugSplashProxy {
    return super.attach(address) as L1ChugSplashProxy;
  }
  override connect(signer: Signer): L1ChugSplashProxy__factory {
    return super.connect(signer) as L1ChugSplashProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): L1ChugSplashProxyInterface {
    return new utils.Interface(_abi) as L1ChugSplashProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1ChugSplashProxy {
    return new Contract(address, _abi, signerOrProvider) as L1ChugSplashProxy;
  }
}

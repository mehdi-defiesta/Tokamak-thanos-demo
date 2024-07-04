/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MeterUser,
  MeterUserInterface,
} from "../../../../contracts/test/ResourceMetering.t.sol/MeterUser";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "BASE_FEE_MAX_CHANGE_DENOMINATOR",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ELASTICITY_MULTIPLIER",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INITIAL_BASE_FEE",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_RESOURCE_LIMIT",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_BASE_FEE",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TARGET_RESOURCE_LIMIT",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "params",
    outputs: [
      {
        internalType: "uint128",
        name: "prevBaseFee",
        type: "uint128",
      },
      {
        internalType: "uint64",
        name: "prevBoughtGas",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "prevBlockNum",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_amount",
        type: "uint64",
      },
    ],
    name: "use",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506200001c62000022565b62000206565b600054610100900460ff1615808015620000435750600054600160ff909116105b8062000073575062000060306200015460201b620006ce1760201c565b15801562000073575060005460ff166001145b620000dc5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff19166001179055801562000100576000805461ff0019166101001790555b6200010a62000163565b801562000151576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b6001600160a01b03163b151590565b600054610100900460ff16620001d05760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401620000d3565b60408051606081018252633b9aca0080825260006020830152436001600160401b031691909201819052600160c01b0217600155565b61116280620002166000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063867ead1311610076578063ca3e99ba1161005b578063ca3e99ba1461011f578063cd7c978914610127578063cff0ab961461012f57600080fd5b8063867ead1314610103578063b4b64fbb1461010c57600080fd5b806313620abd146100a857806364b79208146100d95780636bb0291e146100f15780638129fc1c146100f9575b600080fd5b6100b3633b9aca0081565b6040516fffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100e3627a120081565b6040519081526020016100d0565b6100e3600481565b6101016101c3565b005b6100e361271081565b61010161011a366004610dbd565b61035a565b6100e36106bd565b6100e3600881565b60015461018a906fffffffffffffffffffffffffffffffff81169067ffffffffffffffff7001000000000000000000000000000000008204811691780100000000000000000000000000000000000000000000000090041683565b604080516fffffffffffffffffffffffffffffffff909416845267ffffffffffffffff92831660208501529116908201526060016100d0565b600054610100900460ff16158080156101e35750600054600160ff909116105b806101fd5750303b1580156101fd575060005460ff166001145b61028e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084015b60405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905580156102ec57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b6102f46106ea565b801561035757600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b8060005a600154909150600090610397907801000000000000000000000000000000000000000000000000900467ffffffffffffffff1643610e16565b905080156105205760006103af6004627a1200610e5c565b6001546103da9190700100000000000000000000000000000000900467ffffffffffffffff16610ec4565b9050600060086103ee6004627a1200610e5c565b60015461040e9085906fffffffffffffffffffffffffffffffff16610f38565b6104189190610e5c565b6104229190610e5c565b60015490915060009061046e90610458906104509085906fffffffffffffffffffffffffffffffff16610ff4565b6127106107cd565b6fffffffffffffffffffffffffffffffff6107e6565b905060018411156104e1576104de610458670de0b6b3a76400006104ca610496600883610e5c565b6104a890670de0b6b3a7640000610ec4565b6104b360018a610e16565b6104c590670de0b6b3a7640000611068565b6107f5565b6104d49085610f38565b6104509190610e5c565b90505b6fffffffffffffffffffffffffffffffff16780100000000000000000000000000000000000000000000000067ffffffffffffffff4316021760015550505b60018054849190601090610553908490700100000000000000000000000000000000900467ffffffffffffffff166110a5565b92506101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550627a1200600160000160109054906101000a900467ffffffffffffffff1667ffffffffffffffff16131561062f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f5265736f757263654d65746572696e673a2063616e6e6f7420627579206d6f7260448201527f6520676173207468616e20617661696c61626c6520676173206c696d697400006064820152608401610285565b60015460009061065b906fffffffffffffffffffffffffffffffff1667ffffffffffffffff86166110d1565b6fffffffffffffffffffffffffffffffff169050600061067f48633b9aca00610826565b6106899083611109565b905060005a6106989086610e16565b9050808211156106b4576106b46106af8284610e16565b610836565b50505050505050565b6106cb6004627a1200610e5c565b81565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b600054610100900460ff16610781576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610285565b60408051606081018252633b9aca00808252600060208301524367ffffffffffffffff169190920181905278010000000000000000000000000000000000000000000000000217600155565b6000818312156107dd57816107df565b825b9392505050565b60008183126107dd57816107df565b60006107df670de0b6b3a76400008361080d86610864565b6108179190610f38565b6108219190610e5c565b610aa8565b6000818310156107dd57816107df565b6000805a90505b825a6108499083610e16565b101561085f576108588261111d565b915061083d565b505050565b60008082136108cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f554e444546494e454400000000000000000000000000000000000000000000006044820152606401610285565b600060606108dc84610ce7565b03609f8181039490941b90931c6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d7fffffffffffffffffffffffffffffffffffffff73c0c716a594e00d54e3c4cbc9018302821d7ffffffffffffffffffffffffffffffffffffffdc7b88c420e53a9890533129f6f01830290911d7fffffffffffffffffffffffffffffffffffffff465fda27eb4d63ded474e5f832019091027ffffffffffffffff5f6af8f7b3396644f18e157960000000000000000000000000105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b393909302929092017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b60007ffffffffffffffffffffffffffffffffffffffffffffffffdb731c958f34d94c18213610ad957506000919050565b680755bf798b4a1bf1e58212610b4b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4558505f4f564552464c4f5700000000000000000000000000000000000000006044820152606401610285565b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056b80000000000000000000000001901d6bb17217f7d1cf79abc9e3b39881029093037fffffffffffffffffffffffffffffffffffffffdbf3ccf1604d263450f02a550481018102606090811d6d0277594991cfc85f6e2461837cd9018202811d7fffffffffffffffffffffffffffffffffffffe5adedaa1cb095af9e4da10e363c018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d7ffffffffffffffffffffffffffffffffffffd38dc772608b0ae56cce01296c0eb018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084017ffffffffffffffffffffffffffffffffffffffe2c69812cf03b0763fd454a8f7e010290911d6e0587f503bb6ea29d25fcb7401964500190910279d835ebba824c98fb31b83b2ca45c000000000000000000000000010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000808211610d52576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f554e444546494e454400000000000000000000000000000000000000000000006044820152606401610285565b5060016fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110821b1791821c111790565b600060208284031215610dcf57600080fd5b813567ffffffffffffffff811681146107df57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015610e2857610e28610de7565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082610e6b57610e6b610e2d565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83147f800000000000000000000000000000000000000000000000000000000000000083141615610ebf57610ebf610de7565b500590565b6000808312837f800000000000000000000000000000000000000000000000000000000000000001831281151615610efe57610efe610de7565b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018313811615610f3257610f32610de7565b50500390565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600084136000841385830485118282161615610f7957610f79610de7565b7f80000000000000000000000000000000000000000000000000000000000000006000871286820588128184161615610fb457610fb4610de7565b60008712925087820587128484161615610fd057610fd0610de7565b87850587128184161615610fe657610fe6610de7565b505050929093029392505050565b6000808212827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0384138115161561102e5761102e610de7565b827f800000000000000000000000000000000000000000000000000000000000000003841281161561106257611062610de7565b50500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156110a0576110a0610de7565b500290565b600067ffffffffffffffff8083168185168083038211156110c8576110c8610de7565b01949350505050565b60006fffffffffffffffffffffffffffffffff8083168185168183048111821515161561110057611100610de7565b02949350505050565b60008261111857611118610e2d565b500490565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361114e5761114e610de7565b506001019056fea164736f6c634300080f000a";

type MeterUserConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MeterUserConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MeterUser__factory extends ContractFactory {
  constructor(...args: MeterUserConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MeterUser> {
    return super.deploy(overrides || {}) as Promise<MeterUser>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MeterUser {
    return super.attach(address) as MeterUser;
  }
  override connect(signer: Signer): MeterUser__factory {
    return super.connect(signer) as MeterUser__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MeterUserInterface {
    return new utils.Interface(_abi) as MeterUserInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MeterUser {
    return new Contract(address, _abi, signerOrProvider) as MeterUser;
  }
}
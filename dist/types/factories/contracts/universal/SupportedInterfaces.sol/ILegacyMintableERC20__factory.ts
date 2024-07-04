/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILegacyMintableERC20,
  ILegacyMintableERC20Interface,
} from "../../../../contracts/universal/SupportedInterfaces.sol/ILegacyMintableERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "l1Token",
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
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ILegacyMintableERC20__factory {
  static readonly abi = _abi;
  static createInterface(): ILegacyMintableERC20Interface {
    return new utils.Interface(_abi) as ILegacyMintableERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILegacyMintableERC20 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ILegacyMintableERC20;
  }
}

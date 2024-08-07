/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IStaticL1ChugSplashProxy,
  IStaticL1ChugSplashProxyInterface,
} from "../../../../contracts/universal/ProxyAdmin.sol/IStaticL1ChugSplashProxy";

const _abi = [
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
    stateMutability: "view",
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
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IStaticL1ChugSplashProxy__factory {
  static readonly abi = _abi;
  static createInterface(): IStaticL1ChugSplashProxyInterface {
    return new utils.Interface(_abi) as IStaticL1ChugSplashProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStaticL1ChugSplashProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IStaticL1ChugSplashProxy;
  }
}

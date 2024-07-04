/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface IStaticL1ChugSplashProxyInterface extends utils.Interface {
  functions: {
    "getImplementation()": FunctionFragment;
    "getOwner()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getImplementation" | "getOwner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "getImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;

  events: {};
}

export interface IStaticL1ChugSplashProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IStaticL1ChugSplashProxyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getImplementation(overrides?: CallOverrides): Promise<[string]>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;
  };

  getImplementation(overrides?: CallOverrides): Promise<string>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getImplementation(overrides?: CallOverrides): Promise<string>;

    getOwner(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

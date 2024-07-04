/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface OptimismMintableERC20FactoryInterface extends utils.Interface {
  functions: {
    "bridge()": FunctionFragment;
    "createOptimismMintableERC20(address,string,string)": FunctionFragment;
    "createStandardL2Token(address,string,string)": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bridge"
      | "createOptimismMintableERC20"
      | "createStandardL2Token"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createOptimismMintableERC20",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createStandardL2Token",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createOptimismMintableERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createStandardL2Token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "OptimismMintableERC20Created(address,address,address)": EventFragment;
    "StandardL2TokenCreated(address,address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "OptimismMintableERC20Created"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StandardL2TokenCreated"): EventFragment;
}

export interface OptimismMintableERC20CreatedEventObject {
  localToken: string;
  remoteToken: string;
  deployer: string;
}
export type OptimismMintableERC20CreatedEvent = TypedEvent<
  [string, string, string],
  OptimismMintableERC20CreatedEventObject
>;

export type OptimismMintableERC20CreatedEventFilter =
  TypedEventFilter<OptimismMintableERC20CreatedEvent>;

export interface StandardL2TokenCreatedEventObject {
  remoteToken: string;
  localToken: string;
}
export type StandardL2TokenCreatedEvent = TypedEvent<
  [string, string],
  StandardL2TokenCreatedEventObject
>;

export type StandardL2TokenCreatedEventFilter =
  TypedEventFilter<StandardL2TokenCreatedEvent>;

export interface OptimismMintableERC20Factory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OptimismMintableERC20FactoryInterface;

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
    bridge(overrides?: CallOverrides): Promise<[string]>;

    createOptimismMintableERC20(
      _remoteToken: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createStandardL2Token(
      _remoteToken: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[string]>;
  };

  bridge(overrides?: CallOverrides): Promise<string>;

  createOptimismMintableERC20(
    _remoteToken: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createStandardL2Token(
    _remoteToken: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    bridge(overrides?: CallOverrides): Promise<string>;

    createOptimismMintableERC20(
      _remoteToken: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    createStandardL2Token(
      _remoteToken: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OptimismMintableERC20Created(address,address,address)"(
      localToken?: PromiseOrValue<string> | null,
      remoteToken?: PromiseOrValue<string> | null,
      deployer?: null
    ): OptimismMintableERC20CreatedEventFilter;
    OptimismMintableERC20Created(
      localToken?: PromiseOrValue<string> | null,
      remoteToken?: PromiseOrValue<string> | null,
      deployer?: null
    ): OptimismMintableERC20CreatedEventFilter;

    "StandardL2TokenCreated(address,address)"(
      remoteToken?: PromiseOrValue<string> | null,
      localToken?: PromiseOrValue<string> | null
    ): StandardL2TokenCreatedEventFilter;
    StandardL2TokenCreated(
      remoteToken?: PromiseOrValue<string> | null,
      localToken?: PromiseOrValue<string> | null
    ): StandardL2TokenCreatedEventFilter;
  };

  estimateGas: {
    bridge(overrides?: CallOverrides): Promise<BigNumber>;

    createOptimismMintableERC20(
      _remoteToken: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createStandardL2Token(
      _remoteToken: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createOptimismMintableERC20(
      _remoteToken: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createStandardL2Token(
      _remoteToken: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
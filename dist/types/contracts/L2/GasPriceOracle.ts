/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export interface GasPriceOracleInterface extends utils.Interface {
  functions: {
    "baseFee()": FunctionFragment;
    "decimals()": FunctionFragment;
    "gasPrice()": FunctionFragment;
    "getL1Fee(bytes)": FunctionFragment;
    "getL1GasUsed(bytes)": FunctionFragment;
    "l1BaseFee()": FunctionFragment;
    "overhead()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "scalar()": FunctionFragment;
    "setDecimals(uint256)": FunctionFragment;
    "setOverhead(uint256)": FunctionFragment;
    "setScalar(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "baseFee"
      | "decimals"
      | "gasPrice"
      | "getL1Fee"
      | "getL1GasUsed"
      | "l1BaseFee"
      | "overhead"
      | "owner"
      | "renounceOwnership"
      | "scalar"
      | "setDecimals"
      | "setOverhead"
      | "setScalar"
      | "transferOwnership"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "baseFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "gasPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getL1Fee",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getL1GasUsed",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "l1BaseFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "overhead", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "scalar", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setDecimals",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setOverhead",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setScalar",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "baseFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gasPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getL1Fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getL1GasUsed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "l1BaseFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "overhead", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "scalar", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOverhead",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setScalar", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "DecimalsUpdated(uint256)": EventFragment;
    "OverheadUpdated(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ScalarUpdated(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DecimalsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OverheadUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ScalarUpdated"): EventFragment;
}

export interface DecimalsUpdatedEventObject {
  decimals: BigNumber;
}
export type DecimalsUpdatedEvent = TypedEvent<
  [BigNumber],
  DecimalsUpdatedEventObject
>;

export type DecimalsUpdatedEventFilter = TypedEventFilter<DecimalsUpdatedEvent>;

export interface OverheadUpdatedEventObject {
  overhead: BigNumber;
}
export type OverheadUpdatedEvent = TypedEvent<
  [BigNumber],
  OverheadUpdatedEventObject
>;

export type OverheadUpdatedEventFilter = TypedEventFilter<OverheadUpdatedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ScalarUpdatedEventObject {
  scalar: BigNumber;
}
export type ScalarUpdatedEvent = TypedEvent<
  [BigNumber],
  ScalarUpdatedEventObject
>;

export type ScalarUpdatedEventFilter = TypedEventFilter<ScalarUpdatedEvent>;

export interface GasPriceOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GasPriceOracleInterface;

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
    baseFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[BigNumber]>;

    gasPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    getL1Fee(
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getL1GasUsed(
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    l1BaseFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    overhead(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    scalar(overrides?: CallOverrides): Promise<[BigNumber]>;

    setDecimals(
      _decimals: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOverhead(
      _overhead: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setScalar(
      _scalar: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[string]>;
  };

  baseFee(overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<BigNumber>;

  gasPrice(overrides?: CallOverrides): Promise<BigNumber>;

  getL1Fee(
    _data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getL1GasUsed(
    _data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  l1BaseFee(overrides?: CallOverrides): Promise<BigNumber>;

  overhead(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  scalar(overrides?: CallOverrides): Promise<BigNumber>;

  setDecimals(
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOverhead(
    _overhead: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setScalar(
    _scalar: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    baseFee(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    gasPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getL1Fee(
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getL1GasUsed(
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    l1BaseFee(overrides?: CallOverrides): Promise<BigNumber>;

    overhead(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    scalar(overrides?: CallOverrides): Promise<BigNumber>;

    setDecimals(
      _decimals: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOverhead(
      _overhead: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setScalar(
      _scalar: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "DecimalsUpdated(uint256)"(decimals?: null): DecimalsUpdatedEventFilter;
    DecimalsUpdated(decimals?: null): DecimalsUpdatedEventFilter;

    "OverheadUpdated(uint256)"(overhead?: null): OverheadUpdatedEventFilter;
    OverheadUpdated(overhead?: null): OverheadUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "ScalarUpdated(uint256)"(scalar?: null): ScalarUpdatedEventFilter;
    ScalarUpdated(scalar?: null): ScalarUpdatedEventFilter;
  };

  estimateGas: {
    baseFee(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    gasPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getL1Fee(
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getL1GasUsed(
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    l1BaseFee(overrides?: CallOverrides): Promise<BigNumber>;

    overhead(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    scalar(overrides?: CallOverrides): Promise<BigNumber>;

    setDecimals(
      _decimals: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOverhead(
      _overhead: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setScalar(
      _scalar: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    baseFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gasPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getL1Fee(
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getL1GasUsed(
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    l1BaseFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    overhead(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    scalar(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setDecimals(
      _decimals: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOverhead(
      _overhead: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setScalar(
      _scalar: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
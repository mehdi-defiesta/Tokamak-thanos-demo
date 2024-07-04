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
  PayableOverrides,
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

export interface L2ToL1MessagePasserInterface extends utils.Interface {
  functions: {
    "burn()": FunctionFragment;
    "initiateWithdrawal(address,uint256,bytes)": FunctionFragment;
    "nonce()": FunctionFragment;
    "sentMessages(bytes32)": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "burn"
      | "initiateWithdrawal"
      | "nonce"
      | "sentMessages"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "burn", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initiateWithdrawal",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sentMessages",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initiateWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sentMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "WithdrawalInitiated(uint256,address,address,uint256,uint256,bytes)": EventFragment;
    "WithdrawalInitiatedExtension1(bytes32)": EventFragment;
    "WithdrawerBalanceBurnt(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "WithdrawalInitiated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "WithdrawalInitiatedExtension1"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawerBalanceBurnt"): EventFragment;
}

export interface WithdrawalInitiatedEventObject {
  nonce: BigNumber;
  sender: string;
  target: string;
  value: BigNumber;
  gasLimit: BigNumber;
  data: string;
}
export type WithdrawalInitiatedEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, BigNumber, string],
  WithdrawalInitiatedEventObject
>;

export type WithdrawalInitiatedEventFilter =
  TypedEventFilter<WithdrawalInitiatedEvent>;

export interface WithdrawalInitiatedExtension1EventObject {
  hash: string;
}
export type WithdrawalInitiatedExtension1Event = TypedEvent<
  [string],
  WithdrawalInitiatedExtension1EventObject
>;

export type WithdrawalInitiatedExtension1EventFilter =
  TypedEventFilter<WithdrawalInitiatedExtension1Event>;

export interface WithdrawerBalanceBurntEventObject {
  amount: BigNumber;
}
export type WithdrawerBalanceBurntEvent = TypedEvent<
  [BigNumber],
  WithdrawerBalanceBurntEventObject
>;

export type WithdrawerBalanceBurntEventFilter =
  TypedEventFilter<WithdrawerBalanceBurntEvent>;

export interface L2ToL1MessagePasser extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: L2ToL1MessagePasserInterface;

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
    burn(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initiateWithdrawal(
      _target: PromiseOrValue<string>,
      _gasLimit: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    sentMessages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    version(overrides?: CallOverrides): Promise<[string]>;
  };

  burn(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initiateWithdrawal(
    _target: PromiseOrValue<string>,
    _gasLimit: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  sentMessages(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    burn(overrides?: CallOverrides): Promise<void>;

    initiateWithdrawal(
      _target: PromiseOrValue<string>,
      _gasLimit: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    sentMessages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "WithdrawalInitiated(uint256,address,address,uint256,uint256,bytes)"(
      nonce?: PromiseOrValue<BigNumberish> | null,
      sender?: PromiseOrValue<string> | null,
      target?: PromiseOrValue<string> | null,
      value?: null,
      gasLimit?: null,
      data?: null
    ): WithdrawalInitiatedEventFilter;
    WithdrawalInitiated(
      nonce?: PromiseOrValue<BigNumberish> | null,
      sender?: PromiseOrValue<string> | null,
      target?: PromiseOrValue<string> | null,
      value?: null,
      gasLimit?: null,
      data?: null
    ): WithdrawalInitiatedEventFilter;

    "WithdrawalInitiatedExtension1(bytes32)"(
      hash?: PromiseOrValue<BytesLike> | null
    ): WithdrawalInitiatedExtension1EventFilter;
    WithdrawalInitiatedExtension1(
      hash?: PromiseOrValue<BytesLike> | null
    ): WithdrawalInitiatedExtension1EventFilter;

    "WithdrawerBalanceBurnt(uint256)"(
      amount?: PromiseOrValue<BigNumberish> | null
    ): WithdrawerBalanceBurntEventFilter;
    WithdrawerBalanceBurnt(
      amount?: PromiseOrValue<BigNumberish> | null
    ): WithdrawerBalanceBurntEventFilter;
  };

  estimateGas: {
    burn(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initiateWithdrawal(
      _target: PromiseOrValue<string>,
      _gasLimit: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    sentMessages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initiateWithdrawal(
      _target: PromiseOrValue<string>,
      _gasLimit: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sentMessages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

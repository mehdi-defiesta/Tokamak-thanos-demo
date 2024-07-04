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

export interface L2StandardBridgeInterface extends utils.Interface {
  functions: {
    "bridgeERC20(address,address,uint256,uint32,bytes)": FunctionFragment;
    "bridgeERC20To(address,address,address,uint256,uint32,bytes)": FunctionFragment;
    "bridgeETH(uint32,bytes)": FunctionFragment;
    "bridgeETHTo(address,uint32,bytes)": FunctionFragment;
    "deposits(address,address)": FunctionFragment;
    "finalizeBridgeERC20(address,address,address,address,uint256,bytes)": FunctionFragment;
    "finalizeBridgeETH(address,address,uint256,bytes)": FunctionFragment;
    "finalizeDeposit(address,address,address,address,uint256,bytes)": FunctionFragment;
    "messenger()": FunctionFragment;
    "otherBridge()": FunctionFragment;
    "version()": FunctionFragment;
    "withdraw(address,uint256,uint32,bytes)": FunctionFragment;
    "withdrawTo(address,address,uint256,uint32,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bridgeERC20"
      | "bridgeERC20To"
      | "bridgeETH"
      | "bridgeETHTo"
      | "deposits"
      | "finalizeBridgeERC20"
      | "finalizeBridgeETH"
      | "finalizeDeposit"
      | "messenger"
      | "otherBridge"
      | "version"
      | "withdraw"
      | "withdrawTo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bridgeERC20",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "bridgeERC20To",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "bridgeETH",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "bridgeETHTo",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deposits",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeBridgeERC20",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeBridgeETH",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeDeposit",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "messenger", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "otherBridge",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTo",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "bridgeERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bridgeERC20To",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bridgeETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bridgeETHTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finalizeBridgeERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeBridgeETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messenger", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "otherBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;

  events: {
    "DepositFinalized(address,address,address,address,uint256,bytes)": EventFragment;
    "ERC20BridgeFinalized(address,address,address,address,uint256,bytes)": EventFragment;
    "ERC20BridgeInitiated(address,address,address,address,uint256,bytes)": EventFragment;
    "ETHBridgeFinalized(address,address,uint256,bytes)": EventFragment;
    "ETHBridgeInitiated(address,address,uint256,bytes)": EventFragment;
    "WithdrawalInitiated(address,address,address,address,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DepositFinalized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC20BridgeFinalized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC20BridgeInitiated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ETHBridgeFinalized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ETHBridgeInitiated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawalInitiated"): EventFragment;
}

export interface DepositFinalizedEventObject {
  l1Token: string;
  l2Token: string;
  from: string;
  to: string;
  amount: BigNumber;
  extraData: string;
}
export type DepositFinalizedEvent = TypedEvent<
  [string, string, string, string, BigNumber, string],
  DepositFinalizedEventObject
>;

export type DepositFinalizedEventFilter =
  TypedEventFilter<DepositFinalizedEvent>;

export interface ERC20BridgeFinalizedEventObject {
  localToken: string;
  remoteToken: string;
  from: string;
  to: string;
  amount: BigNumber;
  extraData: string;
}
export type ERC20BridgeFinalizedEvent = TypedEvent<
  [string, string, string, string, BigNumber, string],
  ERC20BridgeFinalizedEventObject
>;

export type ERC20BridgeFinalizedEventFilter =
  TypedEventFilter<ERC20BridgeFinalizedEvent>;

export interface ERC20BridgeInitiatedEventObject {
  localToken: string;
  remoteToken: string;
  from: string;
  to: string;
  amount: BigNumber;
  extraData: string;
}
export type ERC20BridgeInitiatedEvent = TypedEvent<
  [string, string, string, string, BigNumber, string],
  ERC20BridgeInitiatedEventObject
>;

export type ERC20BridgeInitiatedEventFilter =
  TypedEventFilter<ERC20BridgeInitiatedEvent>;

export interface ETHBridgeFinalizedEventObject {
  from: string;
  to: string;
  amount: BigNumber;
  extraData: string;
}
export type ETHBridgeFinalizedEvent = TypedEvent<
  [string, string, BigNumber, string],
  ETHBridgeFinalizedEventObject
>;

export type ETHBridgeFinalizedEventFilter =
  TypedEventFilter<ETHBridgeFinalizedEvent>;

export interface ETHBridgeInitiatedEventObject {
  from: string;
  to: string;
  amount: BigNumber;
  extraData: string;
}
export type ETHBridgeInitiatedEvent = TypedEvent<
  [string, string, BigNumber, string],
  ETHBridgeInitiatedEventObject
>;

export type ETHBridgeInitiatedEventFilter =
  TypedEventFilter<ETHBridgeInitiatedEvent>;

export interface WithdrawalInitiatedEventObject {
  l1Token: string;
  l2Token: string;
  from: string;
  to: string;
  amount: BigNumber;
  extraData: string;
}
export type WithdrawalInitiatedEvent = TypedEvent<
  [string, string, string, string, BigNumber, string],
  WithdrawalInitiatedEventObject
>;

export type WithdrawalInitiatedEventFilter =
  TypedEventFilter<WithdrawalInitiatedEvent>;

export interface L2StandardBridge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: L2StandardBridgeInterface;

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
    bridgeERC20(
      _localToken: PromiseOrValue<string>,
      _remoteToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bridgeERC20To(
      _localToken: PromiseOrValue<string>,
      _remoteToken: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bridgeETH(
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bridgeETHTo(
      _to: PromiseOrValue<string>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deposits(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    finalizeBridgeERC20(
      _localToken: PromiseOrValue<string>,
      _remoteToken: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finalizeBridgeETH(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finalizeDeposit(
      _l1Token: PromiseOrValue<string>,
      _l2Token: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    messenger(overrides?: CallOverrides): Promise<[string]>;

    otherBridge(overrides?: CallOverrides): Promise<[string]>;

    version(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      _l2Token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawTo(
      _l2Token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  bridgeERC20(
    _localToken: PromiseOrValue<string>,
    _remoteToken: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _minGasLimit: PromiseOrValue<BigNumberish>,
    _extraData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bridgeERC20To(
    _localToken: PromiseOrValue<string>,
    _remoteToken: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _minGasLimit: PromiseOrValue<BigNumberish>,
    _extraData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bridgeETH(
    _minGasLimit: PromiseOrValue<BigNumberish>,
    _extraData: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bridgeETHTo(
    _to: PromiseOrValue<string>,
    _minGasLimit: PromiseOrValue<BigNumberish>,
    _extraData: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deposits(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  finalizeBridgeERC20(
    _localToken: PromiseOrValue<string>,
    _remoteToken: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _extraData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finalizeBridgeETH(
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _extraData: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finalizeDeposit(
    _l1Token: PromiseOrValue<string>,
    _l2Token: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _extraData: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  messenger(overrides?: CallOverrides): Promise<string>;

  otherBridge(overrides?: CallOverrides): Promise<string>;

  version(overrides?: CallOverrides): Promise<string>;

  withdraw(
    _l2Token: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _minGasLimit: PromiseOrValue<BigNumberish>,
    _extraData: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawTo(
    _l2Token: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _minGasLimit: PromiseOrValue<BigNumberish>,
    _extraData: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bridgeERC20(
      _localToken: PromiseOrValue<string>,
      _remoteToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    bridgeERC20To(
      _localToken: PromiseOrValue<string>,
      _remoteToken: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    bridgeETH(
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    bridgeETHTo(
      _to: PromiseOrValue<string>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    deposits(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    finalizeBridgeERC20(
      _localToken: PromiseOrValue<string>,
      _remoteToken: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    finalizeBridgeETH(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    finalizeDeposit(
      _l1Token: PromiseOrValue<string>,
      _l2Token: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    messenger(overrides?: CallOverrides): Promise<string>;

    otherBridge(overrides?: CallOverrides): Promise<string>;

    version(overrides?: CallOverrides): Promise<string>;

    withdraw(
      _l2Token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTo(
      _l2Token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DepositFinalized(address,address,address,address,uint256,bytes)"(
      l1Token?: PromiseOrValue<string> | null,
      l2Token?: PromiseOrValue<string> | null,
      from?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null,
      extraData?: null
    ): DepositFinalizedEventFilter;
    DepositFinalized(
      l1Token?: PromiseOrValue<string> | null,
      l2Token?: PromiseOrValue<string> | null,
      from?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null,
      extraData?: null
    ): DepositFinalizedEventFilter;

    "ERC20BridgeFinalized(address,address,address,address,uint256,bytes)"(
      localToken?: PromiseOrValue<string> | null,
      remoteToken?: PromiseOrValue<string> | null,
      from?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null,
      extraData?: null
    ): ERC20BridgeFinalizedEventFilter;
    ERC20BridgeFinalized(
      localToken?: PromiseOrValue<string> | null,
      remoteToken?: PromiseOrValue<string> | null,
      from?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null,
      extraData?: null
    ): ERC20BridgeFinalizedEventFilter;

    "ERC20BridgeInitiated(address,address,address,address,uint256,bytes)"(
      localToken?: PromiseOrValue<string> | null,
      remoteToken?: PromiseOrValue<string> | null,
      from?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null,
      extraData?: null
    ): ERC20BridgeInitiatedEventFilter;
    ERC20BridgeInitiated(
      localToken?: PromiseOrValue<string> | null,
      remoteToken?: PromiseOrValue<string> | null,
      from?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null,
      extraData?: null
    ): ERC20BridgeInitiatedEventFilter;

    "ETHBridgeFinalized(address,address,uint256,bytes)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null,
      extraData?: null
    ): ETHBridgeFinalizedEventFilter;
    ETHBridgeFinalized(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null,
      extraData?: null
    ): ETHBridgeFinalizedEventFilter;

    "ETHBridgeInitiated(address,address,uint256,bytes)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null,
      extraData?: null
    ): ETHBridgeInitiatedEventFilter;
    ETHBridgeInitiated(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null,
      extraData?: null
    ): ETHBridgeInitiatedEventFilter;

    "WithdrawalInitiated(address,address,address,address,uint256,bytes)"(
      l1Token?: PromiseOrValue<string> | null,
      l2Token?: PromiseOrValue<string> | null,
      from?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null,
      extraData?: null
    ): WithdrawalInitiatedEventFilter;
    WithdrawalInitiated(
      l1Token?: PromiseOrValue<string> | null,
      l2Token?: PromiseOrValue<string> | null,
      from?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null,
      extraData?: null
    ): WithdrawalInitiatedEventFilter;
  };

  estimateGas: {
    bridgeERC20(
      _localToken: PromiseOrValue<string>,
      _remoteToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bridgeERC20To(
      _localToken: PromiseOrValue<string>,
      _remoteToken: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bridgeETH(
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bridgeETHTo(
      _to: PromiseOrValue<string>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deposits(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    finalizeBridgeERC20(
      _localToken: PromiseOrValue<string>,
      _remoteToken: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    finalizeBridgeETH(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    finalizeDeposit(
      _l1Token: PromiseOrValue<string>,
      _l2Token: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    messenger(overrides?: CallOverrides): Promise<BigNumber>;

    otherBridge(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _l2Token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawTo(
      _l2Token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bridgeERC20(
      _localToken: PromiseOrValue<string>,
      _remoteToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bridgeERC20To(
      _localToken: PromiseOrValue<string>,
      _remoteToken: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bridgeETH(
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bridgeETHTo(
      _to: PromiseOrValue<string>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deposits(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    finalizeBridgeERC20(
      _localToken: PromiseOrValue<string>,
      _remoteToken: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finalizeBridgeETH(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finalizeDeposit(
      _l1Token: PromiseOrValue<string>,
      _l2Token: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    messenger(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    otherBridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _l2Token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTo(
      _l2Token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _minGasLimit: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
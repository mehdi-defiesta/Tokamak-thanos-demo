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

export interface DeployerWhitelistInterface extends utils.Interface {
  functions: {
    "enableArbitraryContractDeployment()": FunctionFragment;
    "isDeployerAllowed(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setWhitelistedDeployer(address,bool)": FunctionFragment;
    "version()": FunctionFragment;
    "whitelist(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "enableArbitraryContractDeployment"
      | "isDeployerAllowed"
      | "owner"
      | "setOwner"
      | "setWhitelistedDeployer"
      | "version"
      | "whitelist"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "enableArbitraryContractDeployment",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isDeployerAllowed",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setWhitelistedDeployer",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "whitelist",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "enableArbitraryContractDeployment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isDeployerAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setWhitelistedDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;

  events: {
    "OwnerChanged(address,address)": EventFragment;
    "WhitelistDisabled(address)": EventFragment;
    "WhitelistStatusChanged(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistDisabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistStatusChanged"): EventFragment;
}

export interface OwnerChangedEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<
  [string, string],
  OwnerChangedEventObject
>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface WhitelistDisabledEventObject {
  oldOwner: string;
}
export type WhitelistDisabledEvent = TypedEvent<
  [string],
  WhitelistDisabledEventObject
>;

export type WhitelistDisabledEventFilter =
  TypedEventFilter<WhitelistDisabledEvent>;

export interface WhitelistStatusChangedEventObject {
  deployer: string;
  whitelisted: boolean;
}
export type WhitelistStatusChangedEvent = TypedEvent<
  [string, boolean],
  WhitelistStatusChangedEventObject
>;

export type WhitelistStatusChangedEventFilter =
  TypedEventFilter<WhitelistStatusChangedEvent>;

export interface DeployerWhitelist extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DeployerWhitelistInterface;

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
    enableArbitraryContractDeployment(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isDeployerAllowed(
      _deployer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setWhitelistedDeployer(
      _deployer: PromiseOrValue<string>,
      _isWhitelisted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[string]>;

    whitelist(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  enableArbitraryContractDeployment(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isDeployerAllowed(
    _deployer: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  setOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setWhitelistedDeployer(
    _deployer: PromiseOrValue<string>,
    _isWhitelisted: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<string>;

  whitelist(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    enableArbitraryContractDeployment(overrides?: CallOverrides): Promise<void>;

    isDeployerAllowed(
      _deployer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    setOwner(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setWhitelistedDeployer(
      _deployer: PromiseOrValue<string>,
      _isWhitelisted: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<string>;

    whitelist(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "OwnerChanged(address,address)"(
      oldOwner?: null,
      newOwner?: null
    ): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    "WhitelistDisabled(address)"(oldOwner?: null): WhitelistDisabledEventFilter;
    WhitelistDisabled(oldOwner?: null): WhitelistDisabledEventFilter;

    "WhitelistStatusChanged(address,bool)"(
      deployer?: null,
      whitelisted?: null
    ): WhitelistStatusChangedEventFilter;
    WhitelistStatusChanged(
      deployer?: null,
      whitelisted?: null
    ): WhitelistStatusChangedEventFilter;
  };

  estimateGas: {
    enableArbitraryContractDeployment(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isDeployerAllowed(
      _deployer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setWhitelistedDeployer(
      _deployer: PromiseOrValue<string>,
      _isWhitelisted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    whitelist(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    enableArbitraryContractDeployment(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isDeployerAllowed(
      _deployer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setWhitelistedDeployer(
      _deployer: PromiseOrValue<string>,
      _isWhitelisted: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    whitelist(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
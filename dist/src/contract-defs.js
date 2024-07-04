"use strict";
exports.__esModule = true;
exports.getContractFactory = exports.getContractInterface = exports.getContractDefinition = void 0;
var ethers_1 = require("ethers");
/**
 * Gets the hardhat artifact for the given contract name.
 * Will throw an error if the contract artifact is not found.
 *
 * @param name Contract name.
 * @returns The artifact for the given contract name.
 */
var getContractDefinition = function (name) {
    // We import this using `require` because hardhat tries to build this file when compiling
    // the contracts, but we need the contracts to be compiled before the contract-artifacts.ts
    // file can be generated.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    var getContractArtifact = require('./contract-artifacts').getContractArtifact;
    var artifact = getContractArtifact(name);
    if (artifact === undefined) {
        throw new Error("Unable to find artifact for contract: ".concat(name));
    }
    return artifact;
};
exports.getContractDefinition = getContractDefinition;
/**
 * Gets an ethers Interface instance for the given contract name.
 *
 * @param name Contract name.
 * @returns The interface for the given contract name.
 */
var getContractInterface = function (name) {
    var definition = (0, exports.getContractDefinition)(name);
    return new ethers_1.ethers.utils.Interface(definition.abi);
};
exports.getContractInterface = getContractInterface;
/**
 * Gets an ethers ContractFactory instance for the given contract name.
 *
 * @param name Contract name.
 * @param signer The signer for the ContractFactory to use.
 * @returns The contract factory for the given contract name.
 */
var getContractFactory = function (name, signer) {
    var definition = (0, exports.getContractDefinition)(name);
    var contractInterface = (0, exports.getContractInterface)(name);
    return new ethers_1.ethers.ContractFactory(contractInterface, definition.bytecode, signer);
};
exports.getContractFactory = getContractFactory;

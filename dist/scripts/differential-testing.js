"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var ethers_1 = require("ethers");
var core_utils_1 = require("@eth-optimism/core-utils");
var trie_1 = require("@ethereumjs/trie");
var util_1 = require("@ethereumjs/util");
var src_1 = require("../src");
var hexZeroPad = ethers_1.utils.hexZeroPad, RLP = ethers_1.utils.RLP, keccak256 = ethers_1.utils.keccak256;
var args = process.argv.slice(2);
var command = args[0];
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, input, _b, nonce, version, output, nonce, sender, target, value, gasLimit, data, encoding, output, nonce, sender, target, value, gasLimit, data, hash, output, l1BlockHash, logIndex, from, to, mint, value, gas, data, tx, digest, output, from, to, value, mint, gasLimit, isCreate, data, l1BlockHash, logIndex, tx, raw, output, nonce, sender, target, value, gas, data, hash, output, version, stateRoot, messagePasserStorageRoot, latestBlockhash, hash, output, nonce, sender, target, value, gas, data, withdrawalHash, slot, key, storage, address, account, world, proof, outputRoot, encodedProof, output;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = command;
                switch (_a) {
                    case 'decodeVersionedNonce': return [3 /*break*/, 1];
                    case 'encodeCrossDomainMessage': return [3 /*break*/, 2];
                    case 'hashCrossDomainMessage': return [3 /*break*/, 3];
                    case 'hashDepositTransaction': return [3 /*break*/, 4];
                    case 'encodeDepositTransaction': return [3 /*break*/, 5];
                    case 'hashWithdrawal': return [3 /*break*/, 6];
                    case 'hashOutputRootProof': return [3 /*break*/, 7];
                    case 'getFinalizeWithdrawalTransactionInputs': return [3 /*break*/, 8];
                }
                return [3 /*break*/, 12];
            case 1:
                {
                    input = ethers_1.BigNumber.from(args[1]);
                    _b = (0, core_utils_1.decodeVersionedNonce)(input), nonce = _b[0], version = _b[1];
                    output = ethers_1.utils.defaultAbiCoder.encode(['uint256', 'uint256'], [nonce.toHexString(), version.toHexString()]);
                    process.stdout.write(output);
                    return [3 /*break*/, 12];
                }
                _c.label = 2;
            case 2:
                {
                    nonce = ethers_1.BigNumber.from(args[1]);
                    sender = args[2];
                    target = args[3];
                    value = ethers_1.BigNumber.from(args[4]);
                    gasLimit = ethers_1.BigNumber.from(args[5]);
                    data = args[6];
                    encoding = (0, core_utils_1.encodeCrossDomainMessage)(nonce, sender, target, value, gasLimit, data);
                    output = ethers_1.utils.defaultAbiCoder.encode(['bytes'], [encoding]);
                    process.stdout.write(output);
                    return [3 /*break*/, 12];
                }
                _c.label = 3;
            case 3:
                {
                    nonce = ethers_1.BigNumber.from(args[1]);
                    sender = args[2];
                    target = args[3];
                    value = ethers_1.BigNumber.from(args[4]);
                    gasLimit = ethers_1.BigNumber.from(args[5]);
                    data = args[6];
                    hash = (0, core_utils_1.hashCrossDomainMessage)(nonce, sender, target, value, gasLimit, data);
                    output = ethers_1.utils.defaultAbiCoder.encode(['bytes32'], [hash]);
                    process.stdout.write(output);
                    return [3 /*break*/, 12];
                }
                _c.label = 4;
            case 4:
                {
                    l1BlockHash = args[1];
                    logIndex = ethers_1.BigNumber.from(args[2]);
                    from = args[3];
                    to = args[4];
                    mint = ethers_1.BigNumber.from(args[5]);
                    value = ethers_1.BigNumber.from(args[6]);
                    gas = ethers_1.BigNumber.from(args[7]);
                    data = args[8];
                    tx = new core_utils_1.DepositTx({
                        l1BlockHash: l1BlockHash,
                        logIndex: logIndex,
                        from: from,
                        to: to,
                        mint: mint,
                        value: value,
                        gas: gas,
                        data: data,
                        isSystemTransaction: false,
                        domain: core_utils_1.SourceHashDomain.UserDeposit
                    });
                    digest = tx.hash();
                    output = ethers_1.utils.defaultAbiCoder.encode(['bytes32'], [digest]);
                    process.stdout.write(output);
                    return [3 /*break*/, 12];
                }
                _c.label = 5;
            case 5:
                {
                    from = args[1];
                    to = args[2];
                    value = ethers_1.BigNumber.from(args[3]);
                    mint = ethers_1.BigNumber.from(args[4]);
                    gasLimit = ethers_1.BigNumber.from(args[5]);
                    isCreate = args[6] === 'true' ? true : false;
                    data = args[7];
                    l1BlockHash = args[8];
                    logIndex = ethers_1.BigNumber.from(args[9]);
                    tx = new core_utils_1.DepositTx({
                        from: from,
                        to: isCreate ? null : to,
                        value: value,
                        mint: mint,
                        gas: gasLimit,
                        data: data,
                        l1BlockHash: l1BlockHash,
                        logIndex: logIndex,
                        domain: core_utils_1.SourceHashDomain.UserDeposit
                    });
                    raw = tx.encode();
                    output = ethers_1.utils.defaultAbiCoder.encode(['bytes'], [raw]);
                    process.stdout.write(output);
                    return [3 /*break*/, 12];
                }
                _c.label = 6;
            case 6:
                {
                    nonce = ethers_1.BigNumber.from(args[1]);
                    sender = args[2];
                    target = args[3];
                    value = ethers_1.BigNumber.from(args[4]);
                    gas = ethers_1.BigNumber.from(args[5]);
                    data = args[6];
                    hash = (0, core_utils_1.hashWithdrawal)(nonce, sender, target, value, gas, data);
                    output = ethers_1.utils.defaultAbiCoder.encode(['bytes32'], [hash]);
                    process.stdout.write(output);
                    return [3 /*break*/, 12];
                }
                _c.label = 7;
            case 7:
                {
                    version = hexZeroPad(ethers_1.BigNumber.from(args[1]).toHexString(), 32);
                    stateRoot = hexZeroPad(ethers_1.BigNumber.from(args[2]).toHexString(), 32);
                    messagePasserStorageRoot = hexZeroPad(ethers_1.BigNumber.from(args[3]).toHexString(), 32);
                    latestBlockhash = hexZeroPad(ethers_1.BigNumber.from(args[4]).toHexString(), 32);
                    hash = (0, core_utils_1.hashOutputRootProof)({
                        version: version,
                        stateRoot: stateRoot,
                        messagePasserStorageRoot: messagePasserStorageRoot,
                        latestBlockhash: latestBlockhash
                    });
                    output = ethers_1.utils.defaultAbiCoder.encode(['bytes32'], [hash]);
                    process.stdout.write(output);
                    return [3 /*break*/, 12];
                }
                _c.label = 8;
            case 8:
                nonce = ethers_1.BigNumber.from(args[1]);
                sender = args[2];
                target = args[3];
                value = ethers_1.BigNumber.from(args[4]);
                gas = ethers_1.BigNumber.from(args[5]);
                data = args[6];
                withdrawalHash = (0, core_utils_1.hashWithdrawal)(nonce, sender, target, value, gas, data);
                slot = ethers_1.utils.defaultAbiCoder.encode(['bytes32', 'bytes32'], [withdrawalHash, ethers_1.utils.hexZeroPad('0x', 32)]);
                key = keccak256(slot);
                storage = new trie_1.Trie();
                // Put a bool "true" into storage
                return [4 /*yield*/, storage.put((0, util_1.toBuffer)(key), (0, util_1.toBuffer)('0x01'))
                    // Put the storage root into the L2ToL1MessagePasser storage
                ];
            case 9:
                // Put a bool "true" into storage
                _c.sent();
                address = util_1.Address.fromString(src_1.predeploys.L2ToL1MessagePasser);
                account = util_1.Account.fromAccountData({
                    nonce: 0,
                    balance: 0,
                    storageRoot: storage.root()
                });
                world = new trie_1.Trie();
                return [4 /*yield*/, world.put(address.toBuffer(), account.serialize())];
            case 10:
                _c.sent();
                return [4 /*yield*/, storage.createProof((0, util_1.toBuffer)(key))];
            case 11:
                proof = _c.sent();
                outputRoot = (0, core_utils_1.hashOutputRootProof)({
                    version: ethers_1.constants.HashZero,
                    stateRoot: (0, util_1.bufferToHex)(world.root()),
                    messagePasserStorageRoot: (0, util_1.bufferToHex)(storage.root()),
                    latestBlockhash: ethers_1.constants.HashZero
                });
                encodedProof = RLP.encode(proof);
                output = ethers_1.utils.defaultAbiCoder.encode(['bytes32', 'bytes32', 'bytes32', 'bytes32', 'bytes'], [world.root(), storage.root(), outputRoot, withdrawalHash, encodedProof]);
                process.stdout.write(output);
                return [3 /*break*/, 12];
            case 12: return [2 /*return*/];
        }
    });
}); })()["catch"](function (err) {
    console.error(err);
    process.stdout.write('');
});

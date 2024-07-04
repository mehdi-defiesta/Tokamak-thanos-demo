"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractArtifact = void 0;
let L1CrossDomainMessenger;
try {
    L1CrossDomainMessenger = require('../artifacts/contracts/L1/L1CrossDomainMessenger.sol/L1CrossDomainMessenger.json');
}
catch (_a) { }
let L1StandardBridge;
try {
    L1StandardBridge = require('../artifacts/contracts/L1/L1StandardBridge.sol/L1StandardBridge.json');
}
catch (_b) { }
let L2OutputOracle;
try {
    L2OutputOracle = require('../artifacts/contracts/L1/L2OutputOracle.sol/L2OutputOracle.json');
}
catch (_c) { }
let OptimismPortal;
try {
    OptimismPortal = require('../artifacts/contracts/L1/OptimismPortal.sol/OptimismPortal.json');
}
catch (_d) { }
let ResourceMetering;
try {
    ResourceMetering = require('../artifacts/contracts/L1/ResourceMetering.sol/ResourceMetering.json');
}
catch (_e) { }
let CrossDomainOwnable;
try {
    CrossDomainOwnable = require('../artifacts/contracts/L2/CrossDomainOwnable.sol/CrossDomainOwnable.json');
}
catch (_f) { }
let CrossDomainOwnable2;
try {
    CrossDomainOwnable2 = require('../artifacts/contracts/L2/CrossDomainOwnable2.sol/CrossDomainOwnable2.json');
}
catch (_g) { }
let GasPriceOracle;
try {
    GasPriceOracle = require('../artifacts/contracts/L2/GasPriceOracle.sol/GasPriceOracle.json');
}
catch (_h) { }
let GovernanceToken;
try {
    GovernanceToken = require('../artifacts/contracts/L2/GovernanceToken.sol/GovernanceToken.json');
}
catch (_j) { }
let L1Block;
try {
    L1Block = require('../artifacts/contracts/L2/L1Block.sol/L1Block.json');
}
catch (_k) { }
let L2CrossDomainMessenger;
try {
    L2CrossDomainMessenger = require('../artifacts/contracts/L2/L2CrossDomainMessenger.sol/L2CrossDomainMessenger.json');
}
catch (_l) { }
let L2StandardBridge;
try {
    L2StandardBridge = require('../artifacts/contracts/L2/L2StandardBridge.sol/L2StandardBridge.json');
}
catch (_m) { }
let L2ToL1MessagePasser;
try {
    L2ToL1MessagePasser = require('../artifacts/contracts/L2/L2ToL1MessagePasser.sol/L2ToL1MessagePasser.json');
}
catch (_o) { }
let AddressManager;
try {
    AddressManager = require('../artifacts/contracts/legacy/AddressManager.sol/AddressManager.json');
}
catch (_p) { }
let L1BlockNumber;
try {
    L1BlockNumber = require('../artifacts/contracts/legacy/L1BlockNumber.sol/L1BlockNumber.json');
}
catch (_q) { }
let IL1ChugSplashDeployer;
try {
    IL1ChugSplashDeployer = require('../artifacts/contracts/legacy/L1ChugSplashProxy.sol/IL1ChugSplashDeployer.json');
}
catch (_r) { }
let L1ChugSplashProxy;
try {
    L1ChugSplashProxy = require('../artifacts/contracts/legacy/L1ChugSplashProxy.sol/L1ChugSplashProxy.json');
}
catch (_s) { }
let LegacyERC20ETH;
try {
    LegacyERC20ETH = require('../artifacts/contracts/legacy/LegacyERC20ETH.sol/LegacyERC20ETH.json');
}
catch (_t) { }
let LegacyMessagePasser;
try {
    LegacyMessagePasser = require('../artifacts/contracts/legacy/LegacyMessagePasser.sol/LegacyMessagePasser.json');
}
catch (_u) { }
let ResolvedDelegateProxy;
try {
    ResolvedDelegateProxy = require('../artifacts/contracts/legacy/ResolvedDelegateProxy.sol/ResolvedDelegateProxy.json');
}
catch (_v) { }
let Burn;
try {
    Burn = require('../artifacts/contracts/libraries/Burn.sol/Burn.json');
}
catch (_w) { }
let Burner;
try {
    Burner = require('../artifacts/contracts/libraries/Burn.sol/Burner.json');
}
catch (_x) { }
let Bytes;
try {
    Bytes = require('../artifacts/contracts/libraries/Bytes.sol/Bytes.json');
}
catch (_y) { }
let Encoding;
try {
    Encoding = require('../artifacts/contracts/libraries/Encoding.sol/Encoding.json');
}
catch (_z) { }
let Hashing;
try {
    Hashing = require('../artifacts/contracts/libraries/Hashing.sol/Hashing.json');
}
catch (_0) { }
let Predeploys;
try {
    Predeploys = require('../artifacts/contracts/libraries/Predeploys.sol/Predeploys.json');
}
catch (_1) { }
let RLPReader;
try {
    RLPReader = require('../artifacts/contracts/libraries/rlp/RLPReader.sol/RLPReader.json');
}
catch (_2) { }
let RLPWriter;
try {
    RLPWriter = require('../artifacts/contracts/libraries/rlp/RLPWriter.sol/RLPWriter.json');
}
catch (_3) { }
let SafeCall;
try {
    SafeCall = require('../artifacts/contracts/libraries/SafeCall.sol/SafeCall.json');
}
catch (_4) { }
let MerkleTrie;
try {
    MerkleTrie = require('../artifacts/contracts/libraries/trie/MerkleTrie.sol/MerkleTrie.json');
}
catch (_5) { }
let SecureMerkleTrie;
try {
    SecureMerkleTrie = require('../artifacts/contracts/libraries/trie/SecureMerkleTrie.sol/SecureMerkleTrie.json');
}
catch (_6) { }
let Types;
try {
    Types = require('../artifacts/contracts/libraries/Types.sol/Types.json');
}
catch (_7) { }
let CrossDomainMessenger;
try {
    CrossDomainMessenger = require('../artifacts/contracts/universal/CrossDomainMessenger.sol/CrossDomainMessenger.json');
}
catch (_8) { }
let CrossDomainMessengerLegacySpacer;
try {
    CrossDomainMessengerLegacySpacer = require('../artifacts/contracts/universal/CrossDomainMessenger.sol/CrossDomainMessengerLegacySpacer.json');
}
catch (_9) { }
let OptimismMintableERC20;
try {
    OptimismMintableERC20 = require('../artifacts/contracts/universal/OptimismMintableERC20.sol/OptimismMintableERC20.json');
}
catch (_10) { }
let OptimismMintableERC20Factory;
try {
    OptimismMintableERC20Factory = require('../artifacts/contracts/universal/OptimismMintableERC20Factory.sol/OptimismMintableERC20Factory.json');
}
catch (_11) { }
let Proxy;
try {
    Proxy = require('../artifacts/contracts/universal/Proxy.sol/Proxy.json');
}
catch (_12) { }
let IStaticERC1967Proxy;
try {
    IStaticERC1967Proxy = require('../artifacts/contracts/universal/ProxyAdmin.sol/IStaticERC1967Proxy.json');
}
catch (_13) { }
let IStaticL1ChugSplashProxy;
try {
    IStaticL1ChugSplashProxy = require('../artifacts/contracts/universal/ProxyAdmin.sol/IStaticL1ChugSplashProxy.json');
}
catch (_14) { }
let ProxyAdmin;
try {
    ProxyAdmin = require('../artifacts/contracts/universal/ProxyAdmin.sol/ProxyAdmin.json');
}
catch (_15) { }
let Semver;
try {
    Semver = require('../artifacts/contracts/universal/Semver.sol/Semver.json');
}
catch (_16) { }
let StandardBridge;
try {
    StandardBridge = require('../artifacts/contracts/universal/StandardBridge.sol/StandardBridge.json');
}
catch (_17) { }
let ILegacyMintableERC20;
try {
    ILegacyMintableERC20 = require('../artifacts/contracts/universal/SupportedInterfaces.sol/ILegacyMintableERC20.json');
}
catch (_18) { }
let IOptimismMintableERC20;
try {
    IOptimismMintableERC20 = require('../artifacts/contracts/universal/SupportedInterfaces.sol/IOptimismMintableERC20.json');
}
catch (_19) { }
let AddressAliasHelper;
try {
    AddressAliasHelper = require('../artifacts/contracts/vendor/AddressAliasHelper.sol/AddressAliasHelper.json');
}
catch (_20) { }
let WETH9;
try {
    WETH9 = require('../artifacts/contracts/vendor/WETH9.sol/WETH9.json');
}
catch (_21) { }
const getContractArtifact = (name) => {
    return {
        L1CrossDomainMessenger,
        L1StandardBridge,
        L2OutputOracle,
        OptimismPortal,
        ResourceMetering,
        CrossDomainOwnable,
        CrossDomainOwnable2,
        GasPriceOracle,
        GovernanceToken,
        L1Block,
        L2CrossDomainMessenger,
        L2StandardBridge,
        L2ToL1MessagePasser,
        AddressManager,
        L1BlockNumber,
        IL1ChugSplashDeployer,
        L1ChugSplashProxy,
        LegacyERC20ETH,
        LegacyMessagePasser,
        ResolvedDelegateProxy,
        Burn,
        Burner,
        Bytes,
        Encoding,
        Hashing,
        Predeploys,
        RLPReader,
        RLPWriter,
        SafeCall,
        MerkleTrie,
        SecureMerkleTrie,
        Types,
        CrossDomainMessenger,
        CrossDomainMessengerLegacySpacer,
        OptimismMintableERC20,
        OptimismMintableERC20Factory,
        Proxy,
        IStaticERC1967Proxy,
        IStaticL1ChugSplashProxy,
        ProxyAdmin,
        Semver,
        StandardBridge,
        ILegacyMintableERC20,
        IOptimismMintableERC20,
        AddressAliasHelper,
        WETH9
    }[name];
};
exports.getContractArtifact = getContractArtifact;
//# sourceMappingURL=contract-artifacts.js.map
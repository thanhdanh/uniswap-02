const MyDefiContract = artifacts.require('MyDefiContract.sol');
const MyToken = artifacts.require("MyToken.sol")

module.exports = async function (deployer, _network) {
    const UNISWAP_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
    await deployer.deploy(MyDefiContract, UNISWAP_ROUTER_ADDRESS);
    
    await deployer.deploy(MyToken);
    await MyToken.deployed();
}
const MyDefiContract = artifacts.require("MyDefiContract.sol");
// const MyToken = artifacts.require("MyToken");
// const ERC20 = artifacts.require('ERC20');
// const BigNumber = require("bignumber.js");

module.exports = async function (deployer, _network) {
  const UNISWAP_ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  // const DAI_TOKEN_ADDRESS = "0xad6d458402f60fd3bd25163575031acdce07538d";
  // const MY_ADDRESS = "0xc6d95b53d48086EA544bdE75b16ee221f095C984";

  await deployer.deploy(MyDefiContract, UNISWAP_ROUTER_ADDRESS);
  // const myDefiContract = await MyDefiContract.deployed();

  // const daiToken = await ERC20.at(DAI_TOKEN_ADDRESS)

  // //   await deployer.deploy(MyToken);
  // //   const myToken = await MyToken.deployed();

  // const deadline = Math.ceil(Date.now() / 1000) + 20 * 60 * 1000;

  //   const tolerance = 0.1;
  //   // const slippageBufferRate = new BigNumber(tolerance).div(100).toNumber();

  // //   const minAmountOut = assetOutAmount
  // //     .div(1 + slippageBufferRate)
  // //     .integerValue(BigNumber.ROUND_DOWN);
  // console.log("Address", MY_ADDRESS);
  // const balance = await daiToken.balanceOf(MY_ADDRESS);
  // console.log("Balance", balance);

  // await myDefiContract.swapTokensForExactTokens(
  //   DAI_TOKEN_ADDRESS,
  //   200,
  //   new BigNumber(0.01),
  //   deadline,
  //   { from: addresses[0] }
  // );
};

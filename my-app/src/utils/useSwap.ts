import MyDefiContract from "configs/abi/MyDefiContract.json";
import IUniswap from "configs/abi/IUniswap.json";

import { DAI_TOKEN_ADDRESS, MY_DEFI_TOKEN_ADDRESS, TX_DEADLINE_MIN, UNISWAP_ROUTER_ADDRESS, WETH_ADDRESS } from "configs/constants";
import { getWeb3, scale } from "./web3";
import { AbiItem } from "web3-utils";
import BigNumber from "bignumber.js";

export const useSwap = () => {
  const web3 = getWeb3();
  const defiContract = new web3.eth.Contract(
    MyDefiContract.abi as unknown as AbiItem,
    MY_DEFI_TOKEN_ADDRESS
  );

  const uniswapRouterContract = new web3.eth.Contract(
    IUniswap.abi as unknown as AbiItem,
    UNISWAP_ROUTER_ADDRESS
  );

  const getAmountsOut = async (amountIn: number, address: string[]) => {
    try {
      const amountArr = await uniswapRouterContract.methods.getAmountsOut(amountIn.toString(10) , address).call();
      console.log("amountArr====>", amountArr, 'path===>', address);
  
      return amountArr;
    } catch (error) {
      console.log("getAmountsOut ------> error---return---> 0", error);
      return 0;
    }
  };

  const swapExactTokensForEther = async (account: string, amountIn: number) => {
    // const amountOut = await getAmountsOut(amountIn, [DAI_TOKEN_ADDRESS, WETH_ADDRESS])
    const assetOutAmountNumber = new BigNumber(100);
    const assetOutAmount = scale(assetOutAmountNumber, 18);
    const slippageBufferRate = new BigNumber(0.1)
          .div(100)
          .toNumber();

    const minAmountOut = assetOutAmount
          .div(1 + slippageBufferRate)
          .integerValue(BigNumber.ROUND_DOWN);

    const deadline =
          Math.ceil(Date.now() / 1000) + TX_DEADLINE_MIN * 60 * 1000;
    const tx = await defiContract.methods.swapTokensForExactTokens(
      DAI_TOKEN_ADDRESS,
      new BigNumber(amountIn).toString(10),
      minAmountOut.toString(10),
      deadline
    ).send({ 
      from: account
    });
    console.log(defiContract, tx);
    return tx;
  };

  return {
    swapExactTokensForEther,
  }
}

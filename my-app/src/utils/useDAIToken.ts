import { DAI_TOKEN_ADDRESS } from "configs/constants";
import { useCallback, useEffect, useState } from "react";
import { AbiItem } from "web3-utils";
import { getWeb3 } from "./web3";
import ERC20 from "configs/abi/ERC20_ABI.json"
import BigNumber from "bignumber.js";

const useDAIToken = (walletAddress?: string | null) => {
  const web3 = getWeb3();
  const [balance, setBalance] = useState<string>('0');
  
  const contract = new web3.eth.Contract(
    ERC20.abi as unknown as AbiItem,
    DAI_TOKEN_ADDRESS
  );

  const getBalance = useCallback(async () => {
    if (walletAddress) {
      const decimals = await contract.methods.decimals().call();
      const result = await contract.methods.balanceOf(walletAddress).call();
      const _balance = new BigNumber(result as string).div(10 ** decimals).toNumber();
      setBalance(_balance.toFixed(2));
    }
  }, [contract.methods, walletAddress])

  useEffect(() => {
    getBalance();
  }, [walletAddress, getBalance]);

  return {
    balance,
  };
};

export default useDAIToken;

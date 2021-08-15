import Web3 from 'web3';
import { provider } from 'web3-core';
import { Utils } from 'web3-utils';

let web3: Web3;
export const getWeb3 = (): Web3 => {
    if ((window as any).ethereum) {
        web3 = new Web3((window as any).ethereum as provider);
    } else if ((window as any).web3) {
        web3 = new Web3((window as any).web3.currentProvider);
    } else {
        throw new Error('You have to install MetaMask !')
    }

    return web3;
}

export const getWeb3Utils = (): Utils => {
    return new Web3().utils;
}
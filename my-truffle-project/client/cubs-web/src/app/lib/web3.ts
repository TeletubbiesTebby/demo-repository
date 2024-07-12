import Web3 from 'web3';

let web3: Web3;

if (typeof window !== 'undefined' && (window as any).ethereum) {
    web3 = new Web3((window as any).ethereum);
    try {
        // Request account access if needed
        (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    } catch (e) {
        console.log('User denied account access');
    }
} else if (typeof window !== 'undefined' && (window as any).web3) {
    web3 = new Web3((window as any).web3.currentProvider);
} else {
    const provider = new Web3.providers.HttpProvider('http://localhost:8545');
    web3 = new Web3(provider);
}

export default web3;

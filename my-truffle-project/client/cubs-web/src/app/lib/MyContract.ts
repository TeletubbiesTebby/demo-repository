import web3 from './web3';

const address = '0x57b6E9C21cEA49cF49E7f4595CfB0AD8f183A0C9'; // Updated contract address from your latest migration
const abi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "initMessage",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "message",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newMessage",
          "type": "string"
        }
      ],
      "name": "updateMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]; // ABI ของ Smart Contract

const contract = new web3.eth.Contract(abi, address);

export default contract;

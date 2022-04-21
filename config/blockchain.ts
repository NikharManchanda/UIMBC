import fs from 'fs';
// It’s the conversion of a function that accepts a callback
// into a function that returns a promise.
import { print, promisify } from 'util';
//interact with a local or remote ethereum node using HTTP, IPC or WebSocket.
import Web3 from 'web3';
//interacting with Ethereum contracts from Javascript
import TruffleContract from 'truffle-contract';

const readFile = promisify(fs.readFile);

export const provider = new Web3.providers.HttpProvider('http://localhost:9545');

export const web3 = new Web3(provider);

export async function getStorageContract() {
    const json = await readFile('./build/contracts/SimpleStorage.json', { encoding: 'utf8' });
    const storageContract = TruffleContract(JSON.parse(json));
    storageContract.setProvider(provider);
    return storageContract;
}

export async function getStorageContractInstance() {
    const contract = await getStorageContract();
    return contract.deployed();
}
// Get ehtereum accounts
export async function getEthAccounts() {
    return web3.eth.getAccounts();
}
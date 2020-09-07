import Web3 from "web3";

if (window.ethereum) {
  window.web3 = new Web3(window.ethereum);
  try {
    window.ethereum.enable().then(() => { console.log("Meta mask is working") })
  } catch (error) {
    console.log('User denied account access...');
  }
}
const web3 = (typeof window !== "undefined" && typeof window.web3 !== "undefined")
  ? new Web3(window.ethereum)
  : new Web3(new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/1385039fb2fb405a9272dec867afb43b"
  ));

export default web3;
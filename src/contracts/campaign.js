import web3 from "./web3";

const contract = require("@truffle/contract");
const Campaign = require("./build/Campaign.json");

const CampaignContract = contract(Campaign);
CampaignContract.setProvider(web3.currentProvider);

export default CampaignContract;

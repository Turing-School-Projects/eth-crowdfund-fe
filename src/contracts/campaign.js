import web3 from "./web3";
import Campaign from "./build/Campaign.json";

const contract = require("@truffle/contract");

const CampaignContract = contract(Campaign)
CampaignContract.setProvider(web3.currentProvider);

export default CampaignContract

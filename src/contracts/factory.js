import web3 from "./web3";

const contract = require("@truffle/contract");
const CampaignFactory = require("./build/CampaignFactory.json");

const Factory = contract(CampaignFactory);
Factory.setProvider(web3.currentProvider);

export default Factory;

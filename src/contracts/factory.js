import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const contract = require("@truffle/contract");

const Factory = contract(CampaignFactory)
Factory.setProvider(web3.currentProvider);

export default Factory

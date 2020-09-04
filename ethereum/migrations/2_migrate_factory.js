var CampaignFactory = artifacts.require("CampaignFactory");

module.exports = function(deployer) {
  // Deploy the Campaign contract as our only task
  deployer.deploy(CampaignFactory);
};

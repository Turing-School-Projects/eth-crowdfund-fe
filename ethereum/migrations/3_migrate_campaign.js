var Campaign = artifacts.require("Campaign");

module.exports = function(deployer) {
  // Deploy the Campaign contract as our only task
  deployer.deploy(Campaign, "100", "0xdB7B5978cf498FEb4855354380D95ff21736914f");
};

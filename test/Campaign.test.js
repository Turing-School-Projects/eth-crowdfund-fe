const assert = require("assert");
const CampaignFactory = artifacts.require("CampaignFactory");
const Campaign = artifacts.require("Campaign");

contract("CampaignFactory", async accounts => {
  it("can deploy a Campaign", async () => {
    let campaignAddress
    let factory = await CampaignFactory.deployed()

    await factory.createCampaign(200, {from: accounts[0]});

    [campaignAddress] = await factory.getDeployedCampaigns();
    let campaign = await Campaign.at(campaignAddress)
    await campaign.contribute({from: accounts[1], value: '300'})
    let summary = await campaign.getSummary();

    assert.equal(summary[0].toString(), '200');
    assert.equal(summary[1].toString(), '300');
    assert.equal(summary[2].toString(), '0');
    assert.equal(summary[3].toString(), '1');
    assert.equal(summary[4].toString(), accounts[0]);
  });
});

contract("Campaign", async accounts => {
  it("has a manager", async () => {
    let campaign = await Campaign.deployed()
    let manager = await campaign.manager();
    assert (web3.utils.isAddress(manager));
  });

  it("has a minimumContribution", async () => {
    let campaign = await Campaign.deployed()
    let minimumContribution = await campaign.minimumContribution();

    assert.equal('100', minimumContribution);

    try {
      await campaign.contribute({from: accounts[1], value: '1'});
      assert(false);
    } catch (e) {
      assert(e);
    }
  });

  it("accepts contributors", async () => {
    let campaign = await Campaign.deployed()

    await campaign.contribute({from: accounts[1], value: '200'})
    const isApprover = await campaign.approvers(accounts[1]);
    assert(isApprover);
  });

  it("allows manager to make a withdrawal request", async () => {
    let campaignAddress
    let factory = await CampaignFactory.deployed()
    await factory.createCampaign(200, {from: accounts[0]});
    [campaignAddress] = await factory.getDeployedCampaigns();
    let campaign = await Campaign.at(campaignAddress);

    await campaign.createRequest("Buy Supplies", "100", accounts[1], {from: accounts[0]})
    const request = await campaign.requests(0);
    assert.equal("Buy Supplies", request.description);
    assert.equal(accounts[1], request.recipient);
  });

  it("processes requests", async () => {
    let campaignAddress
    let initialBalance = await web3.eth.getBalance(accounts[1])
    let factory = await CampaignFactory.deployed()
    await factory.createCampaign(200, {from: accounts[0]});
    [campaignAddress] = await factory.getDeployedCampaigns();
    let campaign = await Campaign.at(campaignAddress);

    await campaign.contribute({from: accounts[2], value: '201'})

    await campaign.createRequest("Buy Supplies", "1000000", accounts[1], {from: accounts[0]})
    await campaign.approveRequest(0, {from: accounts[2], gas: "1000000"});
    await campaign.finalizeRequest(0, { from: accounts[0], gas: "1000000"});

    let newBalance = await web3.eth.getBalance(accounts[1]);

    assert(newBalance > initialBalance);
    });

    it('Increases the approver count once per contributor', async () => {
      let campaign = await Campaign.deployed();
      await campaign.contribute({from: accounts[1], value: '200'});
      let summary = await campaign.getSummary()
      let approversCount = summary[3].toString();

      assert.equal(1, approversCount);

      await campaign.contribute({from: accounts[1], value: '200'});

      assert.equal(1, approversCount);
    });
});

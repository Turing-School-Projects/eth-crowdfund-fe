<template>
  <section class='how-to-content'>
    <h2>How to use Etho-Boost</h2>
    <h3>Step 1: Get a Wallet</h3>
    <p>Etho-Boost is a crowdfunding platform built on the Ethereum Blockchain.
      This means you will need a digital wallet to fully experience this dApp.
      <a href="#https://metamask.io/">MetaMask</a> is our wallet of choice. It is
      beginner friendly and attatches right to your browser. <a href="#https://metamask.io/download.html">
      Download it here</a>
    </p>
    <h3>Step 2: Fund Your Account</h3>
    <p>
      In order to create or contribute to a crowdfunding campaign you will need to have funds in
      your account. Our application is currently in beta and as a result our transactions
      take place on the <a href="#https://www.rinkeby.io/#stats">Rinkeby Netwok</a>,
      an Ethereum testnet. You can obtain ether(ETH) on the Rinkeby network from the
      <a href="#https://faucet.rinkeby.io/">Rinkeby Faucet</a>. This network behaves
      much like the Main Ethereum Network but ETH spent on this network is <b>NOT</b>
      worth real money. <br><i>note: We are hoping to deploy our app to the Main
      Ethereum Network sometime in the future.</i>
    </p>
    <h3>Step 3: Connect to our site</h3>
    <p>
      MetaMask will ask for your permission to use our site.
      We will only have access to your public address and nothing else.
    </p>
    <h3>Step 4: Interact with our platform</h3>
    <p>
        <b>Contribute to a Booster:</b> This will give you approval power for all
        requests to withdraw from that booster<br>
        <b>Review and approve withdrawal requests:</b> Withdrawals can only be finalized
        and distributed once the request has a 51% approval rating<br><br>
        <b>Create a Booster:</b> Include a picture and description to personalize your
        Booster.<br>
        <b>Submit requests to withdraw funds:</b> You can make a request to withdraw
        and send the funds to any valid Ethereum wallet address.<br>
    </p>
  </section>
</template>

<script>
export default {
  name: 'HowTo'
}
</script>

<style scoped lang="scss">
  .how-to-content {
    background: #ccc;
    width: 40rem;
    background: rgb(204, 204, 204);
    margin: auto;
    padding: 25px 50px;
    p {
      text-align: justify;
      margin-top: .3rem;
    }
    h3 {
      text-align: left;
      margin-bottom: 0;
    }
  }
</style>

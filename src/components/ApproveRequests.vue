<template>
  <div class="hello">
    <h1>Contributed Campaigns</h1>
    <h3>Campaign: Mullets</h3>
    <p>Description:More haircuts</p>
    <p>Amount: 1 Eth</p>
    <button @click="approveRequest"> Approve This Request</button>
    <p>Description: Less haircuts</p>
    <p>Amount: 1 Eth</p>
    <button> Approve This Request</button>
    <button @click='showContributions'>Con</button>
  </div>
</template>

<script>

import Campaign from "../contracts/campaign";
import web3 from "../contracts/web3";

export default {
  name: 'User Contributions',
  props: {
    msg: String
  },
  created() {
    this.$store.dispatch('fetchAccountNum')
    this.$store.dispatch('getUserContribution', this.accountNum)
  },
  computed: {
    accountNum() {
      return this.$store.state.accountNum
    },
    userContributions() {
      return this.$store.state.userContributions
    }
  },
  methods: {
    showContributions() {
      this.$store.dispatch('getUserContribution', this.accountNum)
    },
    /* eslint-disable */
    async approveRequest() {
      const campaignInstance = await Campaign.at("0xcd579f2539a1Ed7753Dd74D065656680C93d773")
      const accounts = await web3.eth.getAccounts();
      console.log(campaignInstance)
      const result = await campaignInstance.approveRequest(1, { from: this.$store.state.accountNum})
      const request = await campaignInstance.requests(1)
      console.log('result', result)
      console.log('request', request)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

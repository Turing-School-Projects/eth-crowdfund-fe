/* eslint-disable max-len */
<template>
  <section>
    <h3> Campaing Title: </h3>
    <h2>{{ campaign.title }}</h2>
    <h3> Description: </h3>
    <h4>{{ campaign.description }}</h4>
    <h3> Minimum Contribution </h3>
    <h1>{{ campaign.minContribution }}</h1>
    <p>There is some information missing and this has no styles </p>
    <input v-model='contribution' placeholder='Enter your contribution' type="number"/>
    <button @click="ethCampaign.contibute(
      {from: accountNum, value: '0.1'})"> Submit Contribution </button>
    <!-- <button @click="console.log(ethCampaign)"> Submit Contribution </button> -->
    <div>{{ethCampaign}}</div>

  </section>
</template>

<script>

import web3 from "../contracts/web3";

web3.eth.getAccounts()
  .then((accounts) => console.log(accounts[0]))

export default {
  name: 'CampaignDetails',
  props: ['address'],
  computed: {
    ethCampaign() {
      return this.$store.state.campaign
    },
    campaign() {
      return this.$store.getters.getSingleCampaign(Number(this.address))
    },
    accountNum() {
      return this.$store.state.accountNum
    }
  },
  methods: {
    submitContribution() {
      const newCampaign = {
        title: this.title,
        description: this.description,
        minContribution: this.minContribution
      }
      this.$store.commit('ADD_CAMPAIGN', newCampaign)
    }
  },
  data() {
    return {
      contribution: 0
    }
  }
}
</script>

<style scoped lang='scss'>
</style>

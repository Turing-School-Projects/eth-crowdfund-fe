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
    <button :disabled="!contribution"
    @click="ethCampaign.contribute({from: accountNum, value: this.contribution})">
    Submit Contribution </button>

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
  created() {
    const campaignAddress = "0xe8a0980C2B37C2C4FCE45e579301B00CC824bCFc"
    this.$store.dispatch('fetchCampaign', campaignAddress)
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

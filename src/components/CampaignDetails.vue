/* eslint-disable max-len */
<template>
  <section>
    <h3> Campaing Title: </h3>
    <h2>{{ campaign.name }}</h2>
    <h3> Description: </h3>
    <h4>{{ campaign.description }}</h4>
    <h3> Minimum Contribution </h3>
    <img :src=campaign.image />
    <h1>{{ campaign.min_contribution }}</h1>
    <p>There is some information missing and this has no styles </p>
    <input v-model='contribution' placeholder='Enter your contribution' type="number"/>
    <button :disabled="!contribution"
    @click="submitContribution">
    Submit Contribution </button>

  </section>
</template>

<script>

import web3 from "../contracts/web3";
import ethCampaign from "../contracts/campaign";

web3.eth.getAccounts()
  .then((accounts) => console.log(accounts[0]))

export default {
  name: 'CampaignDetails',
  props: ['address'],
  computed: {
    campaign() {
      return this.$store.getters.getSingleCampaign(this.address)
    }
  },
  created() {
    const campaignAddress = "0xe8a0980C2B37C2C4FCE45e579301B00CC824bCFc"
    this.$store.dispatch('fetchCampaign', campaignAddress)
  },
  methods: {
    async submitContribution() {
      // const campaignAddress = "0xe8a0980C2B37C2C4FCE45e579301B00CC824bCFc"
      const campaignInstance = await ethCampaign.at(this.address);
      campaignInstance.contribute({ from: this.$store.state.accountNum, value: this.contribution })
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

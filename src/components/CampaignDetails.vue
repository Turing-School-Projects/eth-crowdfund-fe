/* eslint-disable max-len */
<template>
  <div class="details-card">
    <section>
      <div>
        <img :src=campaign.image />
      </div>
      <div class= "campaign-text">
      <h2>{{ campaign.name }}</h2>
      <h4>{{ campaign.description }}</h4>
      <p>Minimum Contribution  <b> {{ campaign.min_contribution }}</b></p>
      <div>Make a contribution</div>
      <input v-model='contribution' placeholder='Enter your contribution' type="number"/>
      <button :disabled="!contribution"
      @click="submitContribution">
      Submit Contribution </button>
      <div v-if="userMessage"> Please enter a contribution over {{campaign.min_contribution}}</div>
      </div>
    </section>
  </div>
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
      if (this.contribution <= this.campaign.min_contribution) {
        this.userMessage = true;
        return
      }
      const campaignInstance = await ethCampaign.at(this.address);
      campaignInstance.contribute({ from: this.$store.state.accountNum, value: this.contribution })
    }
  },
  data() {
    return {
      contribution: 0,
      userMessage: null
    }
  }
}
</script>

<style scoped lang='scss'>
section {
  display: flex;
  justify-content: center;
  text-align: left;
}

img {
  width: 20rem;
  height: 30rem;
}

.details-card {
  width: 40rem;
  margin: auto;
  margin-top: 3em;
}

input {
  display: block;
  margin: 0rem 1rem 1rem 0rem;
}

.campaign-text {
  margin-left: 2rem;
}

</style>

/* eslint-disable max-len */
<template>
  <div class="details-card">
    <h1>{{ campaign.name }}</h1>
    <div class="campaign-section">
    <section>
      <div class="img-area">
        <img :src=campaign.image />
      </div>
      <div class= "campaign-text">
      <h4>{{ campaign.description }}</h4>
      </div>
    </section>
      <div class="contribution-area">
        <h2>Make a contribution</h2>
        <p>Minimum Contribution  <b> {{ campaign.min_contribution }}</b></p>
        <input v-model='contribution' placeholder='Enter your contribution' type="number"/>
        <button :disabled="!contribution"
        @click="submitContribution">
        Submit Contribution </button>
        <p class="user-message"
          v-if="userMessage">
          Please enter a contribution over {{campaign.min_contribution}}!
        </p>
      </div>
    </div>
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
      contribution: null,
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
  background: whitesmoke;
  box-shadow: 2px 2px 2px grey;
  align-items: center;
  border: 3px solid black;
  width: 45rem;
}

.img-area {
  display: inherit;
  margin: 1rem;
}

.user-message {
  font-weight: 600;
}

.contribution-area {
  border: 3px solid black;
  margin-left: 2rem;
  background: #42b983;
}

.campaign-section {
  display: flex;
  margin: auto;
  width: 60rem;
}

img {
  width: 30vw;
  height: 46.67vh;
}

.details-card {
  margin: auto;
  margin-top: 3em;
}

input {
  display: block;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.campaign-text {
  margin-left: 2rem;
}

</style>

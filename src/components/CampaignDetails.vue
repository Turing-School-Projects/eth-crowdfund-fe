/* eslint-disable max-len */
<template>
  <Loading v-if="loading" />
  <div class="details-card" v-if="!loading">
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
        <h3>Make a Contribution</h3>
        <p>To become an approver of this campaign please contribute more than:</p>
        <input v-model='contribution' placeholder='Enter your contribution (ETH)' type='number' step='0.0001' min='0'/>
        <button :disabled="!contribution"
        @click="submitContribution">
        Submit Contribution </button>
        <button :disabled="!contribution"
        @click="convertToDollars">
        Convert To USD </button>
        <p><b>Past contributors: 3</b></p>
        <p v-if="userMessage">Please Enter an amount greater than {{campaign.min_contribution}}ETH</p>
      </div>
    </div>
  </div>
</template>

<script>
import web3 from "../contracts/web3";

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
  data() {
    return {
      contribution: null,
      userMessage: null,
      loading: false
    }
  },
  components: {
    // Loading
  },
  methods: {
    /* eslint-disable */
    async submitContribution() {
      if(this.contribution > this.campaign.min_contribution){
        this.$store.dispatch('contributeToBlockChain', {address: this.address, contribution: this.contribution})
      } else {
        this.userMessage = true;
      }
    }
  }
}
</script>


<style scoped lang='scss'>
@import "../_variables.scss";

section {
  display: flex;
  justify-content: center;
  text-align: left;
  background: whitesmoke;
  box-shadow: 2px 2px 2px grey;
  align-items: center;
  border: 3px solid black;
  width: 45rem;
  background: radial-gradient($light-green 45%, $green 98%);

}

.img-area {
  display: inherit;
  margin: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

.user-message {
  font-weight: 600;
}

.contribution-area {
  border: 3px solid black;
  margin-left: 2rem;
  width: 30vw;
  background: radial-gradient($light-green 45%, $green 98%);
}

.campaign-section {
  display: flex;
  margin: auto;
  width: 80vw;
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

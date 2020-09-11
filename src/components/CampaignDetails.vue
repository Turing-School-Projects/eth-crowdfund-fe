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
        <h3>Make a Contribution</h3>
        <p>To become an approver of this campaign please contribute more than:
          <b> {{ ethMinContribution() }} ETH</b></p>
        <input v-model='contribution' placeholder='Enter your contribution (ETH)' type='number' step='0.0001' min='0'/>
        <button :disabled="!contribution"
        @click="submitContribution">
        Submit Contribution </button>
        <button :disabled="!contribution"
        @click="convertToDollars">
        Convert To USD </button>
        <p><b>Past contributors:</b></p>
        <ul>
        <li>Andy: $10 </li>
        <li>Edwin: $10 </li>
        <li>Jack: $1 </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import web3 from "../contracts/web3";
import ethCampaign from "../contracts/campaign";
import { VUE_APP_API_URL } from "../env";

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
  methods: {
    /* eslint-disable */
    async submitContribution() {
      const campaignInstance = await ethCampaign.at(this.address);
      const result = await campaignInstance.contribute({
        from: this.$store.state.accountNum,
        value: web3.utils.toWei(this.contribution, "ether")
      })
      if (result && (web3.utils.toWei(this.contribution, "ether") > this.campaign.min_contribution.toString())) {
        try {
          await axios.put(
            `${VUE_APP_API_URL}campaigns/${this.campaign.id}`,
            {
              value: (this.$store.getters.getSingleCampaign(this.address).value + this.contribution)
             }
          );
        } catch (error) {
          return { error };
        }
      }
    },
    /* eslint-enable */
    ethMinContribution() {
      return web3.utils.fromWei(this.campaign.min_contribution.toString(), "ether")
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

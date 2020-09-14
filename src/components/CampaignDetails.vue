/* eslint-disable vue/no-async-in-computed-properties */
/* eslint-disable  */
<template>
  <Loading v-if="this.$store.state.loading" />
  <div class="details-card" v-if="!this.$store.state.loading">
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
        <p>To become an approver of this Booster please contribute more than:</p>
        <ether-input v-model:value="contribution" />
        <button :disabled="!contribution"
        @click="submitContribution">
        Submit Contribution </button>
        <p><b>Past contributors: {{ pastApprovals }}</b></p>
        <p v-if="userMessage">Please Enter an amount greater than {{campaign.min_contribution}}ETH</p>
      </div>
    </div>
  </div>
</template>

<script>
import etherInput from "@/ui/etherInput.vue";
import Loading from "./Loading.vue";
import Campaign from "../contracts/campaign";

export default {
  name: 'CampaignDetails',
  props: ['address'],
  computed: {
    campaign() {
      return this.$store.getters.getSingleCampaign(this.address)
    }
  },
  created() {
    this.getPastContributors()
  },
  data() {
    return {
      contribution: null,
      userMessage: null,
      pastApprovals: 0
    }
  },
  methods: {
    /* eslint-disable */
    async submitContribution() {
      if(this.contribution > this.campaign.min_contribution){
        this.$store.dispatch('contributeToBlockChain', {address: this.address, contribution: this.contribution})
      } else {
        this.userMessage = true;
      }
    },
    async getPastContributors() {
      const campaignInstance = await Campaign.at(this.address);
      const voterCount = await campaignInstance.approversCount()
      this.pastApprovals = voterCount.toString();
    }
  },
  components: {
    etherInput,
    Loading
  }
}
</script>


<style scoped lang='scss'>
@import "../_variables.scss";
.details-card {

section {
  display: flex;
  justify-content: center;
  text-align: left;
  background: whitesmoke;
  box-shadow: 2px 2px 2px grey;
  align-items: center;
  border: 3px solid black;
  width: 45rem;
  background: radial-gradient($sky-blue 45%, $sky 98%);

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
  width: 23vw;
  background: radial-gradient($sky-blue 45%, $sky 98%);
}

input {
  .eth-value {
    width: 8vw;
  }
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


.campaign-text {
  margin-left: 2rem;
}

}
</style>

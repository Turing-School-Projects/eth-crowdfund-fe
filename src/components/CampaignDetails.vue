/* eslint-disable vue/no-async-in-computed-properties */
/* eslint-disable  */
<template>
  <Loading v-if="this.$store.state.loading" />
  <div v-if="thankYouMessage" >
    <h2> Thank you for your contribution!</h2>
    <p> Taking you back to Active Boosters</p>
  </div>
  <div class="details-card" v-if="!this.$store.state.loading && !thankYouMessage">
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
        <p>To become an approver of this Booster please contribute more than: {{campaign.min_contribution}}ETH</p>
        <ether-input id="contribution-input" v-model:value="contribution" />
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
      pastApprovals: 0,
      thankYouMessage: false
    }
  },
  methods: {
    /* eslint-disable */
    async submitContribution() {
      if(this.contribution > this.campaign.min_contribution){
        const result = await this.$store.dispatch('contributeToBlockChain', {address: this.address, contribution: this.contribution})
        if(result) {
          this.thankYouMessage = true;
        }
        const self = this;
        setTimeout(
        /* eslint-disable-next-line */
        function() { 
          console.log('yay')
          self.$router.push('/')
        }, 4000
        );
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
display: inline-block;
section {
  display: flex;
  justify-content: center;
  text-align: left;
  background: whitesmoke;
  box-shadow: 2px 2px 2px grey;
  align-items: center;
  border: 3px solid black;
  width: 60rem;
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
  min-width: 20rem;
  max-width: 28rem;
  background: radial-gradient($sky-blue 45%, $sky 98%);
  p {
    width: 20rem;
    margin: auto;
    margin-bottom: 2rem;
  }
  button {
    margin-bottom: 1rem;
  }
}

input {
  .eth-value {
    width: 8vw;
  }
}

.campaign-section {
  display: flex;
  margin: auto;
  height: 32rem;
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

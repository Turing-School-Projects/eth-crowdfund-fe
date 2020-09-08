<template>
  <form @submit.prevent='addCampaign'>
    <input v-model='title' placeholder='Campaign Title' />
    <input v-model='minContribution' placeholder='Minimun Wei Contribution' />
    <textarea v-model='description' placeholder='Describe your Campaign...'></textarea>
    <button type='submit' > Create Campaign </button>
  <div v-if="this.userMessage">Please fill out all inputs</div>
  </form>
</template>

<script>
import axios from "axios";
import web3 from "../contracts/web3";
import Factory from "../contracts/factory";

export default {
  name: 'NewCampaignForm',
  data() {
    return {
      title: '',
      description: '',
      minContribution: null,
      userMessage: false
    }
  },
  methods: {
    async displaySummary() {
      const summary = await this.$store.state.campaign.getSummary();
      const keySummary = Object.keys(summary).map((key) => summary[key].toString())
      console.log(keySummary)
    },
    addCampaign() {
      const newCampaign = {
        title: this.title,
        description: this.description,
        minContribution: this.minContribution
      }
      this.createCampaign()
      this.$store.commit('ADD_CAMPAIGN', newCampaign)
    },
    async createCampaign() {
      if (!this.title && !this.description && !this.minContribution) {
        this.userMessage = true
        return
      }
      const accounts = await web3.eth.getAccounts();
      const factory = await Factory.at("0x7c70286f6991c660a0cC6d52A74aEBbDE45Da380");
      await factory.createCampaign(this.minContribution, { from: accounts[0] })
      const addresses = await factory.getDeployedCampaigns()
      const campaignAddress = addresses[addresses.length - 1];
      axios.post("http://localhost:3000/api/v1/campaigns/", {
        name: "Test Campaign",
        description: "test description",
        image: "test.jpg",
        contributors: "1",
        upvote: "2",
        manager: "3",
        address: campaignAddress,
        min_contribution: 5.0
      })
        .then((resp) => console.log(resp))
    }
  },
  computed: {
    factory() {
      return this.$store.state.factory
    },
    accountNum() {
      return this.$store.state.accountNum
    },
    campaign() {
      return this.$store.state.campaign
    }
  }
}
</script>

<style lang='scss'>
form {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 45vh;
  width: 90vw;

  input {
    height: 2em;
    width: 55vw;
  }

  textarea {
    resize: none;
    height: 12em;
    width: 55vw;
  }

  button {
    width: 45vw;
    height: 2em;
  }
}
</style>

<template>
  <form @submit.prevent='addCampaign'>
    <input v-model='title' placeholder='Campaign Title' />
    <input v-model='imageUrl' placeholder='Enter Image Url' />
    <input v-model='minContribution' placeholder='Minimun Wei Contribution' />
    <textarea v-model='description' placeholder='Describe your Campaign...'></textarea>
    <button type='submit' > Create Campaign </button>
  <div v-if="this.userMessage">Please fill out all inputs</div>
  <div v-if="this.error">{{this.error}}</div>
  </form>
</template>

<script>
import axios from "axios";
import web3 from "../contracts/web3";
import Factory from "../contracts/factory";
import { VUE_APP_API_URL } from "../env";

export default {
  name: 'NewCampaignForm',
  data() {
    return {
      title: '',
      description: '',
      minContribution: null,
      userMessage: false,
      email: '',
      error: null
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
      if (!this.title && !this.description && !this.minContribution && !this.imageUrl) {
        this.userMessage = true
        return
      }
      const accounts = await web3.eth.getAccounts();
      const factory = await Factory.at("0x7c70286f6991c660a0cC6d52A74aEBbDE45Da380");
      await factory.createCampaign(this.minContribution, { from: accounts[0] })
      const addresses = await factory.getDeployedCampaigns()
      const campaignAddress = addresses[addresses.length - 1];
      axios.post(`${VUE_APP_API_URL}campaigns/`, {
        name: this.title,
        description: this.description,
        image: this.imageUrl,
        contributors: "0",
        upvote: "0",
        manager: this.$store.state.accountNum,
        address: campaignAddress,
        min_contribution: this.minContribution
      })
        .then((resp) => console.log(resp))
        // eslint-disable-next-line no-return-assign
        .catch((error) => this.error = error.message)
      this.clearInputs()
    },
    clearInputs() {
      this.title = ''
      this.description = ''
      this.imageUrl = ''
      this.minContribution = null
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

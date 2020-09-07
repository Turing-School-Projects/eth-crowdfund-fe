<template>
  <form @submit.prevent='addCampaign'>
    <input v-model='title' placeholder='Campaign Title' />
    <input v-model='minContribution' placeholder='Minimun Wei Contribution' />
    <textarea v-model='description' placeholder='Describe your Campaign...'></textarea>
    <button type='submit' > Create Campaign </button>
    <button @click="factory.createCampaign(100, {from: accountNum } )">
    Create Campaign Blockchain
  </button>
   <button @click="campaign.contribute({from: accountNum, value: '900'} )">
     contribute
     </button>
   <button @click="displaySummary">
     Display Summary
    </button>
    <div>{{campaign}} </div>
  </form>
</template>

<script>
import web3 from "../contracts/web3";

web3.eth.getAccounts()
  .then((accounts) => console.log(accounts[0]))

export default {
  name: 'NewCampaignForm',
  data() {
    return {
      title: '',
      description: '',
      minContribution: null
    }
  },
  methods: {
    async displaySummary() {
      const summary = await this.$store.state.campaign.getSummary();
      const keySummary = Object.keys(summary).map((key) => summary[key].toString())
      console.log(keySummary)
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

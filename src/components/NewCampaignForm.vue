<template>
  <form @submit.prevent='addCampaign'>
    <input v-model='title' placeholder='Campaign Title' />
    <input v-model='minContribution' placeholder='Minimun Wei Contribution' />
    <textarea v-model='description' placeholder='Describe your Campaign...'></textarea>
    <button type='submit' > Create Campaign </button>
  </form>
</template>

<script>
import web3 from "../../ethereum/web3";

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
    addCampaign() {
      const newCampaign = {
        title: this.title,
        description: this.description,
        minContribution: this.minContribution
      }
      this.$store.commit('ADD_CAMPAIGN', newCampaign)
    }
  },
  computed: {
    factory() {
      return this.$store.state.factory
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

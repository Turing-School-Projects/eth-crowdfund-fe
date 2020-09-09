<template>
  <form @submit.prevent='addCampaign'>
    <input v-model='name' placeholder='Name your Request' />
    <input v-model='amount' type='number' placeholder='Request Amount' />
    <textarea v-model='description' placeholder='Request description'></textarea>
    <button type='submit' > Create Campaign </button>
  <div v-if="this.userMessage">Please fill out all inputs</div>
  <div v-if="this.error">{{this.error}}</div>
  </form>
</template>

<script>
export default {
  name: 'CampaignRequestForm',
  data() {
    return {
      name: '',
      description: '',
      amount: 0,
      userMessage: false,
      email: '',
      error: null
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

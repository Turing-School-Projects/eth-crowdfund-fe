<template>
  <form @submit.prevent='createRequest'>
    <div>
      <label for='request-title' />
        <input v-model='name' id='request-title' placeholder='Request Title' />
    </div>
    <div>
      <label for='eth-value' />
        <input id='eth-value' v-model='value' type='number' step='0.0001' min='0' />
    </div>
    <div>
      <label for='recipient-wallet' />
      <input v-model='recipientWallet' placeholder="Wallet address. Defaults to current CryptoWallet address" />
    </div>
    <textarea v-model='description' placeholder='Request description'></textarea>
    <button type='submit' > Create Campaign </button>
  <div v-if="this.userMessage">Please request an Ether amount</div>
  <div v-if="this.error">{{this.error}}</div>
  </form>
</template>

<script>
export default {
  name: 'CampaignRequestForm',
  props: ['id', 'address'],
  data() {
    return {
      name: '',
      description: '',
      value: 0,
      recipientWallet: '',
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
  },
  methods: {
    createRequest() {
      if (!this.value) {
        this.userMessage = true
        return
      }

      if (!this.recipientWallet) {
        this.recipientWallet = this.accountNum
      }

      const payload = {
        request: {
          campaign_id: this.id,
          value: this.value,
          recipient: this.recipientWallet,
          description: this.description,
          image: this.image
        },
        manager: this.accountNum,
        address: this.address
      }

      try {
        this.$store.dispatch('createWithdrawalRequest', payload)
      } catch (error) {
        this.error = { error }
      }
    }
  }
}
</script>

<style lang='scss'> form { display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 45vh;
  width: 90vw;

  input {
    height: 2em;
    width: 55vw;
  }

  #eth-value {
    display: flex;
    width:55vw;

    .whole-value {
      width: 12vw
    }
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

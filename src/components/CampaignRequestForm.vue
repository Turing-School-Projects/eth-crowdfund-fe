<template>
  <Loading v-if="this.$store.state.loading" />
  <section v-if="!this.$store.state.loading" class='withdrawal-request'>
    <h2>Create A Withdrawal Request</h2>
    <form @submit.prevent='createRequest'>
      <label for='request-title'>Title</label>
      <input v-model='name' id='request-title' placeholder='Request Title' />
      <label for='eth-value'>Withdrawal Amount</label>
      <ether-input v-model:value='value' class="ether-input" />
      <label for='recipient-wallet'>Recipient CryptoWallet Address</label>
        <input
          id='recipient-wallet'
          v-model='recipientWallet'
          placeholder="**Defaults to current connected CryptoWallet**"
        />
        <textarea v-model='description' placeholder='Request description'></textarea>
        <basicButton type='submit' text="Create Withdrawal Request" />
        <div v-if="this.userMessage">Please request an Ether amount</div>
        <div v-if="this.error">{{this.error}}</div>
    </form>
  </section>
</template>

<script>

import Loading from '@/components/Loading.vue';
import basicButton from "@/ui/basicButton.vue"
import EtherInput from '@/ui/etherInput.vue'

export default {
  name: 'CampaignRequestForm',
  props: ['id', 'address'],
  components: {
    Loading,
    basicButton,
    EtherInput
  },
  data() {
    return {
      name: '',
      description: '',
      value: 0,
      recipientWallet: this.$store.state.accountNum,
      userMessage: false,
      email: '',
      error: null,
      loading: false
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
        address: this.address,
        manager: this.accountNum
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

<style scoped lang='scss'>
@import "../_variables.scss";

form {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  margin-top: 2.8rem;
  padding: 2.1em 0;
  background: lighten($sky-blue, 20%);
  border: 2px solid black;
  height: 65vh;
  width: 65vw;

  label {
    align-self: flex-start;
    margin-left: 7.4rem;
  }

  input {
    height: 2em;
    width: 43vw;
    margin-bottom: 1.3rem;
    margin-left: 1.1rem;
  }

  .ether-input {
    justify-self: center;
    height: 2em;
    width: 43vw;
    padding-bottom: 1rem;

    #eth-value {
      margin: 0px;
    }
  }

  textarea {
    height: 4em;
    resize: none;
    width: 43vw;
    margin-left: 1.2rem;
  }

  button {
    width: 40vw;
    height: 1.8rem;
    margin: 1.3rem 0 0.3rem 1.3rem;
  }
}
</style>

<template>
  <section v-if="!loading" class='withdrawal-request'>
    <h2>Create A Withdrawal Request</h2>
    <form @submit.prevent='createRequest'>
      <label for='request-title'>Title</label>
      <input v-model='name' id='request-title' placeholder='request title' />
      <label for='eth-value'>Withdrawal Amount</label>
      <ether-input v-model:value='value' />
      <label for='recipient-wallet'>Wallet Public Address</label>
      <div class='wallet-address'>
        <input
          id='recipient-wallet'
          v-model='recipientWallet'
          placeholder="Recipient Wallet Address"
        />
        <p class='message'><i>**Defaults to current connected CryptoWallet.**</i></p>
      </div>
        <textarea v-model='description' placeholder='Request description'></textarea>
        <basicButton type='submit' text="Create Withdrawal Request" />
        <div v-if="this.userMessage">Please request an Ether amount</div>
        <div v-if="this.error">{{this.error}}</div>
    </form>
  </section>
  <Loading v-if="loading" />
</template>

<script>

import Loading from '@/components/Loading.vue';
import basicButton from "@/ui/basicButton.vue"
import EtherInput from '@/ui/etherInput.vue'

export default {
  name: 'CampaignRequestForm',
  props: ['id', 'address'],
  components: {
    basicButton,
    EtherInput
  },
  data() {
    return {
      name: '',
      description: '',
      value: 0,
      recipientWallet: '',
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
      const self = this
      if (!this.value) {
        this.userMessage = true
        return
      }
      if (!this.recipientWallet) {
        this.recipientWallet = this.accountNum
      }
      self.loading = true;
      setInterval(
        // No way of knowing when loading shoyld be complete
        // eslint-disable-next-line func-names
        () => {
          self.loading = false
        }, 15000
      );
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
  },
  components: {
    Loading
  }
}
</script>

<style scoped lang='scss'>
@import "../_variables.scss";

form {
  @include beautifyBorder(.3rem, $white, $white-gray, $bg_2, $dark-gray, $bg_1, $gray, 0
  / .55em .55em)
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  margin: 2.8rem 5rem 1rem 9.2rem;
  padding: 2.1em 0;
  height: 65vh;
  width: 65vw;

  label {
    align-self: flex-start;
    margin-left: 4rem;
  }

  input {
    width: 49.5vw;
    height: 2em;
    font-size: 14px;
  }

  .value-box {
    display: grid;
    margin-bottom: 8px;
    grid-template-areas:
          "value coin"
          "text .";

    #eth-value {
      grid-area: value;
      padding: 0px;
      margin: 0px;
      width: 47vw;
    }

    .coin {
      grid-area: coin;
      align-self: center;
      margin: 0px;
      padding: 0px;
    }

    .text {
      grid-area: text;
      margin: 0px;
      padding: 0px;
    }
  }

  .wallet-address {

    #recipient-wallet,
    .message {
      margin: 0px;
      padding: 0px;
    }
  }

  textarea {
    height: 7em;
    margin-top: 8px;
    resize: none;
    width: 49.5vw;
  }

  button {
    width: 49.5vw;
    height: 2em;
  }
}
</style>

<template>
  <h1  v-if="!this.loading"> Create a New Campaign </h1>
  <form v-if="!this.loading" @submit.prevent='addCampaign'>
    <label>Campaign Title</label>
    <input v-model='title' placeholder='Ex: Arc Thrift' />
    <label>Enter Image Url</label>
    <input v-model='imageUrl' placeholder='Ex: https://picsum.photos/200/300' />
    <label>Minimum Ether Contribution</label>
    <ether-input v-model:value="minContribution" class='ether-input'/>
    <label>Describe your campaign</label>
    <textarea v-model='description' placeholder='Ex: Help out a Denver-area store serving our community'></textarea>
    <basicButton type='submit' text='Create Campaign' />
  <div v-if="this.userMessage">Please fill out all inputs</div>
  <div v-if="this.error">{{this.error}}</div>
  </form>
    <Loading v-if="this.loading" />
</template>

<script>
import axios from "axios";
import Loading from '@/components/Loading.vue';
import basicButton from '@/ui/basicButton.vue'
import etherInput from '@/ui/etherInput.vue'
import web3 from '../contracts/web3'
import Factory from "../contracts/factory";
import { VUE_APP_API_URL } from "../env";

export default {
  name: 'NewCampaignForm',
  data() {
    return {
      title: '',
      description: '',
      minContribution: 0,
      userMessage: false,
      email: '',
      error: null,
      loading: false,
      imageUrl: ''
    }
  },
  methods: {
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
      this.loading = true;
      // const accounts = await web3.eth.getAccounts();
      const factory = await Factory.at(process.env.VUE_APP_FACTORY_ADDRESS);
      const contribution = web3.utils.toWei(this.minContribution)
      const result = await factory.createCampaign(contribution, { from: this.$store.state.accountNum })
      const addresses = await factory.getDeployedCampaigns()
      const campaignAddress = addresses[addresses.length - 1];

      if (result) {
        axios.post(`${VUE_APP_API_URL}campaigns/`, {
          name: this.title,
          description: this.description,
          image: this.imageUrl,
          value: "0",
          upvote: "0",
          manager: this.$store.state.accountNum,
          address: campaignAddress,
          min_contribution: this.minContribution
        })
          .then((resp) => console.log(resp))
          // eslint-disable-next-line no-return-assign
          .catch((error) => this.error = error.message)
        this.clearInputs()
        this.$router.push(`/campaigns/user`)
        this.loading = false;
      }
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
  },
  components: {
    Loading,
    basicButton,
    etherInput
  }
}
</script>

<style lang='scss'>
@import '../_variables.scss';
form {
  @include beautifyBorder(.3rem, $white, $white-gray, $bg_2, $bg_1, $dark-gray, $gray, 0 / .55em
  .55em)
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 65vh;
  margin-top: 0.8rem;
  padding: 2.1rem 0;
  width: 65vw;

  label {
    align-self: flex-start;
    margin-left: 3.4rem;
  }

  input {
    height: 2em;
    width: 50vw;
    margin-bottom: 2vh;
  }

  .ether-input {
    justify-self: center;
    height: 2em;
    width: 48vw;
    margin-bottom: 2vh;
    margin-right: 2.1rem;
  }

  textarea {
    resize: none;
    height: 5rem;
    width: 50vw;
  }

  button {
    width: 45vw;
    height: 2em;
  }
}
</style>

<template>
  <h1  v-if="!this.loading"> Create a New Campaign </h1>
  <form v-if="!this.loading" @submit.prevent='addCampaign'>
    <label>Campaign Title</label>
    <input v-model='title' placeholder='Ex: Arc Thrift' />
    <label>Enter Image Url</label>
    <input v-model='imageUrl' placeholder='Ex: https://picsum.photos/200/300' />
    <label>Minimum Ether Contribution</label>
    <input v-model='minContribution' placeholder='Ex: 100' type='number' step='0.0001'/>
    <label>Describe your campaign</label>
    <textarea v-model='description' placeholder='Ex: Help out a Denver-area store serving our community'></textarea>
    <button type='submit' > Create Campaign </button>
  <div v-if="this.userMessage">Please fill out all inputs</div>
  <div v-if="this.error">{{this.error}}</div>
  </form>
    <Loading v-if="this.loading" />
</template>

<script>
import axios from "axios";
import Loading from '@/components/Loading.vue';
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
        this.loading = false;
        this.clearInputs()
      }
      this.$router.push(`/campaigns/user`)
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
    Loading
  }
}
</script>

<style lang='scss'>
@import '../_variables.scss';
form {
  // @include beautifyBorder(.8rem, $white, $gray, $bg_2, $dark-blue, $bg_1, $blue)
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 70vh;
  width: 90vw;
  border: 3px solid rgb(80, 80, 80);
  background: radial-gradient($light-green 45%, $green 98%);

  label {
    align-self: flex-start;
    margin-left: 17.5vw;
  }

  input {
    height: 2em;
    width: 55vw;
    margin-bottom: 2vh;
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

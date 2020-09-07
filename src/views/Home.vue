<template>
  <div class="home">
    <CampaignContainer v-bind:campaigns="campaigns"/>
  </div>
  <button @click="logFactory"> Console.log Factory</button>
  <!-- //Put your account # into from, or figure out how to get your account from web3 -->
  <button @click="factory.createCampaign(100, {from: '0xa21b4eEa9261eB71D54c1694C7C7e732cCDd9825' } )">
    Create Campaign
  </button>
</template>

<script>
// @ is an alias to /src
import CampaignContainer from '@/components/Container.vue';
// import mapActions from 'vuex'
import factory from '../contracts/factory'
// import campaign from '../../ethereum/campaign'

factory.at('0x7c70286f6991c660a0cC6d52A74aEBbDE45Da380')
  .then((instance) => instance.getDeployedCampaigns())
  .then((campaignAddresses) => console.log(campaignAddresses))

// campaign.at("0xe8a0980C2B37C2C4FCE45e579301B00CC824bCFc")
//   .then((instance) => console.log(instance))
export default {
  name: 'Home',
  components: {
    CampaignContainer
  },
  methods: {
    logFactory() {
      console.log(this.$store.state.factory)
    }
  },
  created() {
    this.$store.dispatch('fetchTodos')
    this.$store.dispatch('fetchFactory')
    this.$store.dispatch('fetchAccountNum')
  },
  computed: {
    campaigns() {
      return this.$store.state.campaigns
    },
    todos() {
      return this.$store.state.todos
    },
    factory() {
      return this.$store.state.factory
    }
  }
}
</script>

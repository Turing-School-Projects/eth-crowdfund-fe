<template>
  <div class="home">
    <CampaignContainer v-bind:campaigns="campaigns"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CampaignContainer from '@/components/Container.vue';
import factory from '../contracts/factory'

factory.at('0x7c70286f6991c660a0cC6d52A74aEBbDE45Da380')
  .then((instance) => instance.getDeployedCampaigns())
  .then((campaignAddresses) => console.log(campaignAddresses))

export default {
  name: 'Home',
  components: {
    CampaignContainer
  },
  methods: {
  },
  created() {
    this.$store.dispatch('fetchTodos')
    this.$store.dispatch('fetchFactory')
    this.$store.dispatch('fetchAccountNum')
    this.$store.dispatch('fetchAllCampaigns')
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

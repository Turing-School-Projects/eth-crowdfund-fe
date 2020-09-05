<template>
  <div class="home">
    <CampaignContainer v-bind:campaigns="campaigns"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CampaignContainer from '@/components/Container.vue';
import factory from '../../ethereum/factory'

factory.at('0x7c70286f6991c660a0cC6d52A74aEBbDE45Da380')
  .then((instace) => instace.getDeployedCampaigns())
  .then((campaignAddresses) => console.log(campaignAddresses))

export default {
  name: 'Home',
  components: {
    CampaignContainer
  },
  computed: {
    campaigns() {
      return this.$store.state.campaigns
    }
  }
}
</script>

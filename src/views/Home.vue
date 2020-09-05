<template>
  <div class="home">
    <CampaignContainer v-bind:campaigns="campaigns"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CampaignContainer from '@/components/Container.vue';
import factory from '../../ethereum/factory'
import campaign from '../../ethereum/campaign'

factory.at('0x7c70286f6991c660a0cC6d52A74aEBbDE45Da380')
  .then((instance) => instance.getDeployedCampaigns())
  .then((campaignAddresses) => console.log(campaignAddresses))

campaign.at("0xe8a0980C2B37C2C4FCE45e579301B00CC824bCFc")
  .then((instance) => console.log(instance))

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

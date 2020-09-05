<template>
  <div class="home">
    <CampaignContainer v-bind:campaigns="campaigns"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CampaignContainer from '@/components/Container.vue';

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

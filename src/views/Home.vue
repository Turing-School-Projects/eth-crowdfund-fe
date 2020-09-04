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
  data() {
    return {
      campaigns: [
        {
          title: 'Buy a well',
          description: 'help us buy a well',
          id: 1,
          completed: false
        },
        {
          title: 'Buy a well',
          description: 'help us buy a well',
          id: 1,
          completed: false
        }
      ]
    }
  }
}
</script>

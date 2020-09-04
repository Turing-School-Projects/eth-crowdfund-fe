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
          title: 'End World Hunger',
          description: 'We can do it',
          id: 2,
          completed: false
        },
        {
          title: 'Clean up Cheesman Park',
          description: 'Its right by my house',
          id: 3,
          completed: false
        },
        {
          title: 'Help orphaned children',
          description: 'They really need it',
          id: 4,
          completed: false
        }
      ]
    }
  }
}
</script>

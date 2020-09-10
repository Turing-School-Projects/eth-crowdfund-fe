<template>
  <h2 @click="userView = true"> My Created Campaigns</h2>
  <h2 @click="userView = false"> Campaigns I Contributed To </h2>
  <div v-if="userView" class="container">
    <MyCreatedCampaigns />
  </div>
  <div v-if="!userView" class="container">
    <MyContributedCampaigns />
  </div>
</template>

<script>
import MyCreatedCampaigns from '@/components/MyCreatedCampaigns.vue';
import MyContributedCampaigns from '@/components/MyContributedCampaigns.vue';

export default {
  name: 'UserCampaigns',
  computed: {
  },
  data() {
    return {
      userView: true
    }
  },
  components: {
    MyCreatedCampaigns,
    MyContributedCampaigns
  }
}
</script>

<style scoped lang='scss'>

h2 {
  display: inline-block;
  margin: 2rem 2rem;
}

</style>

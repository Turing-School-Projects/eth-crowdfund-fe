<template>
  <h2 @click="userView = true"> Campaigns I've Created</h2>
  <h2 @click="userView = false"> Requests I Can Vote On </h2>
  <div v-if="userView" v-bind:class="{ active: userView }" class="container">
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
.active {
  color: white;
}

.container {
  margin: 1rem 0rem 4rem 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-gap: .5rem;
}

</style>

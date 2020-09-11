<template>
  <h2 @click="userView = 1"> Campaigns I've Created</h2>
  <h2 @click="userView = 2"> Requests I Can Vote On </h2>
  <h2 @click="userView = 3"> Requests I manage </h2>
  <div v-if="userView === 1" v-bind:class="{ active: userView }" class="container">
    <MyCreatedCampaigns />
  </div>
  <div v-if="userView === 2" class="container">
    <ApproveRequests />
  </div>
  <div v-if="userView === 3" class="container">
    <FinalizeRequests />
  </div>
</template>

<script>
import MyCreatedCampaigns from '@/components/MyCreatedCampaigns.vue';
import ApproveRequests from '@/components/ApproveRequests.vue';
import FinalizeRequests from '@/components/FinalizeRequests.vue';

export default {
  name: 'UserCampaigns',
  computed: {
  },
  data() {
    return {
      userView: 1
    }
  },
  components: {
    MyCreatedCampaigns,
    ApproveRequests,
    FinalizeRequests
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

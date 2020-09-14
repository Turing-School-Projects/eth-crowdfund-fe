<template>
  <h2 @click="userView = 1" v-bind:class="{ active: userView === 1 }"> Campaigns I've Created</h2>
  <h2 @click="userView = 2" v-bind:class="{ active: userView === 2 }"> Requests I Can Vote On </h2>
  <h2 @click="userView = 3" v-bind:class="{ active: userView === 3 }"> Requests I manage </h2>
  <div v-if="userView === 1" v-bind:class="{ active: userView }" class="container">
    <MyCreatedCampaigns />
  </div>
  <div v-if="userView === 2" class="request-catalog">
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
  created() {
    this.$store.dispatch('fetchTodos')
    this.$store.dispatch('fetchFactory')
    this.$store.dispatch('fetchAccountNum')
    this.$store.dispatch('fetchAllCampaigns')
  },
  components: {
    MyCreatedCampaigns,
    ApproveRequests,
    FinalizeRequests
  }
}
</script>

<style scoped lang='scss'>

.active {
  color: white;
}

h2 {
  display: inline-block;
  margin: 2rem 2rem;
  cursor: pointer;
}
.active {
  color: white;
}

.container,
.request-catalog {
  width: 95%;
  height:95%;
  margin-left: 2rem;
}

</style>

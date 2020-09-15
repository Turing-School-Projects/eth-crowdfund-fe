<template>
  <Loading v-if="this.$store.state.loading" />
  <div v-if="!this.$store.state.loading">
    <h2 @click="userView = 1" v-bind:class="{ active: userView === 1 }">Manager</h2>
    <h2 @click="userView = 2" v-bind:class="{ active: userView === 2 }">Contributor</h2>
    <h2>
      <router-link to="/campaigns/new">Create New Booster</router-link>
    </h2>
  </div>

  <div v-if="userView === 1" v-bind:class="{ active: userView }" class="container">
    <MyCreatedCampaigns />
  </div>
  <div v-if="userView === 2" class="request-catalog">
    <ApproveRequests />
  </div>
</template>

<script>
import MyCreatedCampaigns from '@/components/MyCreatedCampaigns.vue';
import ApproveRequests from '@/components/ApproveRequests.vue';
import Loading from '@/components/Loading.vue';

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
    Loading
  }
}
</script>

<style scoped lang='scss'>
@import "../../_variables.scss";

h2 {
  display: inline-block;
  margin: 2rem 2rem;
  cursor: pointer;

  a {
    text-decoration: none;

    &:visited {
      color: $dark-blue
    }
  }
}

.active {
  color: white;
}

.container,
.request-catalog {
  width: 95%;
  height:95%;
  margin: auto;
}

</style>

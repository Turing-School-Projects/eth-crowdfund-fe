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
  methods: {
  },
  created() {
    this.$store.dispatch('fetchTodos')
    this.$store.dispatch('fetchFactory')
    this.$store.dispatch('fetchAccountNum')
    this.$store.dispatch('fetchAllCampaigns')
  },
  computed: {
    campaigns() {
      return this.$store.state.campaigns
    },
    todos() {
      return this.$store.state.todos
    },
    factory() {
      return this.$store.state.factory
    }
  }
}
</script>

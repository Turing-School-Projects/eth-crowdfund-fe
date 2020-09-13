/* eslint-disable vue/no-use-v-if-with-v-for */
<template>
  <Loading v-if="this.$store.state.loading"/>
    <ul
      class="campaigns"
      v-for="campaign in userContributions"
      v-bind:key="campaign.id"
      >
      <request-list
        v-if="!this.$store.state.loading"
        v-bind:campaign="campaign"
        v-on:approval-count="approvalCount"
        v-on:approve-request="approveRequest"
      />
    </ul>
</template>

<script>
import RequestList from "@/ui/RequestContainer.vue"
import Campaign from "../contracts/campaign";
import Loading from "./Loading.vue";

export default {
  name: 'User Contributions',
  props: {
    msg: String
  },
  components: {
    RequestList,
    Loading
  },
  data() {
    return {
      loading: false,
      error: ''
    }
  },
  created() {
    this.$store.dispatch('fetchAccountNum')
    this.$store.dispatch('getUserContribution', this.accountNum)
  },
  computed: {
    accountNum() {
      return this.$store.state.accountNum
    },
    userContributions() {
      return this.$store.state.userContributions
    }
  },
  methods: {
    showContributions() {
      this.$store.dispatch('getUserContribution', this.accountNum)
    },
    /* eslint-disable */
    approveRequest({ address, ethId, requestID }) {
      const payload = { address, ethId, requestID }
      try {
        this.$store.dispatch('approveRequest', payload)
      } catch (error) {
        this.error = { error }
      }
    },
    async approvalCount({address, ethId}) {
        const campaignInstance = await Campaign.at(address);
        const request = await campaignInstance.requests(ethId);
        console.log("How many people have voted", request.approvalCount.toString());
        const voterCount = await campaignInstance.approversCount()
        console.log("How many people can vote", voterCount.toString());
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.campaigns {
  list-style: none;
}
</style>

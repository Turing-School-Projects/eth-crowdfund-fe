<template>
    <ul class="campaigns" v-for="campaign in userContributions" v-bind:key="campaign.id">
      <request-list
        v-bind:campaign="campaign"
        v-on:approval-count="approvalCount"
        v-on:approve-request="approveRequest"
      />
    </ul>
</template>

<script>

// import Loading from './Loading.vue';
import axios from "axios";
import RequestList from "@/ui/RequestContainer.vue"
import Campaign from "../contracts/campaign";
import { VUE_APP_API_URL } from "../env";

export default {
  name: 'User Contributions',
  props: {
    msg: String
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
  data() {
    return {
      loading: false
    }
  },
  components: {
    RequestList
  },
  methods: {
    showContributions() {
      this.$store.dispatch('getUserContribution', this.accountNum)
    },
    /* eslint-disable */
    async approveRequest({ address, ethId, requestID }) {
      this.loading = true;
      const campaignInstance = await Campaign.at(address)
      console.log(campaignInstance)
      const result = await campaignInstance.approveRequest(ethId, { from: this.$store.state.accountNum})
      const request = await campaignInstance.requests(ethId)
      const approvalCount = parseInt(request.approvalCount.toString())
      const voterCount = await campaignInstance.approversCount()
      const voterString = voterCount.toString();
      console.log('approvalCount', approvalCount)
      console.log('voterCount', voterCount)
      if (result && (approvalCount >= parseInt(voterString) / 2)) {
        const resp = await axios.put(`${VUE_APP_API_URL}requests/${requestID}`, {
          approved: "true"
        });
        console.log(resp);
      }
      if(result) {
        this.loading = false;
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

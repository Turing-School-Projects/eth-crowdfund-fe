<template>
    <ul class="user-campaigns" v-for="campaign in userCampaigns" v-bind:key="campaign.id">
      <request-list
        type="manager"
        v-bind:campaign="campaign"
        v-on:finalize="finalizeRequest"
        v-on:delete="deleteCampaign"
        />
    </ul>
</template>

<script>
import axios from "axios";
import RequestList from '../ui/RequestContainer.vue'
import { VUE_APP_API_URL } from "../env";

export default {
  name: 'UserCampaigns',
  components: { RequestList },
  data() {
    return {
      userView: true
    }
  },
  computed: {
    campaigns() {
      return this.$store.state.campaigns
    },
    accountNum() {
      return this.$store.state.accountNum
    },
    userCampaigns() {
      return this.campaigns.filter((campaign) => campaign.manager === this.accountNum)
    }
  },
  methods: {
    async deleteCampaign(campaign) {
      // eslint-disable-next-line no-restricted-globals
      if (confirm(
        `Are you sure you want to delete ${campaign.name}? Any funds remaining in this campaign will be lost.`
      )) {
        await axios.delete(`${VUE_APP_API_URL}campaigns/${campaign.id}`)
        this.$store.commit('DELETE_CAMPAIGN', campaign.id)
      }
    },
    finalizeRequest(payload) {
      this.$store.dispatch('finalizeRequest', payload)
    }
  }
}
</script>

<style scoped lang='scss'>
</style>

<template>
  <div v-if="!loading">
    <h1>Managed Requests</h1>
    <h3>Campaign: Mullets</h3>
    <p>Description:More haircuts</p>
    <p>Amount: 1 Eth</p>
    <button @click="finalizeRequest"> Finalize and Distribute</button>
    <p>Description: Less haircuts</p>
    <p>Amount: 1 Eth</p>
    <button> Finalize This Request</button>
  </div>
  <Loading v-if="loading" />
</template>

<script>
import Campaign from "../contracts/campaign";
import Loading from "./Loading.vue";

export default {
  name: 'FinalizeRequest',
  props: {
    msg: String
  },
  data() {
    return {
      loading: false
    }
  },
  components: {
    Loading
  },
  methods: {
    /* eslint-disable */
    async finalizeRequest() {
      this.loading = true
      const campaignInstance = await Campaign.at("0x8378944D41237C286592a2f7510BD48C1c3dc8F0")
      const result = await campaignInstance.finalizeRequest(1, { from: this.$store.state.accountNum, gas: "1000000"})
      const request = await campaignInstance.requests(1)
      console.log('request', request)
      console.log('result', result)
      
      if(result) {
        this.loading = false;
      }
    }
  },
  created() {
    // Get all campaigns I have voting power
    // From Antonio
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

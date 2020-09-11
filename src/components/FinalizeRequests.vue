<template>
  <div class="hello">
    <h1>Managed Requests</h1>
    <h3>Campaign: Mullets</h3>
    <p>Description:More haircuts</p>
    <p>Amount: 1 Eth</p>
    <button @click="finalizeRequest"> Finalize and Distribute</button>
    <p>Description: Less haircuts</p>
    <p>Amount: 1 Eth</p>
    <button> Finalize This Request</button>
  </div>
</template>

<script>
import Campaign from "../contracts/campaign";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    /* eslint-disable */
    async finalizeRequest() {
      const campaignInstance = await Campaign.at("0xcd579f2539a1Ed7753Dd74D065656680C93d7737")
      const result = await campaignInstance.finalizeRequest(1, { from: this.$store.state.accountNum, gas: "1000000"})
      const request = await campaignInstance.requests(1)
      console.log('request', request)
      console.log('result', result)
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

<template>
  <div class="user-campaigns" v-for="campaign in campaigns" v-bind:key="campaign.id">
      <section class="campaign-card">
        <section>
        <div class="img-div"><img :src=campaign.image /></div>
        </section>
        <div>
          <div class="campaign-info">
            <h1> {{campaign.name}}</h1>
            <p>{{campaign.description}}</p>
          </div>
          <div class="requests"><b>Total Request:</b> {{campaign.requests.length}}</div>
            <div class="requests" v-for="request in campaign.requests" v-bind:key="request.id">
            <div class="">
              Description: {{request.description}}
            </div>
            <div class="">
              Value: {{request.value}}
            </div>
            <div class="">
            <!-- {{ approvalCount(campaign.address, request.eth_id) }} -->
              <button type="button" @click="approvalCount(campaign.address, request.eth_id)">
              approvalCount</button>
            </div>
            <button @click="finalizeRequest(campaign.address, request.eth_id)">Finalize and Distribute</button>
          </div>
        </div>
      </section>
      <router-link
            style="text-decoration: none;"
            :to="{ name: 'Campaign Request',
            params: {id: campaign.id, address: campaign.address}}">
      <button>Create A Request</button>
      </router-link>
    </div>
</template>

<script>
import axios from "axios";
import Campaign from "../contracts/campaign";
// import Loading from "./Loading.vue";

export default {
  name: 'FinalizeRequest',
  data() {
    return {
      loading: false,
      campaigns: []
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    // Loading
  },
  methods: {
    /* eslint-disable */
    async finalizeRequest(address, ethId) {
      this.loading = true
      const campaignInstance = await Campaign.at(address)
      const result = await campaignInstance.finalizeRequest(ethId, { from: this.$store.state.accountNum, gas: "1000000"})
      const request = await campaignInstance.requests(ethId)
      console.log('request', request)
      console.log('result', result)
      
      if(result) {
        this.loading = false;
      }
    },
    async approvalCount(address, ethId) {
        const campaignInstance = await Campaign.at(address);
        const request = await campaignInstance.requests(ethId);
        console.log("How many people have voted", request.approvalCount.toString());
        const voterCount = await campaignInstance.approversCount()
        console.log("How many people can vote", voterCount.toString());
    },
  },
  async created() {
    const unfilteredCampaigns = await axios.get('http://localhost:3000/api/v1/campaigns/manager/0xa21b4eEa9261eB71D54c1694C7C7e732cCDd9825')
    const filteredCampaigns = unfilteredCampaigns.data.filter(campaign => campaign.requests.length)
    console.log(filteredCampaigns)
    this.campaigns = filteredCampaigns
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.user-campaigns {
  margin-top: 5vh;
  background: whitesmoke;
  height: 60vh;
  width: 40vw;
  box-shadow: 1px 1px 3px grey;

}

img {
  width: 100%;
  height: 100%;
  align-self: flex-end;
}

router-link {
 align-self: flex-end;
}

button {
  margin-top: -5vh;
}

.campaign-card {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  height: 55vh;
  width: 40vw;
  box-sizing: border-box;
  transform: scale(1);
  color: black;
}

.img-div {
  height: 30vh;
  width: 20vw;
  background: aqua;
}
</style>

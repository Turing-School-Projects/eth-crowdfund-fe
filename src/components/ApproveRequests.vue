<template>
    <div class="user-campaigns" v-for="campaign in userContributions" v-bind:key="campaign.id">
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
            <button @click="approveRequest(campaign.address, request.eth_id)">Approve Request</button>
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

// import Loading from './Loading.vue';
import Campaign from "../contracts/campaign";
import web3 from "../contracts/web3";

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
  data() {
    return {
      loading: false
    }
  },
  components: {
    Loading
  },
  methods: {
    showContributions() {
      this.$store.dispatch('getUserContribution', this.accountNum)
    },
    /* eslint-disable */
    async approveRequest() {
      this.loading = true;
      const campaignInstance = await Campaign.at("0x8378944D41237C286592a2f7510BD48C1c3dc8F0")
      const accounts = await web3.eth.getAccounts();
      console.log(campaignInstance)
      const result = await campaignInstance.approveRequest(1, { from: this.$store.state.accountNum})
      const request = await campaignInstance.requests(1)
      console.log('result', result)
      console.log('request', request)

      if(result) {
        this.loading = false;
      }
    },
    async approvalCount(address, ethId) {
        const campaignInstance = await Campaign.at(address);
        console.log('campaignInstance', campaignInstance)
        const request = await campaignInstance.requests(ethId);
        console.log(request);
    }
  },
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

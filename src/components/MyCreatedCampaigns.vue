<template>
    <div class="user-campaigns" v-for="campaign in userCampaigns" v-bind:key="campaign.id">
      <section class="campaign-card">
        <section>
        <div class="img-div"><img :src=campaign.image /></div>
        <div>
          <div class="campaign-info">
            <h1> {{campaign.name}}</h1>
            <p>{{campaign.description}}</p>
          </div>
        </div>
        </section>
        <div class="requests"><b>Total Request:</b> {{campaign.requests.length}}</div>
        <router-link
          style="text-decoration: none;"
          :to="{ name: 'Campaign Request',
          params: {id: campaign.id, address: campaign.address}}">
          Create A Request
        </router-link>
        <a href="javascript:;" v-on:click="deleteCampaign(campaign)">Delete</a>
      </section>
    </div>
</template>

<script>
import axios from "axios";
import { VUE_APP_API_URL } from "../env";

export default {
  name: 'UserCampaigns',
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
    }
  },
  data() {
    return {
      userView: true
    }
  }
}
</script>

<style scoped lang='scss'>
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

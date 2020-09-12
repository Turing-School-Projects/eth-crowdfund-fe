<template>
    <div class="user-campaigns" v-for="campaign in userCampaigns" v-bind:key="campaign.id">
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
        </div>
      <router-link
            style="text-decoration: none;"
            :to="{ name: 'Campaign Request',
            params: {id: campaign.id, address: campaign.address}}">
      <button>Create A Request</button>
      </router-link>
      </section>
    </div>
</template>

<script>
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
}

img {
  width: 100%;
  height: 100%;
  align-self: flex-end;
}

router-link {
 align-self: flex-end;
}

.campaign-card {
  background: whitesmoke;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  box-shadow: 1px 1px 3px grey;
  height: 60vh;
  width: 40vw;
  box-sizing: border-box;
  transform: scale(1);
  color: black;
  &:hover {
    transform: scale(1.02);
    box-shadow: 2px 2px 10px black;
    transition: all 0.25s;
    outline: 1px solid black;
  }
}

.img-div {
  height: 30vh;
  width: 20vw;
  background: aqua;
}

</style>

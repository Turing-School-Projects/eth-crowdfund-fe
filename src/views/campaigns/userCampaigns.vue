<template>
  <div class="container">
    <div class="user-campaigns" v-for="campaign in userCampaigns" v-bind:key="campaign.id">
      <section class="campaign-card">
        <section>
        <div class="img-div"><img :src=campaign.image /></div>
        <div class="campaign-info">
          <h1> {{campaign.name}}</h1>
          <p>{{campaign.description}}</p>
        </div>
        </section>
        <div class="requests"><b>Total Request:</b> {{campaign.requests.length}}</div>
        <router-link
          style="text-decoration: none;"
          :to="{ name: 'Campaign Request',
          params: {id: campaign.id, address: campaign.address}}">
          Create A Request
        </router-link>
      </section>
    </div>
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

.container {
  margin: 1rem 0rem 4rem 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-gap: .5rem;
}

.campaign-card {
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

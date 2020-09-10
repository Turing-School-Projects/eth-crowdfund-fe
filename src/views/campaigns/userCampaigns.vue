<template>
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
    </section>
    <router-link
      style="text-decoration: none;"
      :to="{ name: 'Campaign Request',
      params: {id: campaign.id, address: campaign.address}}">
      Create A Request
    </router-link>
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
  height: 60vh;
  width: 45vw;
}
</style>

<template>
  <div>
    <section class="campaign-card">
      <h1> {{campaign.title}}</h1>
      <router-link :to="{ name: 'Single Campaign', params: {address: campaign.address} }">
        <div class="img-div">Image goes here</div>
      </router-link>
      <p>{{campaign.description}}</p>
    </section>
  </div>
</template>

<script>

export default {
  name: 'CampaignCard',
  props: ["campaign"]
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.campaign-card {
  border: 1px solid black;
  background: #42b983;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-div {
  height: 20vh;
  width: 40vw;
  background: aqua;
}

</style>

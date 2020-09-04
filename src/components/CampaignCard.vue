<template>
  <div>
    <section class="campaign-card">
      <h1> {{campaign.title}}</h1>
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
}

</style>

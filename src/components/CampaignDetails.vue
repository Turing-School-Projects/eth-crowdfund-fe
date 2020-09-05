<template>
  <section>
    <h3> Campaing Title: </h3>
    <h2>{{ campaign.title }}</h2>
    <h3> Description: </h3>
    <h4>{{ campaign.description }}</h4>
    <h3> Minimum Contribution </h3>
    <h1>{{ campaign.minContribution }}</h1>
    <p>There is some information missing and this has no styles </p>
  </section>
</template>

<script>

export default {
  name: 'CampaignDetails',
  props: ['address'],
  computed: {
    campaign() {
      return this.$store.getters.getSingleCampaign(Number(this.address))
    }
  }
}
</script>

<style scoped lang='scss'>
</style>

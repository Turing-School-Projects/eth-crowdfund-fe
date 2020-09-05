<template>
  <section>
    <h2>{{ $route.params.address }}</h2>
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

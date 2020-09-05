<template>
  <section>
    <h2>{{ $route.params.address }}</h2>
  </section>
</template>

<script>

export default {
  name: 'CampaignDetails',
  props: ['address']
}
</script>

<style scoped lang='scss'>
</style>

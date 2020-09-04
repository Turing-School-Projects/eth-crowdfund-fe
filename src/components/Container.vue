<template>
  <div>
    <section class="campaign-container">
      <h1> Campaign Container</h1>
      <div v-for="campaign in campaigns" v-bind:key="campaign.id">
        <CampaignCard v-bind:campaign="campaign" />
      </div>
    </section>
  </div>
</template>

<script>

import CampaignCard from '@/components/CampaignCard.vue';

export default {
  name: 'Container',
  props: ["campaigns"],
  components: {
    CampaignCard
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div>
    <div class="about">
    </div>
    <h2>Top Fundraisers</h2>
    <section class="campaign-container">
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

  .campaign-container {
    margin: 1rem 0rem 4rem 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: .5rem;
  }

</style>

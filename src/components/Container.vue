<template>
  <div>
    <div class="about">
    </div>
    <h2>Top Fundraisers</h2>
    <button @click="previousPage">Previous</button>
    <button @click="nextPage">Next</button>
    <section class="campaign-container">
      <div v-for="campaign in campaigns.slice(startIndex, startIndex + 4)" v-bind:key="campaign.id">
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
  data() {
    return {
      visibleCampaigns: [],
      startIndex: 0,
      endIndex: 4
    }
  },
  methods: {
    nextPage() {
      if (this.startIndex < this.campaigns.length - 4) {
        this.startIndex += 1
      }
    },
    previousPage() {
      if (this.startIndex > 0) {
        this.startIndex -= 1
      }
    }
  },
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

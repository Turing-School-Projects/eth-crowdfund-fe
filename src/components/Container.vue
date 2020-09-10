<template>
  <div>
    <div class="about">
    </div>
    <div class="container-header">
      <h2>Active Campaigns</h2>
      <div class= "button-section">
        <button :disabled="startIndex === 0" @click="previousPage">⇦</button>
        <button :disabled="startIndex + 4 >= campaigns.length" @click="nextPage">⇨</button>
      </div>
    </div>
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
        this.startIndex += 4
      }
    },
    previousPage() {
      if (this.startIndex > 0) {
        this.startIndex -= 4
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

  .container-header {
    display: flex;
    width: 93vw;
    justify-content: space-between;
    margin: auto;
    margin-top: 2vh;
    margin-bottom: 0;
    border-bottom: 1px solid black;
  }

  button {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    font-size: 20px;
    border: 1px solid black;
    margin: .1rem;
  }

  h2 {
    margin-left: 1.5vw;
    margin-bottom: 0;
  }

  .button-section {
    margin-top: auto;
    margin-bottom: .5rem;
  }

  .campaign-container {
    margin: 2rem 0rem 4rem 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: .5rem;
  }

</style>

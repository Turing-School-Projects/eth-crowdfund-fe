<template>
  <form class='new-campaign-form'
    @submit.prevent='addCampaign'
  >
    <input v-model='title' placeholder='Campaign Title' />
    <input v-model='minContribution' placeholder='Minimun Wei Contribution' />
    <textarea v-model='description' placeholder='Describe your Campaign...'></textarea>
    <button type='submit' > Submit </button>
  </form>
</template>

<script>
export default {
  name: 'NewCampaignForm',
  data() {
    return {
      title: '',
      description: '',
      minContribution: null
    }
  },
  methods: {
    addCampaign() {
      const newCampaign = {
        title: this.title,
        description: this.description,
        minContribution: this.minContribution
      }
      this.$store.commit('ADD_CAMPAIGN', newCampaign)
    }
  }
}
</script>

<style lang='scss'>

</style>

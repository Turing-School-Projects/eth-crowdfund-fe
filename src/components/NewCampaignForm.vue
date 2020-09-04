<template>
  <form>
    <input v-model='title' placeholder='Campaign Title' />
    <input v-model='minContribution' placeholder='Minimun Wei Contribution' />
    <textarea v-model='description' placeholder='Describe your Campaign...'></textarea>
  </form>
</template>

<script>
export default {
  name: 'NewCampaignForm',
  data() {
    return {
      title: '',
      description: '',
      minContribution: 0
    }
  }
}
</script>

<style lang='scss'>

</style>

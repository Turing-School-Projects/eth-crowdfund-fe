<template>
  <div class="new-campaign">
    <div class="new-campaign-form">
      <h1> Create a New Campaign </h1>
      <div class='new-campaign-form'>
        <new-campaign-form></new-campaign-form>
      </div>
    </div>
    <router-link to='/'>Back Home</router-link>
  </div>
</template>

<script>
import NewCampaignForm from '@/components/NewCampaignForm.vue'

export default {
  name: 'NewCampaign',
  components: {
    NewCampaignForm
  }
}
</script>

<style lang='scss'>
.new-campaign-form {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>

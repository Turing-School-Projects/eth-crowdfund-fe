<template>
  <div class="new-campaign">
    <div class="new-campaign-form">
      <h1> A form to create a new campaign would go here </h1>
      <new-campaign-form></new-campaign-form>
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

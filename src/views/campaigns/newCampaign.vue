<template>
  <div class="new-campaign">
    <div class="new-campaign-form">
      <div class='new-campaign-form'>
        <new-campaign-form></new-campaign-form>
      </div>
    </div>
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

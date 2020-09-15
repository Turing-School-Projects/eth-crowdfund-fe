<template>
  <h1  v-if="!this.$store.state.loading"> Create a New Booster </h1>
  <form v-if="!this.$store.state.loading" @submit.prevent='addCampaign'>
    <label>Booster Title</label>
      <input v-model='title' placeholder='Ex: Arc Thrift' />
    <label>Enter Image Url</label>
      <input v-model='imageUrl' placeholder='Ex: https://picsum.photos/200/300' />
    <label>Minimum Ether Contribution</label>
      <ether-input v-model:value="minContribution" class='ether-input longer'/>
    <label>Describe your Booster </label>
      <textarea v-model='description' placeholder='Ex: Help out a Denver-area store serving our community'></textarea>
    <basicButton class="submit" type='submit' text='Create Campaign' />
  <div v-if="this.userMessage">Please fill out all inputs</div>
  <div v-if="this.error">{{this.error}}</div>
  </form>
    <Loading v-if="this.$store.state.loading" />
</template>

<script>
import Loading from '@/components/Loading.vue';
import basicButton from '@/ui/basicButton.vue'
import etherInput from '@/ui/etherInput.vue'

export default {
  name: 'NewCampaignForm',
  data() {
    return {
      title: '',
      description: '',
      minContribution: 0,
      userMessage: false,
      email: '',
      error: null,
      loading: false,
      imageUrl: ''
    }
  },
  methods: {
    addCampaign() {
      const newCampaign = {
        title: this.title,
        description: this.description,
        minContribution: this.minContribution
      }
      this.createCampaign()
      this.$store.commit('ADD_CAMPAIGN', newCampaign)
    },
    async createCampaign() {
      if (!this.title && !this.description && !this.minContribution && !this.imageUrl) {
        this.userMessage = true
        return
      }
      const payload = {
        title: this.title,
        description: this.description,
        imageUrl: this.imageUrl,
        minContribution: this.minContribution.toString()
      }
      try {
        const result = await this.$store.dispatch('createCampaign', payload)
        if (result) {
          this.$router.push('/campaigns/user')
        }
      } catch (error) {
        console.log(error)
      }
    },
    clearInputs() {
      this.title = ''
      this.description = ''
      this.imageUrl = ''
      this.minContribution = null
    }
  },
  computed: {
    factory() {
      return this.$store.state.factory
    },
    accountNum() {
      return this.$store.state.accountNum
    },
    campaign() {
      return this.$store.state.campaign
    }
  },
  components: {
    Loading,
    basicButton,
    etherInput
  }
}
</script>

<style lang='scss'>
@import '../_variables.scss';

form {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 65vh;
  margin-top: 0.8rem;
  padding: 2.1rem 0;
  width: 65vw;
  background: lighten($sky-blue, 20%);
  border: 2px solid black;

  label {
    align-self: flex-start;
    margin-left: 7.4rem;
  }

  input {
    height: 2em;
    width: 43vw;
    margin-bottom: 2vh;
    margin-left: 1.1rem;
  }

  .ether-input {
    justify-self: center;
    height: 2em;
    width: 43vw;
    padding-bottom: 1rem;
  }

  textarea {
    resize: none;
    height: 4rem;
    margin-left: 1.2rem;
    width: 43vw;
  }

  .submit {
    width: 40vw;
    height: 1.8rem;
    margin: 1.3rem 0 0.3rem 1.3rem;
  }
}
</style>

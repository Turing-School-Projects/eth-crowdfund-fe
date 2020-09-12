<template>
  <h1> Edit Campaign</h1>
  <form @submit.prevent='updateCampaign'>
    <label>Campaign Title</label>
    <input v-model='title' >
    <label>Image Url</label>
    <input v-model='imageUrl'/>
    <label>Describe your campaign</label>
    <textarea v-model='description'></textarea>
    <button type='submit' > Update Campaign </button>
  <div v-if="this.userMessage">Please fill out all inputs</div>
  <div v-if="this.error">{{this.error}}</div>
  </form>
</template>

<script>
import axios from "axios";
import { VUE_APP_API_URL } from "../env";

export default {
  name: 'EditCampaignForm',
  props: ['address'],
  data() {
    return {
      title: this.$store.getters.getSingleCampaign(this.address).name,
      description: this.$store.getters.getSingleCampaign(this.address).description,
      userMessage: false,
      error: null,
      imageUrl: this.$store.getters.getSingleCampaign(this.address).image,
      id: this.$store.getters.getSingleCampaign(this.address).id
    }
  },
  methods: {
    updateCampaign() {
      const editedCampaign = {
        title: this.title,
        description: this.description,
        minContribution: this.imageUrl
      }
      this.editCampaign()
      this.$store.commit('EDIT_CAMPAIGN', editedCampaign)
    },
    async editCampaign() {
      if (!this.title && !this.description && !this.imageUrl) {
        this.userMessage = true
        return
      }
      axios.put(`${VUE_APP_API_URL}campaigns/${this.id}`, {
        name: this.title,
        description: this.description,
        image: this.imageUrl
      })
        .then((resp) => console.log(resp))
        // eslint-disable-next-line no-return-assign
        .catch((error) => this.error = error.message)
      this.clearInputs()
      this.$router.push(`/campaigns/user`)
    },
    clearInputs() {
      this.title = ''
      this.description = ''
      this.imageUrl = ''
      this.minContribution = null
    }
  },
  computed: {
    campaign() {
      return this.$store.getters.getSingleCampaign(this.address)
    }
  },
  components: {
    // Loading
  }
}
</script>

<style lang='scss'>
@import '../_variables.scss';
form {
  // @include beautifyBorder(.8rem, $white, $gray, $bg_2, $dark-blue, $bg_1, $blue)
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 70vh;
  width: 90vw;
  border: 3px solid rgb(80, 80, 80);
  background: radial-gradient($light-green 45%, $green 98%);

  label {
    align-self: flex-start;
    margin-left: 17.5vw;
  }

  input {
    height: 2em;
    width: 55vw;
    margin-bottom: 2vh;
  }

  textarea {
    resize: none;
    height: 12em;
    width: 55vw;
  }

  button {
    width: 45vw;
    height: 2em;
  }
}
</style>

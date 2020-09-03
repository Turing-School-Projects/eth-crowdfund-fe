<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      campaigns: [
        {
          title: 'Buy a well',
          description: 'help us buy a well',
          id: 1
        },
        {
          title: 'Buy a well',
          description: 'help us buy a well',
          id: 1
        }
      ]
    }
  }
}
</script>

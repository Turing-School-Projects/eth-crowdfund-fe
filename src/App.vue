<template>
  <h2 class='container'>Hello World</h2>
</template>

<script lang="js">
import Vue from "vue";

export default Vue.extend({
  name: 'app',
  data() {
    return {
      bundler: "Parcel"
    };
  }
});
</script>

<style lang="scss" scoped>
.container {
  color: green;
}
</style>

<template>
  <div class="about">
    <h1>This is under construction.</h1>
    <SideBar class='side-bar' />
  </div>
</template>

<script>
import SideBar from "@/components/AboutSideBar.vue"

export default {
  name: 'About',
  components: {
    SideBar
  }
}
</script>

<style lang='scss'>
@import "../_variables.scss";

.side-bar {
  background-color: $light-green;
}
</style>

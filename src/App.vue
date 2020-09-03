<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Campaigns</router-link> |
      <router-link to="/campaigns/0948dx83ds">Single Campaign</router-link> |
      <router-link to="/campaigns/new">New Campaign</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      campaigns: [{ name: 'Buy a well' }]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

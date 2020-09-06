<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Campaigns</router-link> |
      <router-link to="/campaigns/new">New Campaign</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
body {
  margin: 0;
}

#nav {
  padding: 30px;
  background: #42b983;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: white;
      text-shadow: 1px black;
    }
  }
}
</style>

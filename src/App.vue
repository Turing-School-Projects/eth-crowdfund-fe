<template>
  <div id="app">
    <div id="nav">
      <div class= "logo-section">
        <img class="logo" src="@/assets/etho-boost-logo.png"/>
        <h1>Etho-Boost</h1>
      <div class="links-section">
        <router-link to="/">Campaigns</router-link>
        <router-link to="/campaigns/new"> Create a New Campaign</router-link>
        <router-link to="/campaigns/user">Your Campaigns</router-link>
      </div>
      </div>
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

.links-section {
  align-self: center;
  margin: auto;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {

  margin: 0;
  background: url(
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmci" +
  "IHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1Ii" +
  "BmaWxsPSIjOWU5ZTllIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2" +
  "Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIH" +
  "N0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=");
}

.logo {
  height: 9vh;
}

.logo-section {
  text-align: left;
  height: 10vh;
  display: flex;

  h1 {
    font-family: 'Racing Sans One', cursive;
    font-size: 35px;
  }
}
#nav {
  padding: 30px;
  background: #42b983;
  border-bottom: 1px solid black;
  a {
    font-weight: bold;
    color: #2c3e50;
    align-self: center;
    margin: 0em 3rem;
    font-size: 20px;
    text-decoration: none;
    text-shadow: 1px 1px solid black;
    &.router-link-exact-active {
      color: white;
      text-shadow: 1px black;
    }
  }
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <div class= "logo-section">
        <router-link to='/'>
          <img class="logo" src="@/assets/etho-boost-logo.png"/>
          <h1>Etho-Boost</h1>
        </router-link>
      </div>
      <div class="links-section">
        <router-link to="/">Campaigns</router-link>
        <router-link to="/campaigns/new"> Create New Campaign</router-link>
        <router-link to="/campaigns/user">Your Campaigns</router-link>
        <router-link to='/about'>About</router-link>
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

#nav {
  padding: .8em;
  background: #42b983;
  height: 5rem;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 21vw 79vw;

  .logo-section {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding-left: 0.8rem;
    height: 4.5rem;
    width: 25vw;

    a {
      padding: 0px;
      margin: 0px;
      text-decoration: none;
    }

    .logo {
      align-self: flex-start;
      height: 2.7rem;
    }

    h1 {
      display: inline;
      color: #2c3e50;
      font-family: 'Racing Sans One', cursive;
      font-size: 24px;
      padding: 0px;
    }
  }

  .links-section {
    a {
      font-weight: bold;
      color: #2c3e50;
      justify-self: end;
      align-self: end;
      margin: 0em 1rem;
      font-size: 20px;
      text-decoration: none;
      text-shadow: 1px 1px solid black;
      &.router-link-exact-active {
        color: white;
        text-shadow: 1px black;
      }
    }
  }
}
</style>

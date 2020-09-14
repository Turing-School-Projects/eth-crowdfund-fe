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
@import "variables";

.links-section {
  align-self: center;
  margin: auto;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $dark-blue;
}

body {
  @include pixelate(3px, $bg_2, $bg_1);
  margin: 0;
}

#nav {
  padding: .3rem;
  border-bottom: .2rem solid black;
  background: linear-gradient($sky-blue 35%, $sky 70%);
  height: 5rem;
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
      height: 3.5rem;
    }

    h1 {
      display: inline;
      color: #2c3e50;
      font-family: 'Racing Sans One', cursive;
      font-size: 35px;
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

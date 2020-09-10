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
@mixin pixelate($size, $base, $accent: rgba(0,0,0,.25)) {
  background: $base;
  background-image:
    linear-gradient(45deg,
    $accent 25%, transparent 0,
    transparent 75%, $accent 0),
    linear-gradient(45deg,
    $accent 25%, transparent 0,
    transparent 75%, $accent 0);
  background-position: 0 0, $size $size;
  background-size: 2*$size 2*$size;
}

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
  @include pixelate(3px, #bdae93, #a89984)
  margin: 0;
}

#nav {
  padding: .8em;
  background: #689d6a;
  height: 5rem;
  border-bottom: 2px solid #2c3e50;
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

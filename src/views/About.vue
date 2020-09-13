<template>
  <div class="about">
    <section class='tabs'>
      <button @click="view = 'how-to'" v-bind:class="{ active: view === 'how-to' }">How to?</button>
      <button @click="view = 'why'" v-bind:class="{ active: view === 'why' }">Why Blockchain?</button>
      <button @click="view = 'technologies'" v-bind:class="{ active: view === 'technologies' }">Technologies</button>
      <button @click="view = 'contributors'" v-bind:class="{ active: view === 'contributors' }">Contributors</button>
    </section>
    <section class="tab-view">
    <section v-if="view === 'how-to'" v-bind:class="{ active: userView }">
      <h2>Where to begin?</h2>
    </section>
    <section v-if="view === 'why'">
      <h2>Why use Blockchain?</h2>
    </section>
    <section v-if="view === 'technologies'" class='about-content'>
      <h2>Turing School of Software & Design Capstone Project</h2>
      <p>The final project at Turing school is a full-stack venture to create an app
        around an idea pitched by one of the students. Our goal was to develop a
        crowdfunding dApp that made use of blockchain technology.
      </p><p>
        We had two weeks to
        wireframe a front-end to interact with the blockchain and a back-end to supplement
        it. We decided to use <b>Python</b> (+ ...other technologies) for our database and
        <b>Vue</b> (+ ...other technologies) for our front-end. To interact with the blockchain,
        the truffle framework/environment was used.<b>*None of these technologies were
        explicitly taught at Turing*</b>
      </p>
      <h3>Why use blockchain?</h3>
      <h3>Working wiht the blockchain</h3>
      <h3>Back-End Technologies</h3>
      <h3>Front-End Technologies</h3>
    </section>
    <section v-if="view === 'contributors'">
      <SideBar class='sidebar'/>
    </section>
    </section>
    </div>
</template>

<script>
import SideBar from "@/components/AboutSideBar.vue"

export default {
  name: 'About',
  components: {
    SideBar
  },
  data() {
    return {
      view: 'how-to'
    }
  }
}
</script>

<style lang='scss'>
@import "../_variables.scss";

.about {
  margin: auto;
  margin-top: 3rem;
  display: grid;
  grid-template-rows: 2rem 21rem;
  width: 90vw;

  .tabs {
    height: 3rem;
    padding-bottom: 0;
  }

  .tab-view {
    border: 3px solid black;
  }
}
</style>

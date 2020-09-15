<template>
  <div class="about">
    <section class='tabs'>
      <div @click="view = 'how-to'" v-bind:class="{ active: view === 'how-to' }">How
        to?</div>
      <div @click="view = 'why'" v-bind:class="{ active: view === 'why' }">Why
        use EthoBoost?</div>
      <div @click="view = 'technologies'" v-bind:class="{ active: view === 'technologies'
        }">Technologies</div>
      <div @click="view = 'contributors'" v-bind:class="{ active: view ===
        'contributors' }">Contributors</div>
    </section>
    <section class="tab-view">
    <section v-if="view === 'how-to'" v-bind:class="{ active: userView }">
      <HowTo />
    </section>
    <section v-if="view === 'why'">
      <Why />
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
      <Contributors class='sidebar'/>
    </section>
    </section>
    </div>
</template>

<script>
import Contributors from "@/components/About/Contributors.vue"
import HowTo from "@/components/About/howTo.vue"
import Why from "@/components/About/why.vue"

export default {
  name: 'About',
  components: {
    Contributors,
    HowTo,
    Why
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
  display: flex;
  flex-flow: column;
  width: 90vw;
}

.tabs > div {
  position: relative;
  display: inline-block;
  padding: .4em 1em 0;
  margin-bottom: .3em;
}

.tabs > div::before {
  content: '';
  position: absolute;
  top: 0; right: -13px; bottom: 0; left: -13px;
  z-index: -1;
  background: #ccc;
  background-image: linear-gradient(
                      hsla(0,0%,100%,.6),
                      hsla(0,0%,100%,0));
  border: 1px solid rgba(0,0,0,.4);
  border-bottom: none;
  border-radius: 0 .15em white inset;
  transform: scaleY(1.3) perspective(.5em) rotateX(5deg);
  transform-origin: bottom;
  height: 2rem;
}

  .tab-view {
    border: 3px solid black;
    background: #ccc;
  }
</style>

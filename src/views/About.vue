<template>
  <div class="about">
    <section class='tabs' arial-label='about tabs'>
      <div class="tab" @click="view = 'how-to'" v-bind:class="{ active: view === 'how-to' }">How
        to?</div>
      <div class="tab" @click="view = 'why'" v-bind:class="{ active: view === 'why' }">Why
        Blockchain?</div>
      <div class="tab" @click="view = 'technologies'" v-bind:class="{ active: view === 'technologies'
        }">Technologies</div>
      <div class="tab" @click="view = 'contributors'" v-bind:class="{ active: view ===
        'contributors' }">Contributors</div>
      <div class="tab" @click="view = 'video'" v-bind:class="{ active: view ===
        'contributors' }">Video</div>
    </section>
    <section class="tab-view">
    <section v-if="view === 'how-to'">
      <HowTo />
    </section>
    <section v-if="view === 'why'">
      <Why />
    </section>
    <section v-if="view === 'technologies'">
      <Technologies />
    </section>
    <section v-if="view === 'contributors'">
      <Contributors />
    </section>
    <section v-if="view === 'video'">
     <iframe
     width="711"
     height="400"
     src="https://www.youtube.com/embed/IsXvoYeJxKA"
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowfullscreen></iframe>
    </section>
    </section>
    </div>
</template>

<script>
import Contributors from "@/components/About/Contributors.vue"
import HowTo from "@/components/About/howTo.vue"
import Why from "@/components/About/why.vue"
import Technologies from "@/components/About/Technologies.vue"

export default {
  name: 'About',
  components: {
    Contributors,
    HowTo,
    Why,
    Technologies
  },
  data() {
    return {
      view: 'video'
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
  background: $bg_1;
  background-image: linear-gradient(
                      hsla(0,0%,100%,.3),
                      hsla(0,0%,100%,0));
  border: 1px solid rgba(0,0,0,.4);
  border-bottom: none;
  border-radius: 0 .15em white inset;
  transform: scaleY(1.3) perspective(.5em) rotateX(5deg);
  transform-origin: bottom;
  height: 2rem;
}

.tabs > .active::before {
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
  transform: scaleY(1.5) perspective(.5em) rotateX(5deg);
  transform-origin: bottom;
  height: 2rem;
}

.tab-view {
  border: 3px solid black;
  background: #ccc;
  height: 45%;
}
</style>

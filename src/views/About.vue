<template>
  <div class="about">
    <SideBar class='sidebar'/>
    <section class='about-content'>
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

.about {
  display: grid;
  margin-top: 3rem;
  grid-template-columns: 1fr 2fr;

  .sidebar {
    margin-right: 0.3rem;
    width: 13rem;
  }

  .about-content {
    @include beautifyBorder(.3rem, $light-green, $green, $bg_2, $dark-purple, $bg_1, $blue,
    0/ 0.8em 0.8em)
    margin-left: 0rem;
    margin-right: 1.3rem;
    color: $black;
    h2, h3, b {
      color: $dark-purple;
    }
  }
}
</style>

<template>
  <section class='about-content'>
    <h2>Turing School of Software & Design Capstone Project</h2>
    <div class="back-end">
      <h3>Back-End Technologies</h3>
    </div>
    <div class="front-end">
      <h3>Front-End Technologies</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Technologies'
}
</script>

<style lang='scss' scoped>
.about-content {
  height: 25rem;
  display: grid;
  grid-template-rows: 3rem auto;
  grid-template-areas:
    "title title"
    "BE FE";

  h2 {
    grid-area: title;
    margin: .3rem;
  }

  .back-end {
    grid-area: BE;
  }

  .front-end {
    grid-area: FE;
  }
}
</style>

<template>
  <section class='about-content'>
    <h2>Turing School of Software & Design Capstone Project</h2>
    <div class="back-end">
      <h3>Back-End Technologies</h3>
      <div class="tech-list">
        <b> Language:</b> Python
      </div>
      <div class="tech-list">
        <b> Framework:</b> Flask
      </div>
      <div class="tech-list">
        <b> Database:</b> PostgreSQL/SQLAlchemy
      </div>
      <div class="tech-list">
        <b> Testing:</b> pytest
      </div>
      <div class="tech-list">
        <b> Continuous Integration:</b> TravisCI
      </div>
    </div>
    <div class="front-end">
      <h3>Front-End Technologies</h3>
      <div class="tech-list">
        <b> Languages:</b> Javascript, HTML, SCSS
      </div>
      <div class="tech-list">
        <b> Framework:</b> Vue.js
      </div>
      <div class="tech-list">
        <b> Testing:</b> Jest
      </div>
      <div class="tech-list">
        <b> Continuous Integration:</b> TravisCI
      </div>
    </div>
    <div class="blockchain">
      <h3>Blockchain technologies</h3>
        <div class="tech-list">
          <b>Platform:</b> Ethereum
        </div>
        <div class="tech-list">
          <b>Language:</b> Solidity
        </div>
        <div class="tech-list">
          <b>Framework:</b> Truffle
        </div>
        <div class="tech-list">
          <b>Testing:</b> Mocha, Ganache
        </div>
        <div class="tech-list">
          <b>Libraries:</b> Web3.js, Web3.py
        </div>
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
    "title title title"
    "BE FE BC";

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

  .blockchain{
    grid-area: BC;
  }
  .tech-list {
    margin-bottom: 15px;
  }
}
</style>

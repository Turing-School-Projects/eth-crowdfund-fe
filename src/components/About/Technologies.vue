<template>
  <section class='about-content'>
    <h2>Turing School of Software & Design Capstone Project</h2>
    <div class="back-end">
      <h3>Back-End Technologies</h3>
        <b> Language:</b> Python <br><br>
        <b> Framework:</b> Flask <br><br>
        <b> Database:</b> PostgreSQL/SQLAlchemy <br><br>
        <b> Testing:</b> pytest <br><br>
        <b> Continuous Integration:</b> TravisCI <br><br>
    </div>
    <div class="front-end">
      <h3>Front-End Technologies</h3>
      <b> Languages:</b> Javascript, HTML, CSS <br><br>
      <b> Framework:</b> Vue.js <br><br>
      <b> Testing:</b> Jest <br><br>
      <b> Continuous Integration:</b> TravisCI <br><br>
    </div>
    <div class="blockchain">
      <h3>Blockchain technologies</h3>
        <b>Platform</b>: Ethereum <br><br>
        <b>Language</b>: Solidity <br><br>
        <b>Framework</b>: Truffle <br><br>
        <b>Testing</b>: Mocha, Ganache <br><br>
        <b>Libraries</b>: Web3.js, Web3.py <br><br>
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
  .img-div {
    height: 30vh;
    width: 20vw;
    background: aqua;
  }
}
</style>

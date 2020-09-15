<template>
  <section class='about-content'>
    <div class="back-end">
      <h3>Back-End Technologies</h3>
      <div class="tech-logos">
        <img src="@/assets/chili.png" alt="chili logo" />
        <img src="@/assets/marshmellow.png" alt="marshmellow logo" />
        <img src="@/assets/psql.png" alt="psql logo" />
        <img src="@/assets/python.png" alt="python logo" />
        <img src="@/assets/reddis.png" alt="python logo" />
        <img src="@/assets/send_grid.png" alt="send grid logo" />
        <img src="@/assets/sqla.png" alt="sequal alchemy logo" />
        <img src="@/assets/xylophone.png" alt="" />
      </div>
    </div>
    <div class="front-end">
      <h3>Front-End Technologies</h3>
      <div class="tech-logos">
        <img src="@/assets/heroku.png" alt="heroku logo" />
        <img src="@/assets/JS.png" alt="javascript logo" />
        <img src="@/assets/travis.png" alt="travis logo" />
        <img src="@/assets/vue.png" alt="vue logo" />
        <img src="@/assets/jest.png" alt="jest logo" />
        <img src="@/assets/html5_logo_lrg.png" alt="w3 logo" />
        <img src="@/assets/w3.png" alt="w3 logo" />
        <img src="@/assets/css3.png" alt="w3 logo" />
      </div>
    </div>
    <div class="blockchain">
      <h3>Blockchain technologies</h3>
      <div class="tech-logos">
        <img src="@/assets/truffle.png" alt="truffle logo" />
        <img src="@/assets/ethereum.png" alt="ethereum logo" />
        <img src="@/assets/ganache.png" alt="ganache logo" />
        <img src="@/assets/infura.png" alt="infura logo" />
        <img src="@/assets/metafox.png" alt="metafox logo" />
        <img src="@/assets/mocha.png" alt="mocha logo" />
        <img src="@/assets/solidity.png" alt="solidity logo" />
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
@import "../../_variables.scss";

.about-content {
  background: lighten($sky-blue, 20%);
  height: 33rem;
  display: grid;
  margin: .3rem;
  grid-template-areas:
    "BE FE"
    "BC BC";

    img {
      width: 5rem;
      height: 5rem;
      background: white;
      margin: .3rem .2rem;
      padding: .2rem .3rem;
    }

  .back-end {
    grid-area: BE;
  }

  .front-end {
    grid-area: FE;
  }

  .tech-logos {
    display: grid;
    grid-template-columns: repeat(3, 6rem);
    grid-template-rows: auto;
    grid-gap: .2rem;
    justify-content: center;
  }

  .blockchain{
    grid-area: BC;

    .tech-logos {
      display: flex;
    }
  }
  .tech-list {
    margin-bottom: 15px;
  }
}
</style>

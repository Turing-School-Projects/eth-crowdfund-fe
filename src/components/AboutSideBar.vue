<template>
  <section class='sidebar'>
    <article class='project-manager'>
      <h4>Project Manager &<br />BlockChain Developer</h4>
      <div class='member' v-for="developer in contributors.BC" v-bind:key="developer.id">
        <a v-bind:href="developer.gitHub" target="blank">
          <img src="@/assets/GitHub-Mark-32px.png" />
          <p>{{ developer.name }}</p>
        </a>
      </div>
    </article>
    <article class='back-end-team'>
      <h4>Back End Team</h4>
      <div class='member' v-for="developer in contributors.BE" v-bind:key="developer.id">
        <a v-bind:href="developer.gitHub" target="blank">
          <img src="@/assets/GitHub-Mark-32px.png" />
          <p>{{ developer.name }}</p>
        </a>
      </div>
    </article>
    <article class='front-end-team'>
      <h4>Front End Team</h4>
      <div class='member' v-for="developer in contributors.FE" v-bind:key="developer.id">
        <a v-bind:href="developer.gitHub" target="blank">
          <img src="@/assets/GitHub-Mark-32px.png" />
          <p>{{ developer.name }}</p>
        </a>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      contributors: {
        BE: [
          {
            id: 1,
            name: 'Antonio Jackson',
            gitHub: 'https://github.com/AntonioJacksonII'
          },
          {
            id: 2,
            name: 'Ross Perry',
            gitHub: 'https://github.com/perryr16'
          },
          {
            id: 3,
            name: 'Taylor Keller',
            gitHub: 'https://github.com/takeller'
          }
        ],
        FE: [
          {
            id: 4,
            name: 'Andrew Tom',
            gitHub: 'https://github.com/attom2'
          },
          {
            id: 5,
            name: 'Edwin Montealvo',
            gitHub: 'https://github.com/edmdc89'
          }
        ],
        BC: [
          {
            id: 6,
            name: 'Jack Cullen',
            gitHub: 'https://github.com/jpc20'
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang='scss'>
section {
  width: 13rem;
}
.member {
  a {
    text-decoration: none;
    &:visited {
      color: white;
    }

    p {
      display: inline;
    }
  }
}
</style>

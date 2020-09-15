<template>
  <section class='contributors'>
    <article class='front-end-team'>
      <h3>Front End Team</h3>
      <div class='member' v-for="developer in contributors.FE" v-bind:key="developer.id">
        <a v-bind:href="developer.gitHub" target="blank">
          <img src="@/assets/GitHub-Mark-32px.png" />
          <p>{{ developer.name }}</p>
        </a>
      </div>
    </article>
    <article class='back-end-team'>
      <h3>Back End Team</h3>
      <div class='member' v-for="developer in contributors.BE" v-bind:key="developer.id">
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
            id: 6,
            name: 'Jack Cullen',
            gitHub: 'https://github.com/jpc20'
          },
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
        ]
      }
    }
  }
}
</script>

<style scoped lang='scss'>
@import '../../_variables.scss';

.contributors {
  background: lighten($sky-blue, 20%);
  display: flex;
  justify-content: space-around;
  color: $dark-blue;
  margin-left: 2rem;
  border: 4px solid transparent;
  width: 88%;

  h3 {
    margin-bottom: .3rem;
    text-align: left;
    border-bottom: 3px solid $black;
    color: $black;
    width: 9rem;
  }
  .member {
    a {
      color: $black;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      padding: 0 .8rem;
      height: 2.1rem;
      text-decoration: none;

      &:visited {
        color: $black;
      }

      img {
        height: 1.3rem;
        width: 1.3rem;
      }

      p {
        font-weight: 600;
        margin-left: .3rem;
        display: inline;
      }
    }
  }
}
</style>

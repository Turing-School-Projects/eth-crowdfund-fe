<template>
  <router-link
    style="text-decoration: none;"
    :to="{ name: 'Single Campaign',
    params: {address: campaign.address}}">
    <div>
      <section class="campaign-card">
        <section>
        <div class="img-div"><img :src=campaign.image /></div>
        <div class="campaign-info">
          <h1> {{campaign.name}}</h1>
          <p>{{campaign.description}}</p>
        </div>
        </section>
        <div class="goal"><b>$2,000</b> USD raised</div>
      </section>
    </div>
  </router-link>
</template>

<script>

export default {
  name: 'CampaignCard',
  props: ["campaign"]
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1 {
  margin: 1rem 0 0 0;
}

img {
  width: 100%;
  height: 100%;
}

.campaign-card {
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  box-shadow: 1px 1px 3px grey;
  height: 30rem;
  width: 18rem;
  box-sizing: border-box;
  transform: scale(1);
  &:hover {
    transform: scale(1.02);
    box-shadow: 2px 2px 10px black;
    transition: all 0.25s;
    text-decoration: underline;
  }
}

.img-div {
  height: 15rem;
  width: 18rem;
  background: aqua;
}

</style>

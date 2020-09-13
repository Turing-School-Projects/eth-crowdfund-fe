<template>
  <li class="campaign-card" v-if="!this.$store.state.loading" >
    <figure>
      <div>
        <img :src="campaign.image"/>
      </div>
      <figcaption>
        <h3>{{ campaign.name }}</h3>
        <p>{{campaign.description}}</p>
        <ul class="requests">
          <li v-for="request in campaign.requests" v-bind:key="request.id">
            <p class="text"><b>Summary:</b>{{request.description}}</p>
            <p class="value"><b>Value:</b>{{request.value}}</p>
            <button v-on:click="$emit('approve-request', {
            address: campaign.address,
            ethId: request.eth_id,
            requestID: request.id})"
                    >
                    ApproveRequests
            </button>
          </li>
        </ul>
      </figcaption>
    </figure>
  </li>
</template>

<script>
export default {
  name: "RequestList",
  props: ["campaign", "approvalCount"]
}
</script>

<style lang="scss" scoped>
@import "../_variables.scss";

.campaign-card {
  position: relative;
  display: block;
  flex: 1 0 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  white-space: normal;
  background: whitesmoke;

  figure {
    display: flex;
    margin: 0;
  }

  div {
    @include aspect-ratio(3, 2);
    width: 100%;
  }

  img {
    display: block;
    flex: 1 1 auto;
    object-fit: cover;
  }

  figcaption {
    padding-right: 3rem;
    margin-bottom: 1.8rem;
    flex: 0 0 auto;
    width: 45%;
    min-width: 10rem;

    ul {
      max-height: 13rem;
      overflow-y: scroll;
      border: 2px solid $bg_2;
      box-shadow: 3px 3px 5px 3px $bg_1;
      padding: 0px;

      li {
        display: grid;
        border-bottom: 3px solid $dark-blue;
        grid-template-columns: minmax(4rem, auto);
        grid-template-rows: minmax(3rem, auto), minmax(2rem, auto);
        grid-template-areas:
          "text text"
          "value enter";
        height: 4rem;
        list-style: none;
        padding-bottom: 1px;
        margin-bottom: 3px;
        background: white;

        .text{
          grid-area: text;
          margin: 0 3px;
          height: 2rem;
        }

        .value {
          grid-area: value;
          margin: 0 3px 3px 3px;
        }

        button {
          grid-area: enter;
        }
      }
    }

  }

  &.scrollable {
    overflow-y: scroll;
  }
}

</style>

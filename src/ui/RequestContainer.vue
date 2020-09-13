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
            <p><b>Summary:</b>{{request.description}}</p>
            <p><b>Value:</b>{{request.value}}</p>
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
    min-width: 150px;

    ul {
      max-height: 18rem;
      overflow-y: scroll;

      li {
        height: 15rem;
        list-style: none;
        background: gray;

        p {
          margin: 0 3px;
        }
      }
    }

  }

  &.scrollable {
    overflow-y: scroll;
  }
}

</style>

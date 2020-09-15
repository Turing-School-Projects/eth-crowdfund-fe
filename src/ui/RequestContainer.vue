<template>
  <li class="campaign-card" v-if="!this.$store.state.loading" >
    <figure>
      <div>
        <img :src="campaign.image"/>
      </div>
      <figcaption>
        <h3>{{ campaign.name }}</h3>
        <!-- <p>{{campaign.description}}</p> -->
        <ul v-if="campaign.requests.length" class="requests">
          <li v-for="request in campaign.requests" v-bind:key="request.id">
            <p class="description"><b>Summary:</b><br /> {{request.description}}</p>
            <p class="value"><b>Value:</b> {{request.value}}</p>
            <p class="approvals"><b>Approval Count:</b> {{numOfVotes}} / {{voterCount}}</p>
            <button v-if="type === 'contributor'"
              :disabled="request.approved"
              v-on:click="$emit('approve-request', {
                address: campaign.address,
                ethId: request.eth_id,
                requestID: request.id})"
            >
              ApproveRequests
            </button>
            <button v-if="type === 'manager'"
              :disabled="!request.approved || request.finalized"
              v-on:click="$emit('finalize', {
                address: campaign.address,
                eth_id: request.eth_id,
                id: request.id,
                value: request.value
              })"
            >
              Finalize & Distribute
            </button>
          </li>
        </ul>
        <article class="manager-buttons" v-if="type === 'manager'">
          <button class="create">
            <router-link
              style="text-decoration: none;"
              :to="{
                name: 'Campaign Request',
                params: {id: campaign.id, address: campaign.address}}"
            >
              Create A Request
            </router-link>
          </button>
        </article>
      </figcaption>
      <router-link
        class="edit-campaign"
        style="text-decoration: none;"
        :to="{
          name: 'Edit Campaign',
          params: { address: campaign.address }}"
      >
        <img src="@/assets/more.png" alt="edit campaign" />
      </router-link>
      <button v-if="type === 'manager'"
        class="delete"
        v-on:click="$emit('delete', campaign)">
          <span>X</span>
      </button>
    </figure>
  </li>
</template>

<script>

import Campaign from "../contracts/campaign";

export default {
  name: "RequestList",
  props: {
    campaign: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      numOfVotes: 0,
      voterCount: 0
    }
  },
  created() {
    const { requests } = this.campaign
    console.log('this.campaign.address', this.campaign.address)
    console.log(requests)
    requests.forEach((request) => {
      this.approvalCount(this.campaign.address, request.eth_id)
    })
  },
  methods: {
    async approvalCount(address, ethId) {
      const campaignInstance = await Campaign.at(address);
      const request = await campaignInstance.requests(ethId);
      const numOfVotes = request.approvalCount.toString();
      this.numOfVotes = numOfVotes;
      const voterCount = await campaignInstance.approversCount()
      this.voterCount = voterCount.toString();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../_variables.scss";

.campaign-card {
  color: black;
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
    max-width: 33rem;
  }

  .delete {
    height: 2.1rem;
    width: 2.8rem;
    font-size: 1.5rem;
    font-weight: 900;
    background-color: rgba(214, 69, 65, 1);
    border-radius: 5px;

    span {
      color: transparent;
      background-color: $bg_2;
      text-shadow: 0px 2px 3px whitesmoke;
      background-clip: text;
    }
  }

  .edit-campaign {
    height: 2.1rem;
    width: 2.8rem;
    margin: .3rem .3rem 0 0;
  }

  figcaption {
    padding-right: 1.8rem;
    margin-bottom: 1.8rem;
    flex: 0 0 auto;
    min-width: 10rem;

    ul {
      height: 18rem;
      width: 30rem;
      overflow-wrap: anywhere;
      overflow-y: scroll;
      border: 2px solid $bg_2;
      box-shadow: 2px 2px 9px 3px $bg_2;
      padding: 0px;

      li {
        display: grid;
        border-bottom: 3px solid $dark-blue;
        grid-template-columns: repeat(2, minmax(8.6rem, 21rem));
        grid-template-rows: repeat(3, 3.6rem);
        grid-template-areas:
          "description value"
          "description approvals"
          "description action";
        height: 10.8rem;
        list-style: none;
        padding-bottom: 1px;
        margin-bottom: 3px;
        background: white;

        .text{
          grid-area: description;
          margin: 0 8px;
          text-align: center;
        }

        .value {
          grid-area: value;
          place-self: center;
        }

        .approvals {
          grid-area: approvals;
          place-self: center;
        }

        button {
          grid-area: action;
          place-self: center;
          height: 2.1rem;
          max-width: 13rem;
          background: radial-gradient($bg_2 45%, $bg_1 95%);
          border-radius: 3px;
          box-shadow: 1px 1px 9px 2px $bg_2;
        }
      }
    }

    .manager-buttons {
      display: flex;
      flex-flow: column;
      height: 4.5rem;
      width: 15rem;
      align-items: center;
      justify-content: center;
      margin: auto;
      margin-top: 1rem;

      .create {
        width: 100%;
        margin: .2rem 0;
        height: 2.7rem;
        background: radial-gradient($bg_2 45%, $bg_1 95%);
        border-radius: 3px;
        box-shadow: 1px 1px 9px 2px $bg_2;

        a {
          font-size: 1.2rem;
          text-decoration: none;

          &:visited {
            color: $dark-blue;
          }
        }
      }
    }
  }

  &.scrollable {
    overflow-y: scroll;
  }
}
</style>

import { createStore } from "vuex";

export default createStore({
  state: {
    campaigns: [
      {
        address: 1,
        title: "Buy a well",
        description: "Clean water for rural community",
        minContribution: 100
      },
      {
        title: "End World Hunger",
        description: "We can do it",
        address: 2,
        completed: false
      },
      {
        title: "Clean up Cheesman park",
        description: "Its right by my house",
        address: 3,
        minContribution: 35
      },
      {
        title: "Help orphaned children",
        description: "They really need it",
        address: 4,
        completed: false
      },
      {
        address: 1,
        title: "Buy a well 2",
        description: "Clean water for rural community",
        minContribution: 100
      },
      {
        title: "End World Hunger 2",
        description: "We can do it",
        address: 2,
        completed: false
      },
      {
        title: "Clean up Cheesman park 2",
        description: "Its right by my house",
        address: 3,
        minContribution: 35
      },
      {
        title: "Help orphaned children 2",
        description: "They really need it",
        address: 4,
        completed: false
      }
    ]
  },
  getters: {
    /* eslint-disable-next-line */
    getSingleCampaign: state => address => state.campaigns.find((campaign) => campaign.address === address)
  },
  mutations: {
    ADD_CAMPAIGN: (state, payload) => {
      state.campaigns = [...state.campaigns, payload];
    }
  },
  actions: {},
  modules: {}
});

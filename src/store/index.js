import { createStore } from "vuex";

export default createStore({
  state: {
    campaigns: [
      {
        title: "Buy a well",
        description: "Clean water for rural community",
        minContribution: 100
      },
      {
        title: "Clean up community park",
        description: "Help provide tools and snacks for Park Clean Up day",
        minContribution: 35
      }
    ]
  },
  mutations: {
    ADD_CAMPAIGN: (state, payload) => {
      state.campaigns = [...state.campaigns, payload];
    }
  },
  actions: {},
  modules: {}
});

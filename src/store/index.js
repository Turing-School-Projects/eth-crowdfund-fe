import { createStore } from "vuex";

export default createStore({
  state: {
    campaigns: [
      {
        id: 1,
        title: "Buy a well",
        description: "Clean water for rural community",
        minContribution: 100
      },
      {
        title: "End World Hunger",
        description: "We can do it",
        id: 2,
        completed: false
      },
      {
        title: "Clean up Cheesman park",
        description: "Its right by my house",
        id: 3,
        minContribution: 35
      },
      {
        title: "Help orphaned children",
        description: "They really need it",
        id: 4,
        completed: false
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

/* eslint-disable no-return-assign */
import { createStore } from "vuex";
import axios from "axios";
import factory from "../contracts/factory";
import campaign from "../contracts/campaign";
import web3 from "../contracts/web3";

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
    ],
    todos: [],
    factory: {},
    accountNum: null,
    campaign: {}
  },
  getters: {
    /* eslint-disable-next-line */
    getSingleCampaign: state => address => state.campaigns.find((campaign) => campaign.address === address),
    getFactory: (state) => state.factory
  },
  mutations: {
    ADD_CAMPAIGN: (state, payload) => {
      state.campaigns = [...state.campaigns, payload];
    },
    setTodos: (state, todos) => (state.todos = todos),
    setFactory: (state, instance) => (state.factory = instance),
    setCampaign: (state, instance) => (state.campaign = instance),
    setAccountNum: (state, accNum) => (state.accountNum = accNum)
  },
  actions: {
    fetchTodos: async ({ commit }) => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      commit("setTodos", response.data);
    },
    fetchFactory: async ({ commit }) => {
      const instance = await factory.at("0x7c70286f6991c660a0cC6d52A74aEBbDE45Da380");
      commit("setFactory", instance);
    },
    fetchCampaign: async ({ commit }) => {
      const instance = await campaign.at("0xe8a0980C2B37C2C4FCE45e579301B00CC824bCFc");
      commit("setCampaign", instance);
    },
    fetchAccountNum: async ({ commit }) => {
      const accounts = await web3.eth.getAccounts();
      commit("setAccountNum", accounts[0]);
    }
  },
  modules: {}
});

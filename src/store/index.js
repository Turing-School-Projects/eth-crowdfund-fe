/* eslint-disable no-return-assign */
import { createStore } from "vuex";
import axios from "axios";
import factory from "../contracts/factory";
import campaign from "../contracts/campaign";
import web3 from "../contracts/web3";
import { VUE_APP_API_URL } from "../env";

require('dotenv').config()

export default createStore({
  state: {
    campaigns: [],
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
    setCampaigns: (state, instance) => (state.campaigns = instance),
    setAccountNum: (state, accNum) => (state.accountNum = accNum)
  },
  actions: {
    fetchTodos: async ({ commit }) => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      commit("setTodos", response.data);
    },
    fetchFactory: async ({ commit }) => {
      const instance = await factory.at(process.env.VUE_APP_FACTORY_ADDRESS);
      commit("setFactory", instance);
    },
    fetchAllCampaigns: async ({ commit }) => {
      console.log('API_URL', process.env)
      console.log('API_URL imported', VUE_APP_API_URL)
      const response = await axios.get(`${VUE_APP_API_URL}campaigns/`)
      commit('setCampaigns', response.data);
    },
    fetchCampaign: async ({ commit }, address) => {
      console.log("campaignAddress", address);
      const instance = await campaign.at(address);
      commit("setCampaign", instance);
    },
    fetchAccountNum: async ({ commit }) => {
      const accounts = await web3.eth.getAccounts();
      commit("setAccountNum", accounts[0]);
    }
    // createBECampaign: async ({ commit }, campaignRequest) => {
    //   const accounts = await web3.eth.getAccounts();
    //   const newCampaign = { ...campaignRequest, manager: accounts[1] };
    //   const response = await axios.post(`${API_URL}campaigns`, newCampaign);
    //   commit("ADD_CAMPAIGN", response);
    // }
  },
  modules: {}
});

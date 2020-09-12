/* eslint-disable no-return-assign */
import { createStore } from "vuex";
import axios from "axios";
import factory from "../contracts/factory";
import campaign from "../contracts/campaign";
import web3 from "../contracts/web3";
import { VUE_APP_API_URL } from "../env";

export default createStore({
  state: () => ({
    campaigns: [],
    todos: [],
    factory: {},
    accountNum: null,
    campaign: {},
    userCampaigns: [],
    userContributions: []
  }),
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
    setContributions: (state, instance) => (state.userContributions = instance),
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
      const response = await axios.get(`${VUE_APP_API_URL}campaigns/`);
      commit("setCampaigns", response.data);
    },
    fetchCampaign: async ({ commit }, address) => {
      const instance = await campaign.at(address);
      commit("setCampaign", instance);
    },
    fetchAccountNum: async ({ commit }) => {
      const accounts = await web3.eth.getAccounts();
      commit("setAccountNum", accounts[0]);
    },
    /* eslint-disable */
    createWithdrawalRequest: async (context, { request, address, manager }) => {
      const { description, value, recipient } = request;
      const weiValue = web3.utils.toWei(value);

      const campaignInstance = await campaign.at(address);
      const result = await campaignInstance.createRequest(description, weiValue, recipient, {
        from: manager
      });
      if (result) {
        const newRequest = { ...request, value: value };
        try {
          await axios.post(`${VUE_APP_API_URL}requests/`, newRequest);
        } catch (error) {
          return { error };
        }
      }
    },
    contributeToBlockChain: async ({ dispatch, state }, { address, contribution }) => {
      const { toWei } = web3.utils;
      const campaignInstance = await campaign.at(address);
      const result = await campaignInstance.contribute({
        from: state.accountNum,
        value: toWei(contribution, "ether")
      });
      if (result) {
        dispatch("sendContributionToDB", { address, contribution });
      }
    },
    sendContributionToDB: async ({ getters, dispatch }, { address, contribution }) => {
      const { value, id, min_contribution } = getters.getSingleCampaign(address);
      try {
        await axios.put(`${VUE_APP_API_URL}campaigns/${id}`, {
          value: value + parseFloat(contribution)
        });
      } catch (error) {
        return { error };
      }
      if (contribution > min_contribution) {
        dispatch("addContributorToCampaign", { address });
      }
    },
    addContributorToCampaign: async ({ state }, { address }) => {
      try {
        await axios.post(`${VUE_APP_API_URL}campaigns/${address}/contributor/${state.accountNum}`, {
          address: state.accountNum,
          email: null
        });
      } catch (error) {
        return { error };
      }
    },
    getUserContribution: async ({ state, commit }, payload) => {
      const response = await axios.get(`${VUE_APP_API_URL}contributor/${payload}/campaigns`);
      commit("setContributions", response.data);
    }
    /* eslint-enable */
  },
  modules: {}
});

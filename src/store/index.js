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
    userContributions: [],
    loading: false,
    exchangeRate: 0
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
    EDIT_CAMPAIGN: (state, payload) => {
      const index = state.campaigns.findIndex((camp) => camp.id === payload.id);

      state.campaigns = [
        ...state.campaigns.slice(0, index),
        payload,
        ...state.campaigns.slice(index + 1)
      ];
    },
    DELETE_CAMPAIGN: (state, id) => {
      const index = state.campaigns.findIndex((camp) => camp.id === id);
      state.campaigns.splice(index, 1);
    },
    SET_LOADING(state, loading) {
      console.log('Set state to', loading)
      state.loading = loading
    },
    setTodos: (state, todos) => (state.todos = todos),
    setFactory: (state, instance) => (state.factory = instance),
    setCampaign: (state, instance) => (state.campaign = instance),
    setCampaigns: (state, instance) => (state.campaigns = instance),
    setContributions: (state, instance) => (state.userContributions = instance),
    setAccountNum: (state, accNum) => (state.accountNum = accNum),
    setExchangeRate: (state, rate) => (state.exchangeRate = rate)
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
    fetchExchangeRate: async ({ commit }) => {
      const {
        data: { USD }
      } = await axios.get(`${VUE_APP_API_URL}price_converter?wei=1000000000000000000`);
      commit("setExchangeRate", USD);
    },
    /* eslint-disable */
    createWithdrawalRequest: async ({ commit }, { request, address, manager }) => {
      commit('SET_LOADING', true)
      const { description, value, recipient } = request;
      const weiValue = web3.utils.toWei(value);
      const campaignInstance = await campaign.at(address);
      let result;
      try {
        result = await campaignInstance.createRequest(description, weiValue, recipient, {
          from: manager
        });
      } catch(error) {
        console.log(error)
        commit('SET_LOADING', false)
      }
      if (result) {
        commit('SET_LOADING', false)
        const newRequest = { ...request, value: value };
        try {
          await axios.post(`${VUE_APP_API_URL}requests/`, newRequest);
        } catch (error) {
          return { error };
        }
      }

    },
    contributeToBlockChain: async ({ dispatch, state, commit }, { address, contribution }) => {
      commit('SET_LOADING', true)
      const { toWei } = web3.utils;
      const campaignInstance = await campaign.at(address);
      let result
      try {
        result = await campaignInstance.contribute({
          from: state.accountNum,
          value: toWei(contribution, "ether")
        });
      } catch (error) {
        commit('SET_LOADING', false)
        console.log(error)
      }
      if (result) {
        dispatch("sendContributionToDB", { address, contribution });
        commit('SET_LOADING', false);
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
    },
    approveRequest: async ({ commit, state }, { address, ethId, requestID }) => {
      commit('SET_LOADING', true);
      const campaignInstance = await campaign.at(address)
      console.log(campaignInstance)
      let result;
      try {
        result = await campaignInstance.approveRequest(ethId, { from: state.accountNum })
      } catch (error) {
        console.log(error)
        commit('SET_LOADING', false);
      }
      const request = await campaignInstance.requests(ethId)
      const approvalCount = parseInt(request.approvalCount.toString())
      const voterCount = await campaignInstance.approversCount()
      const voterString = voterCount.toString();
      console.log('approvalCount', approvalCount)
      console.log('voterCount', voterCount)
      if (result && (approvalCount >= parseInt(voterString) / 2)) {
        const resp = await axios.put(`${VUE_APP_API_URL}requests/${requestID}`, {
          approved: "true"
        });
        console.log(resp);
      }
      if (result) {
        commit('SET_LOADING', false)
      }
    },
    finalizeRequest: async ({commit, state}, { address, eth_id, id, value}) => {
      commit('SET_LOADING', true)

      const campaignInstance = await campaign.at(address)
      let result;
      try {
        result = await campaignInstance.finalizeRequest(eth_id, { from: state.accountNum, gas: '100000' })
      } catch (error) {
        console.log(error)
        commit('SET_LOADING', false)

      }

      if (result) {
        commit('SET_LOADING', false)
        const req_resp = await axios.put(`${VUE_APP_API_URL}requests/${id}`, {
          finalized: "true"
        });
        const camp_resp = await axios.put(`${VUE_APP_API_URL}campaigns/${campaign.id}`, {
          value: campaign.value - value
        });
        console.log('request', req_resp);
        console.log('campaign', camp_resp);
      }
    },
    createCampaign: async ({commit, state, router}, {title, description, imageUrl, minContribution}) => {
      commit('SET_LOADING', true)
      const factoryInstance = await factory.at(process.env.VUE_APP_FACTORY_ADDRESS);
      const contribution = web3.utils.toWei(minContribution)
      let result;
      try {
        result = await factoryInstance.createCampaign(contribution, { from: state.accountNum })
      } catch(error) {
        console.log(error)
        commit('SET_LOADING', false)

      }
      const addresses = await factoryInstance.getDeployedCampaigns()
      const campaignAddress = addresses[addresses.length - 1];

      if (result) {
        commit('SET_LOADING', false)
        axios.post(`${VUE_APP_API_URL}campaigns/`, {
          name: title,
          description: description,
          image: imageUrl,
          value: "0",
          upvote: "0",
          manager: state.accountNum,
          address: campaignAddress,
          min_contribution: minContribution
        })
          .then((resp) => console.log(resp))
          // eslint-disable-next-line no-return-assign
          .catch((error) => this.error = error.message)
      }
    }
    /* eslint-enable */
  },
  modules: {}
});

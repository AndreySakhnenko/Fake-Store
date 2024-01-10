// store/index.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = () => ({
  siteName: 'The best Company',
});

export const mutations = {
  setSiteName(state) {
    //some code
  },
};

export const getters = {
  getSiteName(state) {
    return state.siteName;
  },
};

export const actions = {
  changeSiteName() {
    //some code
  },
};

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
  });
};

export default createStore;

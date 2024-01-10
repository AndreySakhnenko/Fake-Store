// store/index.js
// import Vuex from 'vuex';

// const createStore = () => {
//   return new Vuex.Store({
//     state: {
//       selectedCategory: null,
//     },
//     mutations: {
//       setCategory(state, category) {
//         state.selectedCategory = category;
//       },
//     },
//   });
// };

// export default createStore;

export const state  = () => ({
  siteName: 'The best Company'
})

export const mutations = {
  setSiteName(state){
    //some code
  }
}

export const getters = {
  getSiteName(store) {
    return store.siteName
  }
}

export const actions = {
  changeSiteName() {

  }
}

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stepOne:1,
  },
  mutations: {
    stepOneInc: state =>{
      state.stepOne++;
    }
  },
  actions: {},
  modules: {},
});

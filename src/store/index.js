import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stepOne: 1,
    faculity: "",
    form: "",
    degree: "",
    direction: "",
    spec: "",
    specialisation: "",
    year: "",
    groups: [],
    tryby: [{ text: "Stacjonarny" }, { text: "Niestacjonarny" }],
    instytuty: [{ text: "II" }, { text: "IT" }, { text: "ISM" }],
    stopnie: [{ text: "I" }, { text: "II" }],
    kierunki: [
      { text: "Informatyka" },
      { text: "Matematyka" },
      { text: "Fizyka" },
    ],
    specjalnosci:[{text:"oil"},{text:"hagf"},{text:"gfw"}],
    specs:[{text:"fds"},{text:"iuy"},{text:"fsd"}],
  },
  mutations: {
    stepOneInc: (state) => {
      state.stepOne++;
    },
  },
  actions: {},
  modules: {},
});

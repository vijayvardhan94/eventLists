import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abc123", name: "John Doe" },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

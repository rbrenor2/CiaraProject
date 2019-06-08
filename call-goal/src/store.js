import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    callGoal: 0
  },
  mutations: {
    setCallGoal(state, calls) {
      state.callGoal = calls;
    }
  },
  actions: {
    setCallGoal({ commit }, calls) {
      console.log(calls);
      commit("setCallGoal", calls);
    }
  }
});

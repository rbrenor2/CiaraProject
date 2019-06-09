import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    callGoal: 0,
    callDone: 0
  },
  mutations: {
    GOAL_SET: (state, payload) => {
      state.callGoal = payload;
    },
    DONE_SET: (state, payload) => {
      state.done = payload;
    }
  },
  actions: {
    setCallGoal(context, payload) {
      context.commit("GOAL_SET", payload);
    },
    setCallDone(context, payload) {
      context.commit("DONE_SET", payload);
    }
  }
});

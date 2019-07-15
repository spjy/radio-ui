const state = {
};

const mutations = {
  SET_SESSION_COMMUNITY(state, community) {
    state.community = {
      ...community,
    };
  },
};

const actions = {
  setSessionCommunity({ commit }, community) {
    commit('SET_SESSION_COMMUNITY', community);
  },
};

export default {
  state,
  mutations,
  actions,
};

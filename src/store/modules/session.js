const state = {
  hotkeys: {
    main: {},
    channel: {},
  },
  community: {
    name: '',
    timezone: 'America/Los_Angeles',
    channels: [],
    tones: {}
  }
};

const mutations = {
  SET_SESSION_COMMUNITY(state, community) {
    // community.channels.forEach((channel) => {
    //   state.hotkeys.channel[channel] = [];
    // });

    state.community = {
      ...community,
    };
  },
  SAVE_HOTKEY(state, { type, name, hotkey }) {
    state.hotkeys[type] = {
      ...state.hotkeys[type],
      [name]: hotkey,
    };
  },
};

const actions = {
  setSessionCommunity({ commit }, community) {
    console.log('test')
    commit('SET_SESSION_COMMUNITY', community);
  },
  saveHotkey({ commit }, { type, name, hotkey }) {
    commit('SAVE_HOTKEY', { type, name, hotkey });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

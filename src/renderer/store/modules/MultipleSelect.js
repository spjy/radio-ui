const state = {
  selecting: false, // whether selecting channels for multiple select
  multipleSelect: 'Msel1', // currently selected patch
  multipleSelections: {
    Msel1: [],
    Msel2: [],
    Msel3: [],
  }, // storage for channels that are multi selected for each profile
  txActive: false, // whether transmitting is true
};

const mutations = {
  /** Toggler for selecting state for multiple selection */
  TOGGLE_SELECTING_CHANNEL(state) {
    state.selecting = !state.selecting;
  },
  /** Setter for selecting which profile to append or unappend */
  SET_MULTIPLE_SELECT_PROFILE(state, profile) {
    state.multipleSelect = profile;
  },
  /** Toggler for selecting certain channel. */
  TOGGLE_SELECTED_CHANNEL(state, channel) {
    const { multipleSelect, multipleSelections } = state;

    if (!multipleSelections[multipleSelect]) {
      // Case for if the profile is not yet created
      multipleSelections[multipleSelect] = [channel];
    } else if (multipleSelections[multipleSelect]) {
      // Case for if the profile is created; now check if channel is already selected/
      if (!multipleSelections[multipleSelect].includes(channel)) {
        // If selection profile does not contain the channel, insert channel
        multipleSelections[multipleSelect].push(channel);
      } else if (multipleSelections[multipleSelect].includes(channel)) {
        // If selection profile contains the channel, remove channel
        multipleSelections[multipleSelect]
          .splice(multipleSelections[multipleSelect].indexOf(channel), 1);
      }
    }
  },
  /** Toggling whether broadcasting to all selected channels in profile or not */
  TOGGLE_TX_ACTIVE(state) {
    state.txActive = !state.txActive;
  },
};

const actions = {
  toggleSelectingChannel({ commit }) {
    commit('TOGGLE_SELECTING_CHANNEL');
  },
  setMultipleSelectProfile({ commit }, profile) {
    commit('SET_MULTIPLE_SELECT_PROFILE', profile);
  },
  toggleSelectedChannel({ commit }, channel) {
    commit('TOGGLE_SELECTED_CHANNEL', channel);
  },
  toggleTxActive({ commit }) {
    commit('TOGGLE_TX_ACTIVE');
  },
};

export default {
  state,
  mutations,
  actions,
};

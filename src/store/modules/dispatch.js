const state = {
  multiselect: {
    selecting: false, // whether selecting channels for multiple select
    multipleSelect: 'Msel1', // currently selected patch
    multipleSelections: {
      Msel1: [],
      Msel2: [],
      Msel3: [],
    }, // storage for channels that are multi selected for each profile
    txActive: false, // whether transmitting is true
  },
  patch: {
    selecting: false,
    patch: 'Patch1',
    patches: {
      Patch1: [],
      Patch2: [],
      Patch3: [],
    },
    patchActive: false,
  },
};

const mutations = {
  // Multiselect mutations
  /** Toggler for selecting state for multiple selection */
  TOGGLE_SELECTING_CHANNEL(state) {
    state.multiselect.selecting = !state.multiselect.selecting;
  },
  /** Setter for selecting which profile to append or unappend */
  SET_MULTIPLE_SELECT_PROFILE(state, profile) {
    state.multiselect.multipleSelect = profile;
  },
  /** Toggler for selecting certain channel. */
  TOGGLE_SELECTED_CHANNEL(state, channel) {
    const { multipleSelect, multipleSelections } = state.multiselect;

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
    state.multiselect.txActive = !state.multiselect.txActive;
  },
  // Patch mutations
  /** Toggler for selecting state for patch */
  TOGGLE_SELECTING_PATCH(state) {
    state.patch.selecting = !state.patch.selecting;
  },
  /** Setter for selecting patch profile */
  SET_PATCHES_PROFILE(state, profile) {
    state.patch.patch = profile;
  },
  /** Toggler for selecting a channel to patch */
  TOGGLE_PATCHED_CHANNEL(state, channel) {
    const { patches, patch } = state.patch;

    if (!patches[patch]) {
      // Case for if the profile is not yet created
      patches[patch] = [channel];
    } else if (patches[patch]) {
      // Case for if the profile is created; now check if channel is already selected/
      if (!patches[patch].includes(channel)) {
        // If selection profile does not contain the channel, insert channel
        patches[patch].push(channel);
      } else if (patches[patch].includes(channel)) {
        // If selection profile not contain the channel, remove channel
        patches[patch]
          .splice(patches[patch].indexOf(channel), 1);
      }
    }
  },
  /** Toggle whether patch is active or not */
  TOGGLE_PATCH_ACTIVE(state) {
    state.patch.patchActive = !state.patch.patchActive;
  },
};

const actions = {
  // Multiple select actions
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
  // Patch actions
  toggleSelectingPatch({ commit }) {
    commit('TOGGLE_SELECTING_PATCH');
  },
  setPatchesProfile({ commit }, profile) {
    commit('SET_PATCHES_PROFILE', profile);
  },
  togglePatchChannel({ commit }, channel) {
    commit('TOGGLE_PATCHED_CHANNEL', channel);
  },
  togglePatchActive({ commit }) {
    commit('TOGGLE_PATCH_ACTIVE');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

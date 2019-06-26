const state = {
  selecting: false,
  patch: 'Patch1',
  patches: {
    Patch1: [],
    Patch2: [],
    Patch3: [],
  },
  patchActive: false,
};

const mutations = {
  /** Toggler for selecting state for patch */
  TOGGLE_SELECTING_PATCH(state) {
    state.selecting = !state.selecting;
  },
  /** Setter for selecting patch profile */
  SET_PATCHES_PROFILE(state, profile) {
    state.patch = profile;
  },
  /** Toggler for selecting a channel to patch */
  TOGGLE_PATCHED_CHANNEL(state, channel) {
    const { patches, patch } = state;

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
    state.patchActive = !state.patchActive;
  },
};

const actions = {
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
  state,
  mutations,
  actions,
};

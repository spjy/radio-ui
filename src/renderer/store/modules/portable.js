const state = {
  tx: false,
  txChannel: null,
  scanningChannels: [],
  pagingChannels: [],
};

const mutations = {
  SET_TX(state, tx) {
    state.tx = tx;
  },
  SET_TX_CHANNEL(state, txChannel) {
    state.channel = txChannel;
  },
  ADD_SCANNING_CHANNEL(state, channel) {
    state.scanningChannels = [
      ...state.scanningChannels,
      channel,
    ];
  },
  REMOVE_SCANNING_CHANNEL(state, channel) {
    state.scanningChannels.filter(scanningChannel => scanningChannel === channel);
  },
  ADD_PAGING_CHANNEL(state, channel) {
    state.pagingChannels = [
      ...state.pagingChannels,
      channel,
    ];
  },
  REMOVE_PAGING_CHANNEL(state, channel) {
    state.pagingChannels.map(pagingChannel => pagingChannel === channel);
  },
};

const actions = {
  setTx({ commit }, tx) {
    commit('SET_TX', tx);
  },
  setTxChannel({ commit }, txChannel) {
    commit('SET_TX_CHANNEL', txChannel);
  },
  addScanningChannel({ commit }, channel) {
    commit('ADD_SCANNING_CHANNEL', channel);
  },
  removeScanningChannel({ commit }, channel) {
    commit('REMOVE_SCANNING_CHANNEL', channel);
  },
  addPagingChannel({ commit }, channel) {
    commit('ADD_PAGING_CHANNEL', channel);
  },
  removePagingChannel({ commit }, channel) {
    commit('REMOVE_PAGING_CHANNEL', channel);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

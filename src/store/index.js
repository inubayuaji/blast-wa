import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: 1,
    qr: null,
    dialog: false,
    displayLoading: false,
    displayQrScan: false,
    phoneList: [],
  },
  mutations: {
    setQr(state, payload) {
      state.qr = payload.qr;
    },
    showLoading(state) {
      state.displayLoading = true;
      state.displayQrScan = false;
    },
    showQrScan(state) {
      state.displayQrScan = true;
      state.displayLoading = false;
    },
    toggleDialog(state) {
      state.dialog = !state.dialog;
    },
    setPhoneList(state, payload) {
      state.phoneList = payload.phoneList;
    },
  },
  actions: {},
  modules: {},
});

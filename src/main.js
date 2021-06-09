import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import { ipcRenderer } from "electron";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");

ipcRenderer.on("qrcode", (event, qr) => {
  store.commit("setQr", { qr: qr });
  store.commit("showQrScan");
});

ipcRenderer.on("authenticated", () => {
  store.commit("showLoading");
});

ipcRenderer.on("done", () => {
  store.commit("toggleDialog");
  store.state.step = 4;
});

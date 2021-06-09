<template>
  <div class="pa-4">
    <v-textarea
      outlined
      name="input-7-4"
      label="Outlined textarea"
      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
    ></v-textarea>

    <v-btn color="primary" @click="kirim"> Kirim </v-btn>

    <v-dialog v-model="dialog" persistent max-width="390">
      <v-card v-if="displayLoading">
        <v-card-text>
          Proses
          <v-progress-linear indeterminate color="primary"></v-progress-linear>
        </v-card-text>
      </v-card>
      <v-card v-if="displayQrScan">
        <v-card-text>
          <p style="text-align: center; margin-bottom: 0; padding-top: 10px;">Scan kode dibawah</p>
          <VueQrcode :value="qr" width=350 class="mx-auto"></VueQrcode>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
import VueQrcode from "vue-qrcode";

// https://github.com/pedroslopez/whatsapp-web.js/issues/508
export default {
  name: "Pesan",
  components: {
    VueQrcode,
  },
  computed: {
    qr() {
      return this.$store.state.qr;
    },
    displayLoading(){
      return this.$store.state.displayLoading;
    },
    displayQrScan() {
      return this.$store.state.displayQrScan;
    },
    dialog(){
      return this.$store.state.dialog;
    }
  },
  methods: {
    async kirim() {
      ipcRenderer.send("wa");
      this.$store.commit('toggleDialog');
      this.$store.commit('showLoading');
    },
  },
};
</script>
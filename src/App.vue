<template>
  <v-app>
    <v-main>
      <v-stepper v-model="step" height="100%">
        <v-stepper-header>
          <v-stepper-step :complete="step > 1" step="1">
            Persetujuan
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="step > 2" step="2">
            Kontak
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="step > 3" step="3"> Pesan </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="4"> Selesai </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <Persetujuan></Persetujuan>
          </v-stepper-content>

          <v-stepper-content step="2">
            <Kontak></Kontak>
          </v-stepper-content>

          <v-stepper-content step="3">
            <Pesan></Pesan>
          </v-stepper-content>

          <v-stepper-content step="4">
            <Selesai></Selesai>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-main>
    <v-footer>
      Made by <v-btn text color="primary">Lunantu</v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import Persetujuan from './components/Persetujuan.vue';
import Kontak from './components/Kontak.vue';
import Pesan from './components/Pesan.vue';
import Selesai from './components/Selesai.vue';

export default {
  name: "App",
  computed: {
    step(){
      return this.$store.state.step;
    }
  },
  components: {
    Persetujuan,
    Kontak,
    Pesan,
    Selesai
  },
};
</script>
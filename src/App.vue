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
            <v-btn color="primary" @click="step = 2"> Continue </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-btn color="primary" @click="step = 3"> Continue </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-btn color="primary" @click="step = 4"> Continue </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-stepper-content>

          <v-stepper-content step="4">
            <v-btn color="primary" @click="step = 1"> Continue </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-main>
    <v-footer>
      Made by <v-btn text>Lunantu</v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      step: 1,
    };
  },
  components: {},
};
</script>

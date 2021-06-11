<template>
  <v-app>
    <v-main>
      <v-form ref="form" class="pa-5">
        <v-textarea
          v-model="form.pesan"
          :rules="rule.pesan"
          outlined
          label="Pesan"
        ></v-textarea>
        <v-file-input
          v-model="form.kontak"
          :rules="rule.kontak"
          outlined
          prepend-icon=""
          prepend-inner-icon="mdi-microsoft-excel"
          label="Daftar no"
          accept=".xlsx"
        ></v-file-input>
        <v-btn color="success" @click="kirim">Kirim</v-btn>
      </v-form>
    </v-main>
    <v-footer> Made by <v-btn text color="success">Lunantu</v-btn> </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      form: {
        pesan: null,
        kontak: null,
      },
      rule: {
        pesan: [(v) => !!v || "Tolong isi pesan."],
        kontak: [
          (v) => !!v || "Tolong pilih file kontak.",
          (v) => {
            if (v != null) {
              return (
                v.path.endsWith(".xlsx") ||
                "Tolong pilih file dengan extensi .xlsx."
              );
            }

            return "Tolong pilih file dengan extensi .xlsx.";
          },
        ],
      },
    };
  },
  methods: {
    kirim() {
      if (!this.$refs.form.validate()) {
        return false;
      }
    },
  },
};
</script>
<template>
  <div class="pa-4">
    <v-form ref="form" lazy-validation>
      <v-file-input
        label="File input"
        outlined
        dense
        accept=".xlsx"
        :rules="fileRule"
        @change="selectFile"
      ></v-file-input>
    </v-form>

    <v-btn color="primary" @click="loadKontak"> Import </v-btn>
  </div>
</template>

<script>
import Excel from "exceljs";
import parsePhoneNumber from "libphonenumber-js";

export default {
  name: "Kontak",
  data() {
    return {
      file: null,
      fileRule: [
        (v) => !!v || "Tolong pilih file.",
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
    };
  },
  methods: {
    selectFile(file) {
      this.file = file;
    },
    async loadKontak() {
      const workbook = new Excel.Workbook();

      if (!this.$refs.form.validate()) {
        return false;
      }

      await workbook.xlsx.readFile(this.file.path);
      const worksheet = workbook.worksheets[0];

      // load data
      var excelData = [];
      worksheet.eachRow({ includeEmpty: true }, function (row) {
        var cell = row.getCell(1);

        if (cell == "") {
          excelData.push(null);
        } else {
          excelData.push(cell.value.toString());
        }
      });

      // normalze data
      excelData = excelData.filter((phone) => {
        return phone != null;
      });
      excelData = excelData.map((phone) => {
        return parsePhoneNumber(phone, "ID").number.replace(/\D/g, "");
      });

      this.$store.commit("setPhoneList", { phoneList: excelData });
      this.$store.state.step = 3;
    },
  },
};
</script>
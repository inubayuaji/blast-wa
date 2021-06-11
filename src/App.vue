<template>
  <v-app>
    <v-main>
      <v-form ref="form" class="pa-5">
        <v-textarea
          v-model="form.pesan"
          :rules="rule.pesan"
          outlined
          label="Pesan"
          prepend-inner-icon="mdi-comment"
          color="success"
        ></v-textarea>
        <v-file-input
          v-model="form.kontak"
          :rules="rule.kontak"
          outlined
          prepend-icon=""
          prepend-inner-icon="mdi-microsoft-excel"
          label="Daftar no"
          accept=".xlsx"
          color="success"
        ></v-file-input>
        <v-btn color="success" @click="kirim"
          ><v-icon left> mdi-email-send-outline </v-icon> Kirim</v-btn
        >
      </v-form>
    </v-main>
    <v-footer> Made by <v-btn text color="success">Lunantu</v-btn> </v-footer>
  </v-app>
</template>

<script>
import Excel from "exceljs";
import { parsePhoneNumber, isPossiblePhoneNumber } from "libphonenumber-js";

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
      kontakList: [],
    };
  },
  methods: {
    kirim() {
      if (!this.$refs.form.validate()) {
        return false;
      }

      this.loadKontak();
    },
    async loadKontak() {
      const workbook = new Excel.Workbook();

      await workbook.xlsx.readFile(this.form.kontak.path);
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
        if (phone != null) {
          var isPhone = isPossiblePhoneNumber(phone.replace(/\D/g, ""), "ID");
        }
        return phone != null && isPhone;
      });
      excelData = excelData.map((phone) => {
        return parsePhoneNumber(phone, "ID").number.replace(/\D/g, "");
      });

      this.kontakList = excelData;
    },
  },
};
</script>
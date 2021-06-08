<template>
  <div class="pa-4">
    <v-file-input label="File input" outlined dense></v-file-input>

    <v-btn color="primary" @click="$store.state.step = 3"> Import </v-btn>
  </div>
</template>

<script>
export default {
  name: "Kontak",
};
</script>
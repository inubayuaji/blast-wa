<template>
  <div class="pa-4">
    <v-textarea
      outlined
      name="input-7-4"
      label="Outlined textarea"
      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
    ></v-textarea>

    <v-btn color="primary" @click="$store.state.step = 4"> Kirim </v-btn>
  </div>
</template>

<script>
export default {
  name: "Pesan",
};
</script>
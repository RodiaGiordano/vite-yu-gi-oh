<script>
import { store } from "../data/store";
import AppCardsList from "./card/AppCardsList.vue";
import Select from "./Select.vue";

export default {
  components: { AppCardsList, Select },

  emits: ["archetypeSelected"],

  data() {
    return {};
  },

  methods: {
    archetypeSelected(term) {
      this.$emit("archetypeSelected", term);
    },
  },
};
</script>

<template>
  <main>
    <div class="select_option">
      <Select @archetypeSelected="archetypeSelected" />
    </div>

    <AppCardsList />
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #d48f38;
  padding: 30px;
}
</style>

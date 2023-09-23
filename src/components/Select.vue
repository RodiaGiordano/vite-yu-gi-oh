<script>
import { store } from "../data/store";
export default {
  emits: ["archetypeSelected"],

  data() {
    return {
      store,
      term: "",
    };
  },
};
</script>

<template>
  <select v-model="this.term" @change="$emit('archetypeSelected', term)">
    <option value="" selected>Scegli l'archetipo</option>
    <option
      v-for="(archetype, index) in store.archetypeList"
      key="index"
      :value="archetype.archetype_name"
    >
      {{ archetype.archetype_name }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
select {
  margin: 20px 40px;
  padding: 10px;
}
</style>

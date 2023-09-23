<script>
import AppCard from "./AppCard.vue";
import { store } from "../../data/store";

export default {
  data() {
    return { store };
  },
  components: { AppCard },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-6">
      <AppCard
        v-for="card in store.cardList"
        :key="card.id"
        :name="card.name"
        :archetype="card.archetype"
        :image="card.image"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  padding: 60px 0;
  gap: 1rem;
  justify-content: center;
  background-color: white;
}
</style>

<script>
import AppCard from "./AppCard.vue";
import { store } from "../../data/store";

export default {
  components: { AppCard },
  data() {
    return {
      store,
    };
  },

  computed: {
    cardCount() {
      return store.cardList.length;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-5">
      <div class="count_results">Found {{ cardCount }} cards</div>
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
  .count_results {
    background-color: black;
    color: white;
    padding: 30px;
    width: 85%;
    font-size: xx-large;
    font-weight: bold;
  }
}
</style>

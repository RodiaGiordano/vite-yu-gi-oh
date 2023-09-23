<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import loader from "./components/loader.vue";

import { store } from "./data/store.js";

export default {
  components: { AppHeader, AppMain, loader },

  data() {
    return {
      loader: false,
      store,
    };
  },

  methods: {
    fetchCard(endpoint) {
      this.loader = true;

      axios
        .get(endpoint)
        .then((response) => {
          const cardData = response.data.data.map((card) => {
            const { id, archetype, name, card_images } = card;

            return {
              id,
              archetype,
              name,
              image: card_images[0].image_url,
            };
          });
          store.cardList = cardData;
        })
        .finally(() => {
          this.loader = false;
        });
    },

    fetchArchetype(endpoint) {
      this.loader = true;
      axios
        .get(endpoint)
        .then((response) => {
          const archetypes = response.data.map((archetype) => {
            const { archetype_name } = archetype;

            return { archetype_name };
          });
          store.archetypeList = archetypes;
        })
        .finally(() => {
          this.loader = false;
        });
    },

    fetchForArchetypes(term) {
      const endpoint =
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=" + term;
      this.fetchCard(endpoint);
    },
  },

  created() {
    this.fetchCard(store.apiUri);
    this.fetchArchetype(store.uriArchetype, store.term);
  },
};
</script>

<template>
  <!-- <div @click="fetchCard(store.prova)">ciao</div> -->
  <loader v-if="loader" />
  <AppHeader />
  <AppMain @archetypeSelected="fetchForArchetypes" />
</template>

<style lang="scss"></style>

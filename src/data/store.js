import { reactive } from "vue";

export const store = reactive({
  cardList: [],
  archetypeList: [],
  apiUri: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0/",

  uriArchetype: "https://db.ygoprodeck.com/api/v7/archetypes.php",
});

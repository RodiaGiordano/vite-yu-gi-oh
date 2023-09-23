<script>
export default {
  props: {
    name: String,
    archetype: String,
    image: String,
  },

  data() {
    return {};
  },
};
</script>

<template>
  <div class="col p-0">
    <img :src="image" />
    <div class="card_text">
      <p>{{ name }}</p>
      <p>{{ archetype }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col {
  text-align: center;
  background-color: #d48f38;

  .card_text {
    padding: 0 15px;

    p {
      margin-bottom: 0;
      margin-top: 15px;
    }

    p:first-of-type {
      color: white;
      font-weight: bold;
    }
  }

  img {
    width: 100%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      title: "Hello world",
    };
  },
};
</script>

<template>
  <div class="loader">
    <font-awesome-icon
      :icon="['fas', 'circle-notch']"
      size="10x"
      class="icon_loader"
    />
    <h2>Caricamento...</h2>
  </div>
</template>

<style lang="scss" scoped>
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba($color: #000000, $alpha: 0.6);
  color: whitesmoke;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h2 {
    font-size: 4rem;
  }

  .icon_loader {
    animation-name: rotation;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
}
</style>

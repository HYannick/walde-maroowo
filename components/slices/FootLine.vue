<template>
  <div class="foot-line">
    <div class="polygon"></div>
    <PrismicRichText class="text" :field="slice.primary.text" />
  </div>
</template>

<!-- Composition API -->
<script setup>
import {getSliceComponentProps} from "@prismicio/vue";

// The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
</script>
<style lang="scss">
.foot-line {
  max-width: 80rem;
  text-align: center;
  margin: 10rem auto;
  position: relative;
  padding: 2rem;
  font-size: 2.5rem;
  .polygon {
    position: absolute;
    z-index: -1;
    width: 30rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.1;
    aspect-ratio: 1;
    background: var(--color-primary);
    clip-path: var(--polygon-14);
  }
}

@media  screen and (min-width: 1366px) {
  .foot-line {
    font-size: 3rem;
    padding: 0;
    margin: 20rem auto;
  }
}
</style>
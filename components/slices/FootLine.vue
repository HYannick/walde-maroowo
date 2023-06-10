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
  margin: 20rem auto;
  position: relative;
  font-size: 3rem;
  .polygon {
    position: absolute;
    z-index: -1;
    width: 30rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.4;
    aspect-ratio: 1;
    background: var(--color-primary);
    clip-path: var(--polygon-14);
  }
}
</style>
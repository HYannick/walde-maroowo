<template>
  <div class="container">
    <div class="headline">
      <PrismicRichText class="text -title-1" :field="slice.primary.headline"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {getSliceComponentProps} from '@prismicio/vue';

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
</script>
<style lang="scss">
.headline {
  max-width: 90rem;
  width: 100%;
  padding: 3rem;
  position: relative;
  margin: 40rem 0;
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 40rem;
    right: -2rem;
    top: 5rem;
    opacity: 1;
    scale: 1;
    aspect-ratio: 1;
    background: rgba(216, 152, 79, 0.5);
    clip-path: var(--polygon-14);
  }
}
</style>

<template>
  <div class="foot-note">
    <div class="poly-background"></div>
    <div class="foot-note-content">
      <PrismicText class="text body -light" :field="slice.primary.text"/>
    </div>
  </div>
</template>

<!-- Composition API -->
<script setup>
import {getSliceComponentProps} from "@prismicio/vue";

// The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
</script>
<style lang="scss">
.foot-note {
  text-align: center;
  position: relative;
  font-size: 3rem;
  padding: 5rem;
  &-content {
    max-width: 144rem;
    margin: 0 auto 10rem;
    .text {
      color: var(--color-actions-text);
    }
  }
  .poly-background {
    position: absolute;
    z-index: -1;
    top: -20rem;
    left: 0;
    bottom: 0;
    right: 0;
    background: var(--color-actions-background);
    clip-path: polygon(0 20%, 100% 0%, 100% 100%, 0% 100%);;
  }
}
</style>Œ
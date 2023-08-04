<template>
  <div class="short-intro" data-animate="short-intro" :class="{'-full-height': slice.slice_label === 'full_height'}">
    <div class="divider" data-animate="divider"></div>
    <PrismicRichText class="text intro-text" :field="slice.primary.text"/>
    <div class="divider" data-animate="divider"></div>
  </div>
</template>

<!-- Composition API -->
<script setup>
import {getSliceComponentProps} from "@prismicio/vue";

// The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
</script>
<style lang="scss">
.short-intro {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 2.6rem;
  width: 100%;
  height: 50vh;
  max-width: 100rem;
  text-align: center;
  margin: 0 auto;
  line-height: 4rem;
  &.-full-height {
    height: 100vh;
  }
  .divider {
    background-color: var(--color-primary);
    width: 10rem;
    height: 1rem;
    &:first-child {
      margin-bottom: 5rem;
    }
    &:last-child {
      margin-top: 5rem;
    }
  }
  .intro-text {
    overflow: hidden;
  }
}
@media  screen and (min-width: 1366px) {
  .short-intro {
    font-size: 3.6rem;
    line-height: 7rem;
    margin: 20rem auto;
  }
}
</style>
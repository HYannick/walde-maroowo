<template>
  <div class="stats-display">
    <div class="poly-background"></div>
   <PrismicText class="stats-display-title text" :field="slice.primary.title" />
    <div class="stats-display-data">
      <div class="data-content" v-for="statData in slice.items" :key="statData.text">
        <PrismicText class="data-content-stat" :field="statData.stat" />
        <PrismicText class="data-content-text -large-body -light" :field="statData.text" />
      </div>
      <div class="stats-display-picture">
        <PrismicImage :field="slice.items[0].picture" />
      </div>
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
.stats-display {
  .poly-background {
    position: absolute;
    z-index: -1;
    top: -20rem;
    left: 0;
    bottom: -10rem;
    right: 0;
    background: var(--color-stats-background);
    clip-path: polygon(0 20%, 100% 0%, 100% 100%, 0% 100%);;
  }
  padding: 0 1.5rem;
  text-align: center;
  margin: 40rem auto 0;
  &-title {
    font-family: var(--text-font-title);
    font-size: 5rem;
  }

  .stats-display-data {
    position: relative;
    margin: 10rem auto;
    max-width: 67.5rem;
  }

  &-picture {
    margin: 0 auto;
    width: 67.5rem;
    height: 67.5rem;
    clip-path: var(--polygon-24);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .data-content {
    position: absolute;
    color: var(--color-black);
    cursor: pointer;
    &:hover {
      color: var(--color-primary);
    }
    &-stat {
      font-family: var(--text-font-title);
      font-size: 4.5rem;
    }
    &-text {
      font-family: var(--text-font-light);
      font-size: 3rem;
    }
    &:nth-child(1) {
      top: 5rem;
      left: -20rem;
    }
    &:nth-child(2) {
      top: 2rem;
      right: -20rem;
    }
    &:nth-child(3) {
      bottom: 10rem;
      left: -25rem;
    }
    &:nth-child(4) {
      bottom: 5rem;
      right: -20rem;
    }
  }
}
</style>
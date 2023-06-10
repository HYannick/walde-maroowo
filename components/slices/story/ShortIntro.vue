<template>
  <div class="short-intro-content" data-animate="short-intro">
    <div class="poly-background"></div>
    <div class="content">
      <PrismicText class="text intro-title" :field="slice.primary.title"/>
      <div class="divider" data-animate="divider"></div>
      <PrismicText class="text intro-text -light" :field="slice.primary.text"/>
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
.short-intro-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  text-align: center;
  margin: 30rem auto;
  padding: 0rem 15rem 0;
  .divider {
    background-color: var(--color-primary);
    width: 10rem;
    height: 1rem;
    margin: 5rem auto 4rem;
    &:first-child {
      margin-bottom: 5rem;
    }
    &:last-child {
      margin-top: 5rem;
    }
  }
  .intro-title {
    color: var(--color-actions-text);
    font-size: 5.5rem;
    font-family: var(--text-font-title);
  }
  .intro-text {
    color: var(--color-actions-text);
    font-size: 3.2rem;
  }

  .poly-background {
    position: absolute;
    z-index: -1;
    top: -20rem;
    left: 0;
    bottom: -10rem;
    right: 0;
    background-color: var(--color-actions-background);
    clip-path: polygon(0 20%, 100% 0%, 100% 100%, 0 90%);
  }
}
</style>
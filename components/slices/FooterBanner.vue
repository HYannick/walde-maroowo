<template>
  <div class="footer-banner">
    <div class="footer-banner-headline">
      <PrismicRichText class="text --text-size-overline" :field="slice.primary.title"/>
    </div>
    <div class="footer-banner-pictures">
      <div class="picture-item" v-for="picture in slice.items">
        <PrismicImage :field="picture.image"/>
      </div>
    </div>
  </div>
</template>

<!-- Composition API -->
<script setup>
import {getSliceComponentProps} from "@prismicio/vue";
import {useImageTextAnimation} from "~/composables/animations/home/useImageTextAnimation";

// The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
</script>
<style lang="scss">
.footer-banner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25rem;
  background-color: rgba(var(--color-red-rgba), 0.5);
}
.footer-banner-headline {
  background: var(--color-light);
  padding: 1rem 2rem;
  max-width: 90rem;
  text-align: center;
  .text {
    font-family: var(--text-font-title);
  }
}
.footer-banner-pictures {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  display: flex;
  flex-wrap: nowrap;
  justify-content: stretch;
  width: 100%;

  .picture-item {
    flex: 1;
    &:nth-child(even) {
      flex: 0.5;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
<template>
  <div class="image-text" :class="{'-reverse-order': slice.slice_label === 'reverse_order'}">
    <div class="image-text-content" data-animate="image-text-content">
      <PrismicRichText class="text intro-text -regular" :field="slice.primary.text"/>
    </div>
    <div class="image-text-picture">
      <PrismicImage :field="slice.primary.primary_picture" data-animate="image-text-picture"/>
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
.image-text {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20rem;
  padding: 0 1.5rem;
  font-size: 2.6rem;
  max-width: 144rem;
  gap: 10rem;
  text-align: right;
  .intro-text {
    line-height: 4.5rem;
  }
  &.-reverse-order {
    text-align: left;
    .image-text-content {
      order: 1;
    }
  }
  .image-text-content {
    flex: 1;
  }

  .image-text-picture {
    max-width: 65rem;
    width: 100%;
    height: 50rem;
    border-radius: 1rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
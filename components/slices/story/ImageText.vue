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
  flex-direction: column;
  margin: 0 auto 5rem;
  padding: 0 1.5rem;
  font-size: 2rem;
  max-width: 144rem;
  gap: 5rem;
  text-align: right;
  .intro-text {
    line-height: 3.5rem;
    text-align: justify;
  }

  .image-text-content {
    flex: 1;
    order: 2;
  }

  .image-text-picture {
    max-width: 65rem;
    width: 100%;
    height: 30rem;
    border-radius: 1rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@media  screen and (min-width: 1366px) {
  .image-text {
    flex-direction: row;
    gap: 10rem;
    text-align: right;
    font-size: 2.6rem;
    margin: 0 auto 30rem;
    .intro-text {
      line-height: 4.5rem;
    }
    &.-reverse-order {
      text-align: left;
      .image-text-content {
        order: 2;
      }
      .image-text-picture {
        order: 1;
      }
    }
    .image-text-content {
      order: 1;
    }
    .image-text-picture {
      order: 2;
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
}
</style>
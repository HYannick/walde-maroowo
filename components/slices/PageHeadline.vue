<template>
  <div class="container">
    <div class="page-headline" :class="{'page-headling-image-variant': slice.slice_label === 'with_image'}">
      <PrismicRichText class="page-headline-title text -title-1" :field="slice.primary.text"/>
      <div class="video-bloc" v-if="slice.slice_label === 'with_video'">
        <YoutubePlayer :videoUrl="slice.primary.video.url"/>
      </div>
      <div class="image-bloc" v-if="slice.slice_label === 'with_image'">
        <PrismicImage :field="slice.primary.picture"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {getSliceComponentProps} from '@prismicio/vue';
import YoutubePlayer from '~/components/slices/YoutubePlayer.vue';

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
</script>
<style lang="scss">
.video-bloc {
  width: 90rem;
  height: 50rem;
  background: var(--color-black);
  position: absolute;
  top: 25rem;
  right: 0rem;
  border-radius: 1rem;
  overflow: hidden;
}

.page-headline {
  width: 100%;
  position: relative;
  margin: 10rem 0;

  h1 {
    font-size: 6rem;
  }
  &.page-headling-image-variant {
    display: flex;
    align-items: center;
    gap: 5rem;
    .page-headline-title {
      flex: 1.2;
      h1 {
        font-size: 5rem;
      }
    }
    .image-bloc {
      flex: 1;
      clip-path: var(--polygon-24);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 30rem;
    left: -3rem;
    top: -6rem;
    opacity: 1;
    scale: 1;
    aspect-ratio: 1;
    background: rgba(216, 152, 79, 0.2);
    clip-path: var(--polygon-14);
  }
}
</style>

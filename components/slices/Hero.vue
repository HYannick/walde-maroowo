<template>
  <div class="hero">
    <div class="hero-slider">
        <Carousel :slides="images" />
    </div>
    <div class="hero-description">
      <div class="sub-heading">
        <div class="polygon" data-animate="polygon"></div>
        <PrismicRichText data-splitting class="text" :field="slice.primary.description"/>
      </div>
      <div class="heading">
        <div class="polygon" data-animate="polygon"></div>
        <PrismicRichText data-splitting class="text" :field="slice.primary.title" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {getSliceComponentProps} from "@prismicio/vue";
import Carousel from "~/components/common/Carousel.vue";
import {computed} from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const props = defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
const images = computed(() => props.slice.items.map((item, id) => ({...item, id})))
</script>

<style lang="scss">
.hero {
  position: relative;
  width: 100%;
  max-width: 192rem;
  margin: 0 auto;
  &-slider {
    translate: -10rem 0;
    width: 115rem;
    height: 95rem;
    position: relative;
  }

  &-control-wrapper {
    position: absolute;
    width: 13rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-background);
    aspect-ratio: 1;
    clip-path: var(--controls-clip-path);
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 13rem;
      transform: scale(0.8);
      background: var(--color-black);
      aspect-ratio: 1;
      clip-path: var(--controls-clip-path);
    }
    &.control-left {
      bottom: 8rem;
      left: 10.5rem;
    }
    &.control-right {
      top: 15rem;
      right: 3.5rem;
    }
  }

  &-description {
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 5rem;
    position: absolute;
    right: 0;
    bottom: 10rem;
  }
}

.slide {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}

.polygon-container {
  width: 100%;
  height: 100%;
  }

.sub-heading {
  font-size: 3.6rem;
  line-height: 3.6rem;
  width: 42rem;
  margin-bottom: 15rem;
  margin-right: 10rem;

  p {
    font-family: var(--text-font-bold);
    overflow: hidden;
    strong {
      color: var(--color-primary)
    }
  }
  .polygon {
    position: absolute;
    z-index: -1;
    width: 8rem;
    top: -2rem;
    left: -2rem;
    opacity: 0;
    scale: 0.5;
    aspect-ratio: 1;
    background: rgba(41, 41, 41, 0.10);
    clip-path: var(--polygon-14);
  }
}

.heading {
  position: relative;
  margin-right: 5rem;

  h1 {
    font-size: 12rem;
    width: 60rem;
    text-align: right;
    overflow: hidden;
    line-height: 12rem;
    font-family: var(--text-font-title);
  }

  .polygon {
    content: '';
    position: absolute;
    z-index: -1;
    width: 33rem;
    right: -4rem;
    bottom: -2rem;
    opacity: 0;
    scale: 0.5;
    aspect-ratio: 1;
    background: rgba(248, 150, 63, 0.20);
    clip-path: var(--polygon-14);
  }
}
</style>
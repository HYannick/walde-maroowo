<template>
  <div class="image-title-text-container" :class="{ '-reverse-order': slice.slice_label === 'polygon_with_link' }">
    <div class="image-title-text" :class="variants">
      <div class="image-title-text-content">
        <PrismicText class="image-title-text-title" :field="slice.primary.title"/>
        <PrismicText class="image-title-text-description text -large-body -light" :field="slice.primary.text"/>
        <NuxtLink v-if="slice.primary.link && slice.primary.link.uid" :to="`/actions/${slice.primary.link.uid}`" class="image-title-text-link text -bold link">Découvrir</NuxtLink>
      </div>
      <div class="image-title-text-pictures">
        <PrismicImage class="image-title-text-picture" :field="slice.primary.primary_picture"/>
        <PrismicImage class="image-title-text-picture" v-if="slice.slice_label === 'with_two_pictures'" :field="slice.primary.secondary_picture"/>
        <div claess="polygon"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {getSliceComponentProps} from "@prismicio/vue";

const {slice} = defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));

const variants = computed(() => ({
  '-reverse-order': slice.slice_label === 'reverse_order' || slice.slice_label === 'polygon_with_link_reversed',
  '-with-two-pictures': slice.slice_label === 'with_two_pictures',
  '-with-polygon': slice.slice_label === 'polygon_with_link' || slice.slice_label === 'polygon_with_link_reversed'
}))
</script>

<style lang="scss">
.image-title-text-container {
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.image-title-text-link {
  margin-top: 2rem;
  font-size: 2rem;
  cursor: pointer;
}

.image-title-text {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  text-align: justify;
  margin-top: 10rem;
  &-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 2;
    margin-top: 4rem;
  }

  &-title {
    color: var(--color-black);
    font-family: var(--text-font-title);
    font-size: 5.5rem;

    &:after {
      content: '';
      display: block;
      background-color: var(--color-black);
      opacity: 0.2;
      width: 5rem;
      height: 0.8rem;
      margin: 0 auto 3rem;
    }
  }

  &-picture {
    width: 100%;
    height: 30rem;
    overflow: hidden;
    border-radius: 1rem;
    object-fit: cover;
  }

  &-pictures {
    display: flex;
    flex-direction: column;
    order: 1;
  }

  &.-with-polygon {
    align-items: center;
    .image-title-text-pictures {
      width: 100%;
      clip-path: var(--polygon-24);
      aspect-ratio: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .image-title-text-description {
      display: block;
      max-width: 65rem;
      font-size: 2.5rem;
      text-align: center;
    }
    .image-title-text-title {
      font-family: var(--text-font-title);
      font-size: 3.5rem;
      margin-bottom: 2rem;
      text-align: center;
      &:after {
        content: '';
        display: none;
      }
    }
  }
  &.-with-two-pictures {
    margin-top: 0;
    .image-title-text-content {
      order: 2;
    }

    .image-title-text-pictures {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: relative;

      .polygon {
        position: absolute;
        z-index: -1;
        width: 80rem;
        top: 10%;
        right: -10rem;
        aspect-ratio: 1;
        background: rgba(41, 41, 41, 0.10);
        clip-path: var(--polygon-14);
      }
    }

    .image-title-text-picture:first-child {
      margin-bottom: 5rem;
    }
  }
}
@media  screen and (min-width: 1366px) {
  .image-title-text-container {
    max-width: 144rem;
    width: 100%;
    margin: 0 auto 15rem;
    &.-reverse-order {
      justify-content: flex-end;
    }
  }
  .image-title-text {
    display: flex;
    gap: 6rem;
    text-align: right;
    flex-direction: row;
    padding: 0rem;
    margin-top: 10rem;
    &.-reverse-order {
      text-align: left;
      .image-title-text-content {
        order: 2;
        align-items: flex-start;
        .image-title-text-description {
          display: block;
          max-width: 65rem;
          font-size: 2.5rem;
          text-align: left;
        }
      }

    }

    &-content {
      align-items: flex-end;
      order: 1;
      margin-top: 0;
    }

    &-title:after {
        text-align: right;
        margin: 0 0 3rem;
    }

    &-picture {
      width: 50rem;
      height: 46rem;
    }

    &.-with-polygon {
      align-items: center;
      .image-title-text-pictures {
        width: 50rem;
        height: 50rem;
        clip-path: var(--polygon-24);
        aspect-ratio: 1;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .image-title-text-description {
        display: block;
        max-width: 65rem;
        font-size: 2.5rem;
        text-align: right;
      }
      .image-title-text-title {
        font-family: var(--text-font-title);
        font-size: 3.5rem;
        margin-bottom: 2rem;
        &:after {
          content: '';
          display: none;
        }
      }
    }
    &.-with-two-pictures {
      .image-title-text-content {
        order: 2;
        align-items: flex-start;
      }

      .image-title-text-picture:first-child {
        max-width: 100rem;
        width: 100%;
      }
    }
  }
}
</style>
<template>
  <div class="drop-down-content">
    <div class="drop-down-content-item" :class="{'-active': activeIndex === index}" v-for="(item, index) in slice.items" :key="index" @click="toggleContent(index)">
      <PrismicRichText class="drop-down-content-title text" :field="item.title" />
      <PrismicRichText class="drop-down-content-text text -body -light"  :field="item.text" />
    </div>
  </div>
</template>

<!-- Composition API -->
<script setup>
import {getSliceComponentProps} from "@prismicio/vue";

// The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
const activeIndex = ref(0)
const toggleContent = (index) => {
  if(activeIndex.value === index) {
    activeIndex.value = null;
    return;
  }
  activeIndex.value = index;
}
</script>
<style lang="scss">
.drop-down-content {
  max-width: 144rem;
  margin: 10rem auto;
  &-item {
    .drop-down-content-text {
      display: none;
      margin-top: 3rem;
    }
    &.-active {
      .drop-down-content-text {
        display: block;
      }
    }
  }
  &-title {
    font-family: var(--text-font-title);
    font-size: 6rem;
    cursor: pointer;
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 0.1rem;
      background-color: var(--color-black);
      transform: scaleX(1);
    }
  }
}
</style>
<template>
  <div class="footer-nav-list">
    <div class="footer-nav-list-heading">
      <PrismicText :field="slice.primary.title"/>
    </div>
    <div class="footer-nav-list-items">
      <ul>
        <li v-for="item in slice.items"><NuxtLink class="link-style" :to="item.nav_link.uid">{{item.label[0].text}}</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {getSliceComponentProps} from '@prismicio/vue';

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));

</script>
<style lang="scss">
.footer-nav-list {
  &-heading {
    font-size: 3rem;
    font-family: var(--text-font-title);
    position: relative;
    color: var(--color-black);
    &:before {
      content: '';
      position: absolute;
      top: -2.5rem;
      left: -4rem;
      width: 9rem;
      height: 8rem;
      transform: rotate(45deg);
      clip-path: var(--polygon-14);
      background-color: var(--color-heading-footer-polygon);
    }
  }
  &-items {
    margin-top: 3rem;
    ul {
      list-style: none;
      padding: 0;
      font-family: var(--text-font-regular);
      font-size: 1.8rem;
      li {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>

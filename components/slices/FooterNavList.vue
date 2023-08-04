<template>
  <div class="footer-nav-list">
    <div class="footer-nav-list-heading">
      <PrismicText :field="slice.primary.title"/>
    </div>
    <div class="footer-nav-list-items">
      <ul>
        <li v-for="item in slice.items">
          <NuxtLink v-if="item.nav_link.url" class="link-style" :to="item.nav_link.url" target="_blank">{{item.label[0].text}}</NuxtLink>
          <NuxtLink v-else class="link-style" :to="item.nav_link.uid">{{item.label[0].text}}</NuxtLink>
        </li>
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
    text-align: center;
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
      display: none;
    }
  }
  &-items {
    margin-top: 3rem;
    ul {
      list-style: none;
      padding: 0;
      font-family: var(--text-font-regular);
      font-size: 1.8rem;
      text-align: center;
      li {
        margin-bottom: 1rem;
      }
    }
  }
}

@media  screen and (min-width: 1366px) {
  .footer-nav-list {
    &-heading {
      text-align: left;
      &:before {
        display: block;
      }
    }
    &-items {
      ul {
        text-align: left;
      }
    }
  }
}
</style>

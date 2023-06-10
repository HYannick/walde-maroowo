<template>
  <div class="footer-links-bloc">
    <PrismicText class="text -light" :field="footerLinks.primary.copyrights" />
    <ul class="footer-links-items">
      <li v-for="item in footerLinks.items"><NuxtLink class="text -light link-style" :to="item.link.uid">{{item.label[0].text}}</NuxtLink></li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import {getSliceComponentProps} from '@prismicio/vue';

const props = defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));


const footerLinks = computed(() => props.slice[0])
</script>
<style lang="scss">
.footer-links-bloc {
  border-top: 0.1rem solid var(--footer-border-color);
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  margin-top: 6rem;
  .footer-links-items {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 4rem;
  }
}
</style>

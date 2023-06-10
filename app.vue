<template>
  <div>
    <slice-zone :slices="nav.body" :components="slices" />
    <NuxtPage />
    <Footer :data="foot.body" />
  </div>
</template>

<script setup lang="ts">
import {defineSliceZoneComponents, usePrismic} from '@prismicio/vue';
import Header from '~/components/slices/Header.vue';
import Footer from '~/components/slices/Footer.vue';

const { client } = usePrismic()
const { data: navigation } = await useAsyncData('navigation', () => client.getByUID('navigation', 'navigation')) as any
const { data: footer } = await useAsyncData('footer', () => client.getByUID('footer', 'footer')) as any
const nav = navigation.value.data
const foot = footer.value.data

const slices = defineSliceZoneComponents({
  navigation_item: Header,
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
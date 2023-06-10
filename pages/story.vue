<template>
  <div class="story">
    <slice-zone :slices="doc.body" :components="slices"/>
  </div>
</template>
<script setup lang="ts">
import {usePrismic, defineSliceZoneComponents} from '@prismicio/vue';
import PageHeadline from '~/components/slices/PageHeadline.vue';
import ShortIntro from '~/components/slices/story/ShortIntro.vue';
import ImageTitleText from '~/components/slices/ImageTitleText.vue';
import ImageText from '~/components/slices/story/ImageText.vue';

const {client} = usePrismic()
const {data: story} = await useAsyncData('story', () => client.getByUID('story', 'story')) as any
const doc = story.value.data
const slices = defineSliceZoneComponents({
  pageheadline: PageHeadline,
  short_introduction: ShortIntro,
  image_title_text: ImageTitleText,
  image_text: ImageText
})
</script>
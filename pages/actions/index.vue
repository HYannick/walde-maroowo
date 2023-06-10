<template>
  <div class="actions-page">
    <slice-zone :slices="doc.body" :components="slices"/>
  </div>
</template>
<script setup lang="ts">
import {usePrismic, defineSliceZoneComponents} from '@prismicio/vue';
import PageHeadline from '~/components/slices/PageHeadline.vue';
import ShortIntro from '~/components/slices/ShortIntro.vue';
import ImageTitleText from '~/components/slices/ImageTitleText.vue';
import DropDownContent from '~/components/slices/DropDownContent.vue';
import FootLine from '~/components/slices/FootLine.vue';

const {client} = usePrismic()
const {data: actions} = await useAsyncData('actions', () => client.getByUID('actions', 'actions')) as any
const doc = actions.value.data
const slices = defineSliceZoneComponents({
  pageheadline: PageHeadline,
  short_introduction: ShortIntro,
  image_title_text: ImageTitleText,
  dropdown_content: DropDownContent,
  foot_line: FootLine
})
</script>
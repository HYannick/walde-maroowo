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
import FootNote from '~/components/slices/FootNote.vue';

const route = useRoute();

const {client} = usePrismic()
const {data: actions} = await useAsyncData('action', () => client.getByUID('action', route.params.uid)) as any
const doc = actions.value.data

const slices = defineSliceZoneComponents({
  pageheadline: PageHeadline,
  short_introduction: ShortIntro,
  image_title_text: ImageTitleText,
  dropdown_content: DropDownContent,
  foot_line: FootNote
})
</script>
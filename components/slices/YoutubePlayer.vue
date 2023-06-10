<template>
  <div class="embed-video">
    <YoutubeVue3 ref="youtube" :videoid="videoId" width='100%' height='100%' autoplay="false"/>
  </div>
</template>

<script setup>
import {YoutubeVue3} from 'youtube-vue3'

const props = defineProps(['videoUrl'])

const videoId = computed(() => {
  const searchParams = new URLSearchParams(new URL(props.videoUrl).search);
  return searchParams.get('v');
})
</script>

<style lang="scss">
.embed-video {
  width: 100%;
  height: 100%;
}
</style>
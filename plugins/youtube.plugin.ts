import {YoutubeVue3} from 'youtube-vue3';
export default defineNuxtPlugin(() => {
  return {
    provide: {
      YoutubeVue3,
    }
  }
})
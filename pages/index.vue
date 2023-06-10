<template>
  <div class="home">
    <slice-zone :slices="doc.body" :components="slices"/>
  </div>
</template>
<script setup lang="ts">
import {usePrismic, defineSliceZoneComponents} from '@prismicio/vue';
import Hero from '~/components/slices/Hero.vue';
import ShortIntro from '~/components/slices/ShortIntro.vue';
import CountryMapLayout from '~/components/slices/country-map/CountryMapLayout.vue';
import {useMapSectionAnimation} from '~/composables/animations/home/useMapSectionAnimation';
import {useIntroAnimation} from '~/composables/animations/home/useIntroAnimation';
import {useHeroAnimation} from '~/composables/animations/home/useHeroAnimation';
import ActionResumeLayout from '~/components/slices/action-resume/ActionResumeLayout.vue';
import Headline from '~/components/slices/Headline.vue';
import ImageText from '~/components/slices/ImageText.vue';
import StatsDisplay from '~/components/slices/StatsDisplay.vue';
import FooterBanner from '~/components/slices/FooterBanner.vue';

const {client} = usePrismic()
const {data: home} = await useAsyncData('home', () => client.getByUID('homepage', 'homepage')) as any
const doc = home.value.data
const slices = defineSliceZoneComponents({
  hero_carousel: Hero,
  short_introduction: ShortIntro,
  country_map: CountryMapLayout,
  action_resume: ActionResumeLayout,
  headline: Headline,
  image_text: ImageText,
  stats_display: StatsDisplay,
  banner: FooterBanner,
})

onMounted(() => {
  useHeroAnimation().start()
  useIntroAnimation().start();
  useMapSectionAnimation().start();
})
</script>
<template>
  <div class="country-map-actions">
    <div class="title">
      <div class="polygon"></div>
      <PrismicRichText data-splitting class="text -title-1" :field="slice.primary.maptitle"/>
    </div>
    <div class="map">
      <CountryDetails :city="city" v-for="(city) in cities" />
      <Map @selectedCity="setCity" :current-city-index="currentCityIndex" />
    </div>
  </div>
</template>
<script setup lang="ts">
import {getSliceComponentProps} from "@prismicio/vue";
import {CountryMapEntry} from '~/components/slices/country-map/CountryMapEntry';
import {Ref} from 'vue';
import CountryDetails from '~/components/slices/country-map/CountryDetails.vue';
import Map from '~/components/slices/country-map/Map.vue';


const props = defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));

const currentCityIndex = ref(0);
const currentDetails: Ref<CountryMapEntry | null> = ref(null);
const details: Ref<CountryMapEntry[]> = ref([]);
const isAnimating = ref(false);

const setCity = async (index: number) => {
  if(isAnimating.value || index === currentCityIndex.value) return;
  currentCityIndex.value = index;
  const newEntry = details.value[index];
  await updateCity(newEntry);
}

const updateCity = (newEntry: CountryMapEntry) => {
  isAnimating.value = true;
  return Promise.all([
    currentDetails.value!.hide(),
    newEntry.show(),
  ]).then(() => {
    currentDetails.value!.DOM.el.classList.remove('map-details-container--current');
    newEntry.DOM.el.classList.add('map-details-container--current');
    currentDetails.value = newEntry;
    isAnimating.value = false;
  })
};

const cities = computed(() =>
    props.slice.items.map((city: any, i: number) =>
        ({
          id: i,
          title: city.cityname,
          description: city.citydescription,
          picture_1: city.picture_1,
          picture_2: city.picture_2,
          picture_3: city.picture_3
        })
    ))

onMounted(() => {
  const mapContainer = document.querySelector('.map')!
  const detailsContainer = mapContainer.querySelectorAll('.map-details-container')
  detailsContainer[0].classList.add('map-details-container--current');
  details.value = Array.from(detailsContainer, (el) => new CountryMapEntry(el));
  currentDetails.value = details.value[currentCityIndex.value]
})
</script>
<style lang="scss">
.country-map-actions {
  position: relative;
  .divider {
    background-color: var(--color-primary);
    border: transparent;
    opacity: 0.1;
    height: 0.2rem;
    margin-bottom: 1rem;
  }
  .map-details-container {
    width: 100%;
    height: 100%;
    z-index: 0;
    position: absolute;

    &:not(.map-details-container--current) {
      .city-name, .city-description, .city-picture > img {
        opacity: 0;
      }
    }
  }

  .city-location {
    position: relative;
    z-index: 2;
    width: 5rem;
    background: var(--color-primary);
    aspect-ratio: 1;
    clip-path: polygon(100.00% 50.00%, 85.36% 85.36%, 50.00% 100.00%, 14.64% 85.36%, 0.00% 50.00%, 14.64% 14.64%, 50.00% 0.00%, 85.36% 14.64%);
  }

  margin: 0 auto;
  max-width: 144rem;
  width: 100%;

  .title {
    font-size: 4rem;

    .polygon {
      position: absolute;
      z-index: -1;
      width: 30rem;
      top: -15rem;
      left: -20rem;
      aspect-ratio: 1;
      background: rgba(41, 41, 41, 0.10);
      clip-path: var(--polygon-14);
    }
  }

  .map {
    width: 60rem;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    .map-region {
      stroke: var(--map-stroke);
      stroke-width: 0.2rem;
      fill: var(--map-fill);;
    }

    .map-dot {
      cursor: pointer;
      fill: var(--map-dot-color);
      stroke: var(--map-dot-color);
      stroke-width: 0;
      transition: stroke-width 0.6s cubic-bezier(0.65, 0, 0.35, 1);
      &--active {
        fill: var(--color-primary);
        stroke: var(--color-primary);
        stroke-width: 5;
      }
    }

    .city-details {
      position: absolute;
      max-width: 46rem;
      width: 100%;
      top: 5rem;
      left: -42rem;
      overflow: hidden;
      height: 14rem;

      .city-name {
        color: var(--color-primary);
        font-family: var(--text-font-bold);
      }
    }

    .city-picture {
      position: absolute;
      aspect-ratio: 1;
      clip-path: var(--polygon-14);
      display: flex;
      align-items: center;
      justify-content: center;

      &-first {
        width: 43rem;
        height: 43rem;
        bottom: 30rem;
        left: -43rem;
      }

      &-second {
        width: 43rem;
        height: 43rem;
        top: 0rem;
        right: -45rem;
      }

      &-third {
        width: 26rem;
        height: 26rem;
        bottom: 30rem;
        right: calc(-26rem + 15rem);
      }

      img {
        object-fit: cover;
        width: 100%;
        height: 120%;
      }
    }
  }
}
</style>
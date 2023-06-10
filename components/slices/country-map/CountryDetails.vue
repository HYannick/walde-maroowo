<template>
  <div class="map-details-container">
    <div class="city-details">
      <div class="ov-hidden">
        <PrismicRichText class="text -bold city-name" :field="city.title"/>
      </div>
      <hr class="divider"/>
      <div class="ov-hidden">
        <PrismicRichText class="text city-description" :field="city.description"/>
      </div>
    </div>
    <div class="city-picture city-picture-first" data-animate="city-picture">
      <PrismicImage :field="city.picture_1"/>
    </div>
    <div class="city-picture city-picture-second" data-animate="city-picture">
      <PrismicImage :field="city.picture_2"/>
    </div>
    <div class="city-picture city-picture-third" data-animate="city-picture">
      <PrismicImage :field="city.picture_3"/>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['city'])
</script>
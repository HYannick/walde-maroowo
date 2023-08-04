<template>
  <div class="footer-contact-bloc">
    <div class="contact-information">
      <PrismicText class="text -bold -body" :field="contactInfos.name"/>
      <PrismicText  class="text -body" :field="contactInfos.address"/>
      <PrismicText  class="text -body" :field="contactInfos.phone"/>
      <PrismicText class="text -body"  :field="contactInfos.email"/>
    </div>
    <PrismicImage class="contact-logo" :field="contactInfos.picture" />
  </div>
</template>
<script lang="ts" setup>
import {getSliceComponentProps} from '@prismicio/vue';

const props = defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));

const contactInfos = computed(() => props.slice[0].primary)

</script>
<style lang="scss">
.footer-contact-bloc {
  display: flex;
  gap: 4rem;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
  .contact-information {
    text-align: center;
    order: 2;
  }
}
@media  screen and (min-width: 1366px) {
  .footer-contact-bloc {
    flex-direction: row;
    margin-top: 0;
    .contact-information {
      order: 1;
      text-align: right;
    }
    .contact-logo {
      order: 2;
    }
  }
}
</style>

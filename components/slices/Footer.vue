<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-top-content">
        <div class="footer-navigation">
          <template v-for="slice in navListSlices">
            <FooterNavList :slice="slice" />
          </template>
        </div>
        <div class="footer-contact">
          <FooterContactBloc :slice="contactSlice" />
        </div>
      </div>
      <div class="footer-links">
        <FooterLinks :slice="footerLinkSlice" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FooterNavList from "~/components/slices/FooterNavList.vue";
import FooterContactBloc from '~/components/slices/FooterContactBloc.vue';
import FooterLinks from '~/components/slices/FooterLinks.vue';

const props = defineProps(['data'])

const findSliceByType = (slices: any, type: string) => slices.filter((slice: any) => slice.slice_type === type)
const navListSlices = computed(() => {
  return findSliceByType(props.data, 'footer_navlist')
})

const contactSlice = computed(() => {
  return findSliceByType(props.data, 'contact_block')
})

const footerLinkSlice = computed(() => {
  return findSliceByType(props.data, 'footer_links')
})
</script>

<style lang="scss">
.footer {
  border-top: 0.1rem solid var(--footer-border-color);
  margin-top: 5rem;
  &-container {
    max-width: 144rem;
    width: 100%;
    margin: 0 auto;
    padding: 5rem 1rem 0;
  }
  &-navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }
  &-top-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}

@media  screen and (min-width: 1366px) {
  .footer {
    border-top: 0.1rem solid var(--footer-border-color);
    margin-top: 5rem;
    &-container {
      max-width: 144rem;
      width: 100%;
      margin: 0 auto;
      padding: 5rem 1rem 0;
    }
    &-navigation {
      flex-direction: row;
      align-items: flex-start;
      gap: 10rem;
    }
    &-top-content {
      flex-direction: row;
    }
  }
}
</style>
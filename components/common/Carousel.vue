<template>
  <div class="carousel-wrapper" ref="carousel" data-animate="carousel">
    <div class="poly">
      <div class="carousel-item" v-for="item in slides" :key="item.id"  ref="firstImage" data-animate="first-image">
        <PrismicImage class="slide" :field="item.slide"/>
      </div>
    </div>
    <div class="hero-control-wrapper control-left" @click="navigate('prev')">
      <Icon name="arrow-left" class="icon-w-40 icon-stroke-color-light"/>
    </div>
    <div class="hero-control-wrapper control-right" @click="navigate('next')">
      <Icon name="arrow-right" class="icon-w-40 icon-stroke-color-light"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Icon from '~/components/common/Icon.vue';
type NavDirection = 'prev' | 'next';
defineProps(['slides', 'enableDots']);
const firstImage = ref();
defineExpose({firstImage})
const carousel = ref();
const slideCount = ref('');
const slideIndex = ref(0);

const addCurrentSlideNumber = (slides:HTMLElement[]) => {
  const lengthOfSlide = slides.length;
  slideCount.value = `${slideIndex.value + 1} / ${lengthOfSlide}`;
};

const activateSlide = (slides: HTMLElement[]) => {
  slides.find(slide => slide.getAttribute('data-active-slide'))?.removeAttribute('data-active-slide');
  slides[slideIndex.value].setAttribute('data-active-slide', 'true');
};

const showslides = (carouselWrapper: HTMLElement) => {
  const slides = Array.from(carouselWrapper.querySelectorAll('.carousel-item')) as HTMLElement[];
  if (slideIndex.value > slides.length - 1) {
    slideIndex.value = 0;
  }
  if (slideIndex.value < 0) {
    slideIndex.value = slides.length - 1;
  }
  activateSlide(slides);
  addCurrentSlideNumber(slides);
};

const nextOrPrevSlide = (dir: NavDirection) => {
  if (dir === 'next') {
    slideIndex.value++;
    showslides(carousel.value);
  } else {
    slideIndex.value--;
    showslides(carousel.value);
  }
};

const navigate = (dir: NavDirection) => {
  if (dir === 'next') {
    nextOrPrevSlide('next');
  } else {
    nextOrPrevSlide('prev');
  }
};

onMounted(() => {
  showslides(carousel.value);
});
</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
}

.poly {
  width: 100%;
  height: 100%;
  clip-path: polygon(100.00% 50.00%, 99.20% 58.93%, 96.81% 67.57%, 92.92% 75.64%, 87.65% 82.90%, 81.17% 89.09%, 73.69% 94.03%, 65.45% 97.55%, 56.71% 99.55%, 47.76% 99.95%, 38.87% 98.75%, 30.35% 95.98%, 22.46% 91.73%, 15.45% 86.14%, 9.55% 79.39%, 4.95% 71.69%, 1.80% 63.30%, 0.20% 54.48%, 0.20% 45.52%, 1.80% 36.70%, 4.95% 28.31%, 9.55% 20.61%, 15.45% 13.86%, 22.46% 8.27%, 30.35% 4.02%, 38.87% 1.25%, 47.76% 0.05%, 56.71% 0.45%, 65.45% 2.45%, 73.69% 5.97%, 81.17% 10.91%, 87.65% 17.10%, 92.92% 24.36%, 96.81% 32.43%, 99.20% 41.07%);
}

.carousel-wrapper .slide-number {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #fff;
  z-index: 2;
}

.carousel-wrapper .carousel-item {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  z-index: 1;
}

.carousel-wrapper .carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0;
  transform: scale(1.1);
  transition: opacity 1s cubic-bezier(0.65, 0, 0.35, 1), transform 1s cubic-bezier(0.65, 0, 0.35, 1);
}

.carousel-wrapper .carousel-item[data-active-slide] img {
  opacity: 1;
  transform: scale(1);
  transition: opacity 1s cubic-bezier(0.65, 0, 0.35, 1), transform 1s cubic-bezier(0.65, 0, 0.35, 1);
}
</style>
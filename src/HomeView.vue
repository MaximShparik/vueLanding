<template>
  <swiper
    :direction="'vertical'"
    :effect="'creative'"
    :creative-effect="{
      prev: {
        translate: [0, '-100%', -100],  // Слайд отдаляется по оси Z (отдалённость нижнего края)
        opacity: 0.5,
        rotate: [-50, 0, 0],  // Поворот по оси X (наклон вниз)
      },
      next: {
        translate: [0, '100%', 100],  // Слайд подъезжает снизу, увеличивается на оси Z (приближается)
        opacity: 1,
        rotate: [50, 0, 0],  // Поворот по оси X (наклон вверх)
      }
    }"
    class="mySwiper"
  >
    <swiper-slide><FirstSection /></swiper-slide>
    <swiper-slide><SecondSection /></swiper-slide>
    <swiper-slide><ThirdSection /></swiper-slide>
    <swiper-slide><FourthSection /></swiper-slide>
  </swiper>
</template>

<script>
import FirstSection from '@/sections/FirstSection.vue';
import SecondSection from '@/sections/SecondSection.vue';
import ThirdSection from '@/sections/ThirdSection.vue';
import FourthSection from '@/sections/FourthSection.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';  // Правильный импорт для Swiper 7+
import 'swiper/css/effect-creative';  // Если используешь эффект Creative
import 'swiper/css/pagination';  // Если используешь пагинацию

import SwiperCore, { EffectCreative, Pagination } from 'swiper';
SwiperCore.use([EffectCreative, Pagination]);

export default {
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    Swiper,
    SwiperSlide
  }
};
</script>

<style scoped>
.mySwiper {
  height: 100vh;
  height: 100dvh;
}

.swiper-slide {
  height: 100vh;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
}
</style>

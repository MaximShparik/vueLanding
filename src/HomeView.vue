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
    <swiper-slide><FirstSection :article="article" /></swiper-slide>
    <swiper-slide><SecondSection :article="article" /></swiper-slide>
    <swiper-slide><ThirdSection /></swiper-slide>
    <swiper-slide><FourthSection /></swiper-slide>
  </swiper>
</template>

<script>
import FirstSection from '@/sections/FirstSection.vue';
import SecondSection from '@/sections/SecondSection.vue';
import ThirdSection from '@/sections/ThirdSection.vue';
import FourthSection from '@/sections/FourthSection.vue';

import data from '@/data/articles.json'

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
  },
  data() {
    return {
			articles: data
    };
  },
  computed: {
    article () {
      if (this.articles[this.$route.params.id]) return this.articles[this.$route.params.id]
      return Object.values(this.articles)[0]
    }
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

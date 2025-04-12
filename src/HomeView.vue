<template>

	<swiper
    :direction="'vertical'"
		:pagination="{
      clickable: true,
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
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

export default {
	components: {
		FirstSection,
		SecondSection,
		ThirdSection,
		FourthSection,
		Swiper,
		SwiperSlide
	},
	// setup() {
	// 	return {
	// 		modules: [Pagination],
	// 	};
	// },
}
</script>

<style scoped>

</style>
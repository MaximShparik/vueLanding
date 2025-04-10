<template>

	<FirstSection />
	<SecondSection />
	<ThirdSection />
	<!-- <FourthSection /> -->
	<div class="navigation">
		Swipe up for more information.
	</div>

</template>

<script>
import FirstSection from '@/sections/FirstSection.vue';
import SecondSection from '@/sections/SecondSection.vue';
import ThirdSection from '@/sections/ThirdSection.vue';
// import FourthSection from '@/sections/FourthSection.vue';

export default {
	components: {
		FirstSection,
		SecondSection,
		ThirdSection,
		// FourthSection
	}
}
</script>

<style scoped>
.navigation {
	position: absolute;
	bottom: 60px;
	width: 100%;
	text-align: center;
	color: #333;
	font-size: 18px;
	font-family: 
  system-ui, 
  -apple-system, 
  BlinkMacSystemFont, 
  'Segoe UI', 
  Roboto, 
  Oxygen, 
  Ubuntu, 
  Cantarell, 
  'Open Sans', 
  'Helvetica Neue', 
  sans-serif;
	letter-spacing: 0.6px; /* отступ в тексте*/
}

</style>
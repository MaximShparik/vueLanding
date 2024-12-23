<template>

	<main-section v-if="isAuthenticated"></main-section>
	<!-- <about-section></about-section> -->
	<!-- <service-section></service-section> -->
	<!-- <portfolio-section></portfolio-section> -->
	<!-- <contact-section></contact-section> -->

</template>

<script>
import MainSection from '@/sections/MainSection.vue';
// import AboutSection from '@/sections/AboutSection.vue';
// import ServiceSection from '@/sections/ServiceSection.vue';
// import PortfolioSection from '@/sections/PortfolioSection.vue';
// import ContactSection from '@/sections/ContactSection.vue';

export default {
	components: {
		MainSection,
		// AboutSection,
		// ServiceSection,
		// PortfolioSection,
		// ContactSection,
	},

	data() {
    return {
      isAuthenticated: true, // Флаг доступа
      correctPassword: "nft", // Установите ваш пароль
    };
  },
  mounted() {
    // this.checkAccess()
  },
  methods: {
    checkAccess() {
      const userInput = window.prompt("Введите пароль для доступа к сайту:")
      if (userInput === this.correctPassword) {
        this.isAuthenticated = true
      } else {
        window.location.href = "https://google.com"
      }
    },
  },
}
</script>

<style scoped>


</style>
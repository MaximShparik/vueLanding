<template>

	<section class="h-screen px-12 lg:px-32 py-32">
		<div class="w-full md:w-1/2 h-full flex flex-col md:justify-center ">
			<h1 class="uppercase text-7xl font-semibold" style="color: #f90000;">
				SOSAL GUBAMI ???
			</h1>
		</div>

		<video
			src="@/assets/bg.mp4"
			class="video"
			playsinline
			loop
			muted
			autoplay
		></video>

		<img id="flying-image" src="@/assets/girl.jpeg" alt="Flying Image" />

	</section>
</template>

<script>
export default {
	// methods: {
	// 	flySosal () {

	// 	}
	// },
	mounted () {

		const flyingImage = document.getElementById('flying-image');

		function getRandomPosition() {
			const imageWidth = flyingImage.offsetWidth;
			const imageHeight = flyingImage.offsetHeight;
			
			// Вычисляем доступные координаты с учётом размеров изображения
			const x = Math.random() * (window.innerWidth - imageWidth);
			const y = Math.random() * (window.innerHeight - imageHeight);
			return { x, y };
		}

		function moveImage() {
			const { x, y } = getRandomPosition();
			flyingImage.style.transform = `translate(${x}px, ${y}px)`;
		}

		moveImage()

		// Запускаем анимацию каждые 2 секунды
		setInterval(moveImage, 2000);
	}
}
</script>

<style>
.video {
  position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}
#flying-image {
  position: absolute;
	top: 0;
  width: 100px; /* Размер изображения */
  height: auto;
  transition: transform 1s ease-in-out;
}

</style>
<template>

	<section class="h-screen px-12 lg:px-32 py-32">
		<div class="w-full md:w-1/3 h-full flex flex-col md:justify-center info">
			<p class="gubamiText">
				$GUBAMI
			</p>
			<p class="sosalText">
				SOSAL?)
			</p>
			<div class="mainSOSAL">
				<img src="@/assets/mainSOSAL.jpeg" alt="gubami">
			</div>
			<div class="menu">
				<div class="menuItem" @click="showInfo('vote')">Vote</div>
				<div class="menuItem" @click="showInfo('meme')">Meme meaning</div>
				<div class="menuItem" @click="showInfo('token')">Tokenomics</div>
				<!-- <div class="menuItem" @click="showInfo('discord')">Discord</div> -->
			</div>
		</div>

		<div class="content">
			<div class="contentItem vote">
				<div class="voteText">
					We wanna spread the word, so I created Urban dictionary
					definition, please vote. Simply press like on the site
				</div>
				<div class="voteBtns">
					<div class="hands">
						<div><img src="@/assets/hands2.png" alt=""></div>
						<div><img src="@/assets/hands1.png" alt=""></div>
					</div>
					<div class="logo">
						<img src="@/assets/urban.png" alt="">
					</div>
				</div>
			</div>
			<div class="contentItem meme">
				The original name "GUBAMI" refers to an emote on Twitch, but I felt that this meme
				deserved more than just being a local emote on some streamers' channels. The origin story
				is quite amusing: there's a long-standing joke where you bait someone into answering
				"yes" to a question and, right before they respond, you quickly ask, "SOSAL?" ("Did you
				suck?" - referring to oral activity), making their answer "yes" apply to that question. If
				they "SOSAL" (sucked) then they definitely did it with "GUBAMI" (which loosely
				translates to "sucked with lips"). Mog type shit. After countless jokes of this kind on
				Twitch, this emote emerged. Below, I'll provide examples of how this played out.
				In recent months, this joke has frequently appeared in the local "Deadlock" game
				community. So original Twith emote is about 3 month old. Deadlock is amazing btw. So, to
				answer the question of who is depicted in the emote: it's Abrams with huge lips, a character
				from the game.
			</div>
			<div class="contentItem token">
				Tokenomics TokenomicsTokenomicsTokenomicsTokenomics Tokenomics Tokenomics TokenomicsTokenomicsTokenomicsTokenomicsTokenomics Tokenomics TokenomicsTokenomics Tokenomics Tokenomics Tokenomics Tokenomics Tokenomics м Tokenomics Tokenomicsм Tokenomicsvм мм Tokenomicsv Tokenomics
			</div>
		</div>

		<video
			src="@/assets/bg.webm"
			class="video"
			playsinline
			loop
			muted
			autoplay
		></video>

		<!-- <img id="flying-image" src="@/assets/girl.jpeg" alt="Flying Image" /> -->

	</section>
</template>

<script>
export default {
	methods: {
		showInfo (tag) {
			if (tag === 'vote') {
				document.querySelector('.vote').style.display = 'block'
				document.querySelector('.meme').style.display = 'none'
				document.querySelector('.token').style.display = 'none'
			}
			if (tag === 'meme') {
				document.querySelector('.vote').style.display = 'none'
				document.querySelector('.meme').style.display = 'block'
				document.querySelector('.token').style.display = 'none'
			}
			if (tag === 'token') {
				document.querySelector('.vote').style.display = 'none'
				document.querySelector('.meme').style.display = 'none'
				document.querySelector('.token').style.display = 'block'
			}
		}
	},
	// mounted () {

	// 	const flyingImage = document.getElementById('flying-image');

	// 	function getRandomPosition() {
	// 		const imageWidth = flyingImage.offsetWidth;
	// 		const imageHeight = flyingImage.offsetHeight;
			
	// 		// Вычисляем доступные координаты с учётом размеров изображения
	// 		const x = Math.random() * (window.innerWidth - imageWidth);
	// 		const y = Math.random() * (window.innerHeight - imageHeight);
	// 		return { x, y };
	// 	}

	// 	function moveImage() {
	// 		const { x, y } = getRandomPosition();
	// 		flyingImage.style.transform = `translate(${x}px, ${y}px)`;
	// 	}

	// 	moveImage()

	// 	// Запускаем анимацию каждые 2 секунды
	// 	setInterval(moveImage, 2000);
	// }
}
</script>

<style>
section {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
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
  transition: transform 5s ease-in-out;
}
.gubamiText {
	font-size: 60px;
	font-weight: 700;
	color: red;
}
.sosalText {
	font-size: 40px;
	font-weight: 700;
	color: red;
}
.info {
	text-align: center;
}
.mainSOSAL {
	width: 200px;
	margin: 20px auto;
}
.mainSOSAL img {
	border-radius: 50%;
}
.menuItem {
	color: white;
	font-size: 40px;
	font-weight: 400;
	cursor: pointer;
}
.content {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 600px;
}
.contentItem {
	background: #000000ab;
	padding: 20px;
	color: white;
}
.contentItem > * {
	color: white;
}
.meme {
	display: none;
}
.token {
	display: none;
}
.voteBtns {
	display: flex;
	justify-content: space-around;
	margin-top: 30px;
}
.hands {
	display: flex;
	width: 150px;
	justify-content: space-around;
	border: 2px solid white;
	border-radius: 30px;
	padding: 10px;
	cursor: pointer;
}
</style>
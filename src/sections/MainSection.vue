<template>

	<section class="h-screen px-12 lg:px-16 py-16">
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
				<div class="menuItem mem" @click="showInfo('meme')">Meme meaning</div>
				<div class="menuItem" @click="showInfo('token')">Tokenomics</div>
				<div class="menuItem" @click="showInfo('discord')">Memes</div>
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
			<div class="contentItem vote dis">
				<div class="discordBox">
					<div class="discordText">Discrod for party games, vibes, alpha on the way..</div>
					<a href="https://rbankexchange.io/?from=usdt_trc20&to=sol_sol&lang=en" target="_blank" rel="noopener noreferrer">
						<div class="discordBtn">
							<img src="@/assets/dis.png" alt="">
							<span>Join the DIscord</span>
						</div>
					</a>
				</div>
			</div>
			<div class="contentItem vote pump">
				<div class="pumpBox">
					<div class="pumpText">
						Pump.fun fairy launch
					</div>
					<div class="pumpImgs">
						<a href="https://rbankexchange.io/?from=usdt_trc20&to=sol_sol&lang=en" target="_blank" rel="noopener noreferrer">
							<img src="@/assets/tablet.png" alt="">
						</a>
						<a href="https://rbankexchange.io/?from=usdt_trc20&to=sol_sol&lang=en" target="_blank" rel="noopener noreferrer">
							<img src="@/assets/tablet.png" alt="">
						</a>
						<a href="https://rbankexchange.io/?from=usdt_trc20&to=sol_sol&lang=en" target="_blank" rel="noopener noreferrer">
							<img src="@/assets/tablet.png" alt="">
						</a>
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
				<div class="title">
					Tokenomocs:
				</div>
				<div class="subtitle">
					4.69% - myself. 1.5 SOL port, moon or dust, idc.
				</div>
				<div class="subtitle">
					95.31% - LP + PvP
				</div>
				<div class="statistikIMG">
					<img src="@/assets/mainSOSAL.jpeg" alt="">
				</div>
			</div>
			<div class="contentItem discord" style="background: none;">
				<div class="image-container">
					<img :src="currentImage" alt="Rotating Image" />
				</div>
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
	data() {
    return {
      images: [
				require('@/assets/1.jpeg'),
        require('@/assets/2.jpeg'),
        require('@/assets/3.jpeg'),
        require('@/assets/4.jpeg'),
        require('@/assets/5.jpeg'),
        require('@/assets/6.jpeg'),
        require('@/assets/7.jpeg'),
        require('@/assets/8.jpeg'),
        require('@/assets/9.jpeg'),
      ],
      currentIndex: 0,
      currentImage: require('@/assets/1.jpeg') // Инициализация первой картинки
    };
  },
  mounted() {
    this.startImageRotation();
  },
	methods: {
		showInfo (tag) {
			document.querySelectorAll('.contentItem').forEach(item => {
				item.style.display = 'none'
			})
			document.querySelectorAll(`.${tag}`).forEach(item => {
				item.style.display = 'block'
			})
		},
		startImageRotation() {
      setInterval(() => {
        this.rotateImage();
      }, 3000); // Смена изображения каждые 5 секунд
    },
    rotateImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    },
	},
}
</script>

<style>
* {
	color: white !important;
}
section {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.image-container {
  position: relative;
	height: 300px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
	object-fit: contain;
  transition: opacity 1s ease-in-out;
  position: absolute;
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
	object-fit: cover;
	transition: transform 1s ease-in-out;
	animation: pulse 2s infinite;
}
@keyframes pulse {
	0% {
		transform: scale(0.9); /* Обычный размер */
	}
	50% {
		transform: scale(1.1); /* Увеличение */
	}
	100% {
		transform: scale(0.9); /* Возврат */
	}
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
}
.contentItem.dis {
	background: #322c8580;
}
.contentItem.pump {
	background: #2eab9682;
}
.pumpBox {
	display: flex;
	justify-content: space-around;
}
.pumpText {
	line-height: 32px;
}
.pumpImgs {
	display: flex;
	width: 30%;
	justify-content: space-around;
	cursor: pointer;
}
.contentItem .title {
	font-size: 20px;
}
.contentItem .statistikIMG {
	width: 200px;
	margin: 20px auto;
}
.contentItem .statistikIMG img {
	border-radius: 50%;
}
.discordBtn {
	display: flex;
	justify-content: space-around;
	padding: 10px;
	border: 1px solid white;
	border-radius: 30px;
	margin-top: 20px;
	cursor: pointer;
}
.meme {
	display: none;
}
.token {
	display: none;
}
.discord {
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
.mem {
	text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  text-align: center;
  animation: blink 7s infinite;
  -webkit-animation: blink 7s infinite;
}

@-webkit-keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
/*     color: #fccaff;
    text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  }
}

@keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
/*     color: #fccaff;
    text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  }
}

@media (max-width: 1200px) {
	section {
		height: fit-content !important;
    flex-direction: column;
		padding: 0 !important;
		padding-top: 200px !important;
	}
	.content {
		width: 100%;
		margin-top: 20px;
	}
}
</style>
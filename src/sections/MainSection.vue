<template>

	<section class="py-16">
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
				<div class="menuItem mem" @click="showInfo('meme')">Meme meaning</div>
				<div class="menuItem" @click="showInfo('discord')">Mog Examples</div>
				<div class="menuItem" @click="showInfo('token')">Tokenomics</div>
				<div class="menuItem" @click="showInfo('vote')">Vote</div>
				<div class="menuItem" @click="scrollToMems()">Content</div>
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
						<div>
							<a href="https://www.urbandictionary.com/define.php?term=Gubami" target="_blank" rel="noopener noreferrer">
								<img src="@/assets/hands2.png" alt="">
							</a>
						</div>
						<div>
							<a href="https://www.urbandictionary.com/define.php?term=Gubami" target="_blank" rel="noopener noreferrer">
								<img src="@/assets/hands1.png" alt="">
							</a>
						</div>
					</div>
					<div class="logo">
						<a href="https://www.urbandictionary.com/define.php?term=Gubami" target="_blank" rel="noopener noreferrer">
							<img src="@/assets/urban.png" alt="">
						</a>
					</div>
				</div>
			</div>
			<div class="contentItem vote dis">
				<div class="discordBox">
					<div class="discordText">New TikTok meta is ready</div>
					<!-- <a href="https://rbankexchange.io/?from=usdt_trc20&to=sol_sol&lang=en" target="_blank" rel="noopener noreferrer">
						<div class="discordBtn">
							<img src="@/assets/tiktok.png" alt="">
							<span>Join the Tiktok movement</span>
						</div>
					</a> -->
				</div>
			</div>
			<div class="contentItem vote pump">
				<div class="pumpBox">
					<div class="pumpText">
						Pump.fun fairy launch
					</div>
					<div class="pumpImgs">
						<!-- <a href="https://rbankexchange.io/?from=usdt_trc20&to=sol_sol&lang=en" target="_blank" rel="noopener noreferrer">
							<img src="@/assets/tablet.png" alt="">
						</a>
						<a href="https://rbankexchange.io/?from=usdt_trc20&to=sol_sol&lang=en" target="_blank" rel="noopener noreferrer">
							<img src="@/assets/tablet.png" alt="">
						</a>
						<a href="https://rbankexchange.io/?from=usdt_trc20&to=sol_sol&lang=en" target="_blank" rel="noopener noreferrer">
							<img src="@/assets/tablet.png" alt="">
						</a> -->
					</div>
				</div>
			</div>

			<div class="contentItem meme">
				<div class="left">
					<div class="title">
						Meme Meaning
					</div>
					<div class="text">
						Aight, so the OG name "GUBAMI" came from a Twitch emote, but honestly, this meme deserved to go bigger than just sittin' in some streamers' channel emotes. The backstory? Straight-up hilarious. It’s all about this classic troll move: you ask someone some random question to get them to say "yes," and right before they answer, you hit 'em with "SOSAL?" (basically, "Did you suck?"—you know what kinda suckin' we talkin' 'bout). Boom, they say "yes," and it’s game over.
						<br>
						<br>
						If they "SOSAL" then they definitely did it with "GUBAMI" which loosely means "sucked with lips"—straight MOG move, fr. This whole vibe turned into endless Twitch banter, and bam, the emote was born.
						<br>
						<br>
						Lately, this joke's been poppin' off hard in the "Deadlock" game community—y’all gotta check it out, it’s fire. Anyway, for those wondering who’s in the emote, it’s Abrams from the game, rocking them cartoonishly massive lips. Straight-up meme gold, bruh.
					</div>
				</div>
				<div class="right">
					<img src="@/assets/999.png" alt="">
					<div class="rightText"  @click="showInfo('discord')">
						Mog Examples ⇒
					</div>
				</div>
			</div>
			<div class="contentItem token">
				<div class="title">
					Tokenomics:
				</div>
				<div class="subtitle">
					4.69% - myself. 1.5 SOL port, moon or dust, idc.
				</div>
				<div class="subtitle">
					95.31% - LP + PvP
				</div>
				<div class="statistikIMG">
					<img src="@/assets/tokenCircle.png" alt="">
				</div>
			</div>
			<div class="contentItem discord">
				<div class="title">
					Examples
				</div>
				<video
					src="@/assets/example.mp4"
					class="exampleVideo"
					loop
					autoplay
					controls
				></video>
				<div class="discordSubtitle">
					Jamside mogged Lystic with GUBAMI move
				</div>
			</div>

			<img class="arrowDown" src="@/assets/down.png" alt="">
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
		scrollToMems () {
			// const currentScroll = window.scrollY;
			// Высота окна (высота экрана)
			const screenHeight = window.innerHeight;
			// Новая позиция прокрутки
			// const nextScroll = currentScroll + screenHeight;
			// Прокрутка с анимацией
			window.scrollTo({
				top: screenHeight,
				behavior: 'smooth', // Плавная прокрутка
			});
		},
		showInfo (tag) {
			document.querySelectorAll('.contentItem').forEach(item => {
				item.style.display = 'none'
			})
			document.querySelectorAll(`.${tag}`).forEach(item => {
				if (tag === 'meme') {
					item.style.display = 'grid'
				} else {
					item.style.display = 'block'
				}
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
	/* flex-direction: row; */
	justify-content: space-between;
	max-width: 1600px;
	margin: 0 auto;
	padding: 0 20px;
	height: calc(100vh - 0px);
  max-height: 100vh; /* Предотвращаем изменение высоты */
  box-sizing: border-box;
}
.meme .right {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.rightText {
	font-size: 25px;
	color: #B93D3D !important;
	cursor: pointer;
}
.meme .title {
	color: #D6FE25 !important;
}
.arrowDown {
	height: 60px;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 10px;
	cursor: pointer;
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
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
/* .exampleVideo {

} */
#flying-image {
  position: absolute;
	top: 0;
  width: 100px; /* Размер изображения */
  height: auto;
  transition: transform 5s ease-in-out;
}
.gubamiText {
	font-size: 80px;
	font-weight: 700;
	color: #D6FE25 !important;
	text-shadow: 3px 3px black;
}
.sosalText {
	font-size: 50px;
	font-weight: 700;
	color: #AEAEAE !important;
	text-shadow: 3px 3px black;
}
.info {
	text-align: center;
}
.mainSOSAL {
	width: 300px;
	margin: 20px auto;
}
.mainSOSAL img {
	border-radius: 50%;
	object-fit: cover;
}
.menuItem {
	color: white;
	font-size: 30px;
	font-weight: 400;
	cursor: pointer;
}
.content {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
}
.contentItem {
	background: #000000ab;
	padding: 20px;
	width: 500px;
}
.contentItem .title {
	color: #D6FE25 !important;
	font-size: 40px;
}
.contentItem.discord {
	width: 800px;
}
.discordSubtitle {
	text-align: center;
	font-size: 25px;
	margin-top: 10px;
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
/* .contentItem .statistikIMG {
	width: 300px;
	margin: 20px auto;
} */
.contentItem .statistikIMG img {
	border-radius: 50%;
	width: 100%;
}
.discordBtn {
	display: flex;
	justify-content: space-around;
	padding: 10px;
	border: 1px solid white;
	border-radius: 30px;
	margin-top: 20px;
	cursor: pointer;
	max-width: 300px;
	margin-left: auto;
}
.meme {
	display: none;
	width: 800px;
	grid-template-columns: 3fr 2fr;
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
		min-height: fit-content;
	}
	.menu {
		margin-top: 50px;
	}
	.content {
		width: 100%;
		margin-top: 20px;
	}
	.arrowDown {
		display: none;
	}
	.meme {
		width: 100%;
		grid-template-columns: 1fr;
		grid-gap: 30px;
	}
	.contentItem {
		width: 100%;
	}
	.contentItem.discord {
		width: 100%;
	}
	.exampleVideo {
		width: 100%;
	}
	.meme .right {
		flex-direction: column-reverse;
	}
}
</style>
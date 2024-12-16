<template>

	<section class="py-16">

		<div class="header">
			<div class="ca">
				<div class="contract">tmWFcR3kKSSWKtwHdQypxqtdewNXW2VD4VANWAzpump</div>
				<div class="copy" @click="copy('tmWFcR3kKSSWKtwHdQypxqtdewNXW2VD4VANWAzpump')">COPY</div>
			</div>

			<div class="social">
				<div class="xcom">
					<a href="https://x.com/italktothemoney" target="_blank" rel="noopener noreferrer">
						<img src="@/assets/x.png" alt="">
					</a>
				</div>
			</div>
		</div>

		<div id="moneyRain"></div>
		<div id="rocketAnimation"></div>


		<div class="click-overlay" @click="handleClick">
			<p class="blinking-text">click to enable sound<br>! ! !</p>
			<p class="blinking-text">$MONEY</p>
			<a href="https://photon-sol.tinyastro.io/en/lp/FBjC29FMgzaABNjEY9md3jY6gjmUwmKPPrnAxqDg6SHp" target="_blank" rel="noopener noreferrer">
				<p class="blinking-text">TAKE MONEY</p>
			</a>
		</div>

		<video
			src="@/assets/bg.mp4"
			class="video"
			id="autoPlayVideo"
			playsinline
			loop
			muted
			autoplay
		></video>

	</section>
</template>

<script>
export default {
	data() {
    return {
    };
  },
	methods: {
    handleClick() {
      console.log("Клик выполнен!");
      // Здесь можно добавить нужную логику, например скрыть надпись
    },
		copy (value) {
      var inp =document.createElement('input')
      document.body.appendChild(inp)
      inp.value = value
      inp.select()
      document.execCommand('copy',false)
      inp.remove()
			document.querySelector('.copy').textContent = 'COPIED ! ! !'
			setTimeout(() => {
				document.querySelector('.copy').textContent = 'COPY'
			}, 300)
    },
  },
	mounted () {
		const rocketContainer = document.getElementById("rocketAnimation");
		const rocketImage = require("@/assets/rocket.png"); // Замените на путь к вашей картинке

		function createRocket() {
			const rocket = document.createElement("img");
			rocket.src = rocketImage;
			rocket.classList.add("rocket");

			// Случайная позиция и длительность
			rocket.style.left = Math.random() * 100 + "vw";
			rocket.style.animationDuration = Math.random() * 3 + 2 + "s"; // От 2 до 5 секунд

			rocketContainer.appendChild(rocket);

			// Удаляем ракету после завершения анимации
			rocket.addEventListener("animationend", () => {
				rocket.remove();
			});
		}

		// Запускаем ракеты каждые 5 секунд
		setInterval(() => {
			const rocketCount = Math.floor(Math.random() * 3) + 3; // 3-5 ракет
			for (let i = 0; i < rocketCount; i++) {
				createRocket();
			}
		}, 5000);
		
		const moneyRainContainer = document.getElementById("moneyRain");
    const moneyImage = require('@/assets/usd.png'); // Замените на путь к вашей картинке

    function createMoney() {
      const money = document.createElement("img");
      money.src = moneyImage;
      money.classList.add("money");

      money.style.left = Math.random() * 100 + "vw";
      money.style.animationDuration = Math.random() * 2 + 3 + "s";
      money.style.animationDelay = Math.random() * 2 + "s";
      money.style.width = Math.random() * 30 + 100 + "px";

      moneyRainContainer.appendChild(money);

      money.addEventListener("animationend", () => {
        money.remove();
      });
    }

    setInterval(() => {
      createMoney();
    }, 300);

		document.addEventListener('click', () => {
			const video = document.getElementById('autoPlayVideo');
			video.muted = false;
			video.play();
		});

		
	}
}
</script>

<style>
#rocketAnimation {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1000;
}

/* Стили для ракет */
.rocket {
  position: absolute;
  width: 50px; /* Ширина ракеты */
  animation: flyUp linear infinite;
}

/* Анимация полёта вверх */
@keyframes flyUp {
  0% {
    transform: translateY(100vh) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-10vh) scale(1.2);
    opacity: 0;
  }
}
.header {
	text-align: center;
	color: white;
	font-size: 40px;
	position: absolute;
	z-index: 9999999;
	left: 50%;
	transform: translateX(-50%);
}
.ca {
	background: #00000066;
	width: fit-content;
	margin: 0 auto;
	padding: 10px 30px;
	border-radius: 30px;
	max-width: 80vw;
}
.copy {
	color: #79ff32;
	cursor: pointer;
}
.xcom img {
	width: 50px;
	margin: 40px auto;
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

#moneyRain {
  position: fixed;
  top: -200px;
  left: 0;
  width: 100%;
  height: 150%;
  pointer-events: none; /* Чтобы клики проходили насквозь */
  overflow: hidden;
  z-index: 1000; /* Поверх всех элементов */
}

/* Стили для падающих картинок */
.money {
  position: absolute;
  width: 10vh; /* Размер каждой купюры/монеты */
  animation: fall linear infinite;
}

/* Анимация падения */
@keyframes fall {
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0.5; /* Лёгкая прозрачность при падении */
  }
}

.click-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Над всеми элементами */
  cursor: pointer;
	flex-direction: column-reverse;
}

/* Стили мигающего текста */
.blinking-text {
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  animation: blink 1s infinite;
	text-align: center;
}

/* Анимация мигания */
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@media screen and (max-width: 1000px) {
  .ca {
    font-size: 25px;
  }
}
</style>
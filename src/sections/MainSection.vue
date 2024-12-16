<template>

	<section class="py-16">

		<div id="moneyRain"></div>

		<div class="click-overlay" @click="handleClick">
			<p class="blinking-text">CLICK<br>! ! !</p>
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
  },
	mounted () {
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
}

/* Стили мигающего текста */
.blinking-text {
  font-size: 6rem;
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
</style>
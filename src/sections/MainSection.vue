<template>
  <div class="header">
    <div class="logo">
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/x.png" alt="">
      </a>
    </div>
    <div class="contract">
      <div class="block">
        <div class="text" @click="copy('XXXXXXXXXXXXXXXXXXXXXXXXXXXXX')">XXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
        <div class="btn" @click="copy('XXXXXXXXXXXXXXXXXXXXXXXXXXXXX')">Copy</div>
      </div>
    </div>
    <div class="logo">
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/tg.png" alt="">
      </a>
    </div>
  </div>
  <div class="glitch-wrap">
    <div class="imgWrap">
      <!-- Базовые слои -->
      <img :src="currentImage" alt="glitch" class="base" />
      <img :src="currentImage" alt="glitch" class="red" />
      <img :src="currentImage" alt="glitch" class="green" />
      <img :src="currentImage" alt="glitch" class="blue" />
      <img :src="currentImage" alt="glitch" class="white" />
      <img :src="currentImage" alt="glitch" class="black" />

      <!-- SVG Morphology Layer -->
      <svg class="morph-svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="filter" x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology operator="dilate" radius="10 0" in="SourceGraphic" result="morphology1" />
          </filter>
          <filter id="filter-2" x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology operator="dilate" radius="10 2" in="SourceGraphic" result="morphology1" />
          </filter>
          <filter id="filter-3" x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology operator="dilate" radius="15 0" in="SourceGraphic" result="morphology1" />
          </filter>
        </defs>

        <!-- Анимируемое изображение поверх -->
        <image
          id="morph-image"
          x="0%" y="0%" width="400" height="500"
          :xlink:href="currentImage"
          class="morph-img"
        />
      </svg>

      <!-- Шум -->
      <!-- <div class="noise-layer"></div> -->

      <!-- Текст -->
      <GlitchText />
    </div>

  </div>
  <div class="search">
    <div class="form">
      <div class="form-block">
        <input class="input" />
        <div class="btnsearch" @click="ask">ASK</div>
      </div>
    </div>
  </div>
</template>

<script>
import GlitchText from '@/components/GlitchText.vue';

export default {
  name: 'GlitchBackground',
  components: {
    GlitchText
  },
  data() {
    return {
      currentIndex: 0,
      images: [
        require('@/assets/1.webp'),
        require('@/assets/13.jpg'),
        require('@/assets/11.jpg'),
        // require('@/assets/15.JPG'),
        require('@/assets/10.webp'),
        // require('@/assets/14.JPG'),
        require('@/assets/8.webp'),
        require('@/assets/9.webp'),
        require('@/assets/2.webp'),
        require('@/assets/3.webp'),
        require('@/assets/12.jpg'),
        require('@/assets/4.webp'),
        require('@/assets/5.webp'),
        require('@/assets/6.webp'),
        require('@/assets/7.webp'),
      ]
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  methods: {
    copy (value) {
      var inp =document.createElement('input')
      document.body.appendChild(inp)
      inp.value = value
      inp.select()
      document.execCommand('copy',false)
      inp.remove()
			// document.querySelector('.copy').style.background = '#00ff00'
			// setTimeout(() => {
			// 	document.querySelector('.copy').style.background = '#90D990'
			// }, 300);
    },
    ask () {
      // document.querySelector('.btnsearch').textContent = 'WAIT...'
      // document.querySelector('.btnsearch').setAttribute('disabled', true)
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 2000);
    document.querySelector('.btnsearch').addEventListener('click', function() {
      const btn = this;
      
      // Ставим кнопку в состояние загрузки
      btn.classList.add('loading');
      btn.setAttribute('disabled', true);  // делаем неактивной

      // Пример: через 2 секунды возвращаемся к обычному состоянию
      // setTimeout(() => {
      //   btn.classList.remove('loading');
      //   btn.removeAttribute('disabled');
      // }, 2000);
    });
  }
};
</script>

<style scoped>
/* .search {
  position: absolute;
  z-index: 100;
  display: flex;
  width: 100%;
  bottom: 20px;
  color: #f30000;
} */
.btnsearch.loading {
  position: relative;
  color: transparent;     /* Прячем текст, чтобы виден был спиннер */
  pointer-events: none;   /* Отключаем клики */
}

/* Cам спиннер реализуется псевдо-элементом */
.btnsearch.loading::after {
  content: "";
  position: absolute;
  top: 26%;
  left: 34%;
  width: 20px;
  height: 20px;
  /* margin: 0px 0 0 -8px; */
  border: 2px solid #fff;
  border-radius: 50%;
  border-top-color: transparent;
  -webkit-animation: spin-2320c378 1s linear infinite;
  animation: spin-2320c378 1s linear infinite;
}

/* Анимация вращения */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.btnsearch:disabled {
  background-color: #9ca2ab;
  cursor: not-allowed;
  pointer-events: none; /* Отключаем нажатие */
  transform: none;      /* Убираем эффект при наведении */
}

.search {
  position: absolute;
  color: #f30000;
  z-index: 100;
  bottom: 20px;
  left: 30px;
  right: 30px;
  /* Растягиваем на всю доступную ширину между левым и правым краем */
  text-align: center; /* Центрируем содержимое по горизонтали */
}

.form {
  width: 100%;
  max-width: 100%; /* Для надёжности */
}

.form-block {
  display: flex;
  justify-content: center;  /* Выравниваем элементы по центру в строке */
  align-items: center;      /* Центрируем элементы по вертикали */
  gap: 10px;                /* Промежуток между полем и кнопкой */
  flex-direction: column;
}

.input {
  width: 100%;
  max-width: 500px;       /* Ограничение, чтобы поле было разумного размера */
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #f60000; /* Цвет рамки можете изменить */
  border-radius: 4px;     /* Скруглённые углы */
  outline: none;          /* Убираем выделение при фокусе (для разных браузеров) */
  transition: border-color 0.3s; /* Плавный переход при наведении или фокусе */
}

.input:focus {
  border-color: #888; /* Изменение цвета рамки при фокусе */
}

.btnsearch {
  display: inline-block;
  padding: 10px 20px;
  font-size: 25px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #f30000; /* Основной цвет кнопки (подберите свой) */
  color: #fff;
  transition: background-color 0.3s, transform 0.3s;
}

.btnsearch:hover {
  background-color: #790303; /* Изменённый цвет при наведении */
  transform: scale(1.03);    /* Немного увеличиваем кнопку при наведении */
}
.block {
  display: flex;
  text-transform: uppercase;
  font-size: 50px;
  color: #f30000;
  cursor: pointer;
}
.text {
  margin-right: 10px;
  word-break: break-word;
  white-space: normal;
  text-align: center;
}
.logo img {
  height: 50px;
  margin: 0 20px;
}
.header {
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 20px;
}
.glitch-wrap {
  width: 100vw;
  height: 100vh;
  background: black;
  overflow: hidden;
  position: relative;
}

.imgWrap {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.imgWrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

/* Глитч каналы */
.imgWrap .red {
  filter: url(#alphaRed);
  mix-blend-mode: screen;
  animation: imgGlitch 0.2s infinite steps(2);
  opacity: 0.5;
}
.imgWrap .green {
  filter: url(#alphaGreen);
  mix-blend-mode: screen;
  animation: imgGlitch 0.2s infinite steps(2) reverse;
  opacity: 0.5;
}
.imgWrap .blue {
  filter: url(#alphaBlue);
  mix-blend-mode: screen;
  animation: imgGlitch 0.2s infinite steps(2);
  opacity: 0.5;
}
.imgWrap .white {
  filter: brightness(2);
  mix-blend-mode: overlay;
  animation: imgGlitch 0.2s infinite steps(1);
  opacity: 0.2;
}
.imgWrap .black {
  filter: brightness(0);
  mix-blend-mode: difference;
  animation: imgGlitch 0.2s infinite steps(1) reverse;
  opacity: 0.15;
}

/* Текст */
.imgWrap .text {
  color: #fff;
  font-size: 32px;
  padding: 10px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 15;
}

/* Анимированный SVG Morphology слой */
.morph-svg {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  pointer-events: none;
}
.morph-svg .morph-img {
  animation: my-animation 0.8s infinite alternate;
}

/* Шум */
/* .noise-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
  background-size: cover;
  opacity: 0.05;
  animation: noisePulse 0.3s infinite alternate;
  pointer-events: none;
  z-index: 10;
  mix-blend-mode: soft-light;
  filter: url(#noiseFilter);
} */

/* Анимации */
@keyframes imgGlitch {
  0% {
    clip-path: inset(5% 0 15% 0);
    transform: translate(0, 0);
  }
  20% {
    clip-path: inset(20% 10% 10% 10%);
    transform: translate(-5px, 3px);
  }
  40% {
    clip-path: inset(10% 20% 15% 5%);
    transform: translate(5px, -4px);
  }
  60% {
    clip-path: inset(25% 5% 5% 20%);
    transform: translate(-3px, 6px);
  }
  80% {
    clip-path: inset(10% 30% 20% 10%);
    transform: translate(4px, -2px);
  }
  100% {
    clip-path: inset(0 0 0 0);
    transform: translate(0, 0);
  }
}

@keyframes noisePulse {
  0% {
    opacity: 0.05;
  }
  100% {
    opacity: 0.1;
  }
}

/* SVG Morph animation */
@keyframes my-animation {
  0% {
    filter: none;
  }
  20% {
    filter: url(#filter);
  }
  50% {
    filter: url(#filter-2);
  }
  80% {
    filter: url(#filter-3);
  }
  94% {
    filter: none;
  }
}

@media (max-width: 1100px) {
	.logo img {
    height: 30px;
  }
  .block {
    font-size: 30px;
  }
}

@media (max-width: 700px) {
	.btn {
    display: none;
  }
}
</style>

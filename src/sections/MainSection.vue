<template>
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
      <div class="noise-layer"></div>

      <!-- Текст -->
      <span class="text"><span>WELCOME</span></span>
    </div>

    <!-- SVG Noise Filter (дополнительно) -->
    <svg class="filter" version="1.1">
      <defs>
        <filter id="alphaRed">
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
        </filter>
        <filter id="alphaGreen">
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" />
        </filter>
        <filter id="alphaBlue">
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" />
        </filter>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" result="noise" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'GlitchBackground',
  data() {
    return {
      currentIndex: 0,
      images: [
        require('@/assets/1.webp'),
        require('@/assets/2.webp'),
        require('@/assets/3.webp'),
        require('@/assets/4.webp'),
        require('@/assets/5.webp'),
        require('@/assets/6.webp'),
        require('@/assets/7.webp'),
        require('@/assets/8.webp'),
        require('@/assets/9.webp'),
        require('@/assets/10.webp')
      ]
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 4000);
  }
};
</script>

<style scoped>
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
.noise-layer {
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
}

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

.filter {
  display: none;
}
</style>

<template>
  <div class="site-wrapper">
    <div class="images-container">
      <div class="image-box">
        <img :src="images[0]" alt="Image 1" />
      </div>
      <div class="symbol">+</div>
      <div class="image-box">
        <img :src="images[1]" alt="Image 2" />
      </div>
      <div class="symbol">=</div>
      <div
        class="image-box image-3-wrapper"
        ref="image3"
      >
        <img :src="images[2]" alt="Image 3" />
        <transition name="zoom">
          <img
            v-if="showImage4"
            :src="image4"
            alt="Image 4"
            class="image4-overlay"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TileEquation",
  data() {
    return {
      images: [
        require("@/assets/1.jpeg"),
        require("@/assets/2.gif"),
        require("@/assets/3.jpeg")
      ],
      image4: require("@/assets/4.png"),
      showImage4: false,
      timer: null
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          if (!this.timer) {
            this.timer = setTimeout(() => {
              this.showImage4 = true;
            }, 3000); // 10 секунд
          }
        }
      },
      {
        threshold: 1.0 // Полностью виден
      }
    );

    if (this.$refs.image3) {
      observer.observe(this.$refs.image3);
    }
  },
  beforeUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
};
</script>

<style scoped>
.site-wrapper {
  min-height: 100vh;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #cfd9df, #e2ebf0);
}

.images-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1600px;
  width: 100%;
}

.image-box {
  background: white;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  flex: 1 1 300px;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.symbol {
  font-size: 300px;
  font-weight: bold;
  color: #444;
  flex: 0 0 auto;
  padding: 0 10px;
}

.image4-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
  z-index: 2;
}

/* Анимация увеличения из центра */
.zoom-enter-active {
  animation: zoomIn 5s ease-out forwards;
}

@keyframes zoomIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  60% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 1000px) {
  .images-container {
    flex-direction: column;
  }

  .symbol {
    font-size: 132px;
    margin: 10px 0;
  }
}
</style>

<template>
    
    <div class="carousel">
      <button @click="prevImage" class="arrow left">
        <img src="@/assets/navigate_before.png" alt="">
      </button>
      <div class="image-container">
        <img :src="images[currentIndex]" alt="img" />
      </div>
      <button @click="nextImage" class="arrow right">
        <img src="@/assets/navigate_next.png" alt="">
      </button>
      <div class="carouselText">
        He is him.
      </div>
    </div>
    <div class="twitter">
      <a class="twitter-timeline" data-lang="en" data-height="400" data-theme="dark" href="https://twitter.com/XDevelopers?ref_src=twsrc%5Etfw">
      </a> 
    </div>
    <div class="trash">
        <img src="https://dd.dexscreener.com/ds-data/tokens/solana/HwPtbFpd3VTe3tfyosoVtPf9WPuSk5gAKkN5xp6Npump/header.png?size=xl&key=ec942d" alt="">
        <div class="trashText">
            SOSAL ?
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
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
      };
    },
    methods: {
      prevImage() {
        this.currentIndex =
          (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
    },
  };
  </script>
  
  <style>
  .carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 900px;
  }
  
  .image-container {
    width: 600px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .twitter {
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .carouselText {
    position: absolute;
    bottom: 40px;
    font-size: 60px;
  }
  .arrow {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  user-select: none;
  transition: transform 0.2s;
}

.arrow:hover {
  transform: scale(1.4);
}

.left {
  margin-right: 10px; /* Отступ между стрелкой и картинкой */
}

.right {
  margin-left: 10px; /* Отступ между стрелкой и картинкой */
}

.trash {
    position: relative; /* Родительский элемент для позиционирования текста */
    display: inline-block;
    width: 100%;
}
.trash img {
    width: 100%;
    height: 400px;
}

.trashText {
  position: absolute; /* Абсолютное позиционирование внутри контейнера */
  top: 50%; /* Размещение текста по вертикали */
  left: 50%; /* Размещение текста по горизонтали */
  transform: translate(-50%, -50%); /* Центрирование текста */
  color: #0004FF !important; /* Цвет текста */
  font-size: 150px; /* Размер текста */
  font-weight: bold; /* Жирность текста */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* Тень для читабельности */
  text-align: center;
}

@media (max-width: 1200px) {
	.carousel {
		height: 700px;
	}
  .trashText {
    font-size: 100px;
    width: 100%;
  }
}
  </style>
  
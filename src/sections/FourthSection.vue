<template>
  <section>
    <div class="item__description">
      <div class="header" :style="{ visibility: visibilityState }" @animationend="onAnimationEnd">
          <div class="title">
            Contact Us
          </div>
          <div class="border"></div>
          <div class="logo">
              <img class="logo" src="@/assets/Motul.svg">
          </div>
      </div>
      <div class="info">
          <div class="article" :style="{ visibility: visibilityState }" @animationend="onAnimationEnd">How May We Help You?</div>
          <div class="text">
            <a class="text" href="https://www.motul.com/sg/en/information/contact_us" >
              <img src="@/assets/mail.png" alt="" class="img" :style="{ visibility: visibilityState }" @animationend="onAnimationEnd">
            </a>
            <p class="contactText" :style="{ visibility: visibilityState }" @animationend="onAnimationEnd">CONTACT US</p>
          </div>
      </div>
      <div class="footer">
          <p> <span style="font-style: italic;">Powered by</span> <span>©ScanTrust</span> </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FirstSection',
  components: {
  },
  props: {
    isActive: {
      type: Boolean,
      required: true, // Мы будем передавать информацию, активен ли слайд
    },
  },
  data() {
      return {
        visibilityState: 'hidden',
      };
    },
    watch: {
        // Отслеживаем, изменился ли статус активности слайда
        isActive() {
            // setTimeout(() => {this.visibilityState = 'hidden';}, 2000)
            this.visibilityState = 'hidden';
        },
    },
    computed: {
    },
    methods: {
        onAnimationEnd() {
            // Меняем visibility на 'visible', когда анимация завершена
            this.visibilityState = 'visible';
        },
    },
  mounted() {
  }
};
</script>

<style scoped>
  .animate-slide .header {
    animation: slideIn 0.5s ease-out; 
    animation-delay: 0.5s;
  }
  .animate-slide .article {
    animation: slideUp 0.5s ease-out; 
    animation-delay: 0.5s;
  }
  .animate-slide .img {
    animation: bounce 0.7s ease both; 
    animation-delay: 0.7s;
  }
  .animate-slide .contactText {
    animation: goVisible 0.6s ease-out; 
    animation-delay: 0.6s;
  }
section {
  max-width: 768px;
  margin: 0 auto;
  height: 100vh;
  height: 100dvh;
  background-color: #fff;
  position: relative;
}
.item__description {
  background: url('@/assets/motul-big-bg.png') center top / cover no-repeat rgb(255, 255, 255);
  height: 100vh;
  height: 100dvh;
}
.header {
  display: flex;
  padding-left: 38px;
  padding-top: 38px;
}
.title {
  font-style: italic;
  font-size: 20px;
  line-height: 33px;
  font-family: 'Arial';
  font-weight: 900;
}
.border {
  flex-grow: 1;
  height: 1px;
  background: #000;
  margin: 16px;
}
.logo {
  width: 78px;
  margin-right: 33px;
  margin-top: 2px;
}
.article {
  font-family: 'Graphik-Regular', 'Arial';
  font-weight: 400;
  font-size: 30px;
  font-weight: 400;
  padding-top: 41px;
  padding-left: 32px;
  padding-right: 19px;
  padding-bottom: 64px;
}
.img {
  margin-top: 35px;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  -webkit-mask-image: radial-gradient(circle, black 100%, transparent 100%);
}
.text {
  text-align: center;
  color: #000000DE;
  font-size: 15px;
  font-family: 'Graphik-Regular', 'Arial';
  word-spacing: 2px;
}
.footer {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 10px;
  color: #333;
  font-family: 'Graphik-Regular', 'Arial';
  font-weight: 400;
  font-size: 10px;
}
.footer p {
  margin: 0;
}
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translate3d(0, -10%, 0); /* Начальная позиция сверху */
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0); /* Элемент на своей исходной позиции */
    visibility: visible;
  }
}
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 10%, 0); /* Начальная позиция сверху */
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0); /* Элемент на своей исходной позиции */
    visibility: visible;
  }
}
@keyframes bounce {
  0% {
    opacity: 0;
    transform: scale(0.6);
    visibility: visible;
  }
  20% {
    transform: scale(1.15);
    opacity: 1;
  }
  40% {
    transform: scale(0.8);
  }
  60% {
    transform: scale(1.1);
  }
  80% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes goVisible {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}

a, a * {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  outline: none;
  border: none;
  box-shadow: none;
}

 </style>
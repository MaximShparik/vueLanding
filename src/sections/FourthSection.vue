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
    animation: slideIn 1s ease-out; 
    animation-delay: 1s;
  }
  .animate-slide .article {
    animation: slideUp 1s ease-out; 
    animation-delay: 1s;
  }
  .animate-slide img {
    animation: bounce 1s ease both; 
    animation-delay: 1s;
  }
  .animate-slide .contactText {
    animation: goVisible 1s ease-out; 
    animation-delay: 1s;
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
  /* height: fit-content; */
  /* padding-top: 23px; */
  /* padding-bottom: 0px; */
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
  font-weight: 900;
  padding-top: 51px;
  padding-left: 32px;
  padding-right: 19px;
  padding-bottom: 64px;
}
.text {
  text-align: center;
  color: #000000b3;
  font-size: 15px;
  line-height: 1.67;
  font-family: 'Graphik-Regular', 'Arial';
  padding-top: 18px;
  word-spacing: 2px;
}
.img {
  width: 75px;
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
 </style>
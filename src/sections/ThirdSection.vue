<template>
  <section>
    <div class="item__description">
      <div class="header" :style="{ visibility: visibilityState }" @animationend="onAnimationEnd">
          <div class="title">
            Useful Tools
          </div>
          <div class="border"></div>
          <div class="logo">
              <img class="logo" src="@/assets/Motul.svg">
          </div>
      </div>
      <div class="info">
        <a class="btn" href="https://www.motul.com/sg/en/lubricants" :style="{ visibility: visibilityState }" @animationend="onAnimationEnd">
          <img src="@/assets/oilIcon.png" alt="" class="icon">
          <!-- <a class="text" href="https://www.motul.com/sg/en/lubricants">Oil Recommendation</a> -->
          <div class="text">
            Oil Recommendation
          </div>
          <img src="@/assets/motulArrow.svg" alt="" class="arrow">
        </a>
        <div class="vin-text" :style="{ visibility: visibilityState }" @animationend="onAnimationEnd">
          Use the VIN number to quickly look up the best oil product for your vehicle.
        </div>
        <a class="btn" href="https://www.motul.com/sg/en/resellers" :style="{ visibility: visibilityState }" @animationend="onAnimationEnd">
          <img src="@/assets/carIcon.png" alt="" class="icon">
          <!-- <a class="text" href="https://www.motul.com/sg/en/resellers">Find A Dealer</a> -->
          <div class="text">
            Find A Dealer
          </div>
          <img src="@/assets/motulArrow.svg" alt="" class="arrow">
        </a>
      </div>
      <div class="footer">
          Page 3 of 4
      </div>
    </div>
    <div class="arrow">
        <img src="@/assets/up.svg" alt="" class="arrowimg">
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
  .animate-slide .btn {
    animation: bounce 1s ease both; 
    animation-delay: 1s;

  }
  .animate-slide .vin-text {
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
  align-items: center;
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
.info {
  padding-top: 38px;
  padding-left: 31px;
  padding-right: 31px;
}
a {
  text-decoration: none;
}
.vin-text {
  font-family: 'Graphik-Regular', sans-serif;
  color: #000000DE;
  opacity: .6;
  font-size: 16px;
  line-height: 1.25;
  margin-top: 25px;
  margin-bottom: 25px;
  word-spacing: 2px;
}
.btn {
display: flex;
align-items: center;
justify-content: start;
background-color: #fafafa;
box-shadow: 0 2px 5px rgba(0, 0, 0, .26);
padding: 10px 16px;
margin-bottom: 20px;
border-radius: 3px;
}
.text {
  margin-right: auto;
  padding-left: 12px;
  font-family: 'Graphik-Regular', Arial;
font-weight: 400;
font-size: 18px;
min-width: 88px;
color: #000000DE;
text-transform: capitalize;
}
.icon {
  width: 55.36px;
  height: 46.23px;
}
.arrow {
  width: 7px;
  padding-right: 12px;
}
.footer {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 14px;
  color: #333;
  font-family: 'Graphik-Regular', sans-serif;
  font-weight: 400;
  font-size: 20px;
}

@keyframes riseAndFade {
  0% {
    transform: translateX(-50%) translateY(0px);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(-15px);
    opacity: 0;
  }
}
.arrowimg {
  position: absolute;
  bottom: 60px;
  left: 50%;
  width: 23px;
  animation: riseAndFade 1.5s ease-in-out infinite;
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
@keyframes bounce {
  0% {
    opacity: 0;
    transform: scale(0.6);
    visibility: visible;
  }
  20% {
    transform: scale(1.05);
    opacity: 1;
  }
  40% {
    transform: scale(0.9);
  }
  60% {
    transform: scale(1.02);
  }
  80% {
    transform: scale(0.94);
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
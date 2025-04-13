<template>
  <section>
    <div class="item__description">
      <div class="header" :style="{ visibility: visibilityState }" @animationend="onAnimationEnd">
        <div class="title">Useful Tools</div>
        <div class="border"></div>
        <div class="logo">
          <img class="logo" src="@/assets/Motul.svg" />
        </div>
      </div>

      <div class="info">
        <a
          class="btn"
          href="https://www.motul.com/sg/en/lubricants"
          :style="{ visibility: visibilityState }"
          @animationend="onAnimationEnd"
        >
          <span>
            <img src="@/assets/oilIcon.png" alt="" class="icon" />
            <div class="text">Oil Recommendation</div>
            <img src="@/assets/motulArrow.svg" alt="" class="arrow" />
          </span>
        </a>

        <div class="vin-text" @animationend="onAnimationEnd">
          Use the VIN number to quickly look up the best oil product for your vehicle.
        </div>

        <a
          class="btn"
          href="https://www.motul.com/sg/en/resellers"
          :style="{ visibility: visibilityState }"
          @animationend="onAnimationEnd"
        >
          <span>
            <img src="@/assets/carIcon.png" alt="" class="icon" />
            <div class="text">Find A Dealer</div>
            <img src="@/assets/motulArrow.svg" alt="" class="arrow" />
          </span>
        </a>
      </div>

      <div class="footer">Page 3 of 4</div>
    </div>
    <div class="arrow">
      <img src="@/assets/up.svg" alt="" class="arrowimg" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ThirdSection',
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      visibilityState: 'hidden',
    };
  },
  watch: {
    isActive() {
      this.visibilityState = 'hidden';
    },
  },
  methods: {
    onAnimationEnd() {
      this.visibilityState = 'visible';
    },
  },
};
</script>

<style scoped>
.animate-slide .header {
  animation: slideIn 0.6s ease-out;
  animation-delay: 0.6s;
}
.animate-slide .btn {
  animation: bounce 0.8s ease both;
  animation-delay: 0.8s;
}

section {
  max-width: 768px;
  margin: 0 auto;
  height: 100dvh;
  background-color: #fff;
  position: relative;
}
.item__description {
  background: url('@/assets/motul-big-bg.png') center top / cover no-repeat rgb(255, 255, 255);
  height: 100dvh;
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
  color: #000000de;
  opacity: 0.6;
  font-size: 16px;
  line-height: 1.25;
  margin-top: 25px;
  margin-bottom: 25px;
  word-spacing: 2px;
}
.btn {
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: #fafafa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  padding: 10px 16px;
  margin-bottom: 20px;
  border-radius: 3px;
  cursor: pointer;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  touch-action: manipulation;
}
.btn::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0%;
  height: 100%;
  background-color: #BDBDBD;
  z-index: 0;
  transition: width 0.9s ease;
}
.btn:active::before {
  width: 100%;
}
.btn span {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 100%;
}
.text {
  margin-right: auto;
  padding-left: 12px;
  font-family: 'Graphik-Regular', Arial;
  font-weight: 400;
  font-size: 18px;
  min-width: 88px;
  color: #000000de;
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
    transform: translate3d(0, -10%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
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
</style>
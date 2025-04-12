<template>
  <section>
    <div class="item__description">
      <div class="header">
          <div class="title">
            Useful Tools
          </div>
          <div class="border"></div>
          <div class="logo">
              <img class="logo" src="@/assets/Motul.svg">
          </div>
      </div>
      <div class="info">
        <div class="btn">
          <img src="@/assets/oilIcon.png" alt="" class="icon">
          <div class="text">
            Oil Recommendation
          </div>
          <img src="@/assets/motulArrow.svg" alt="" class="arrow">
        </div>
      <div class="vin-text">
          Use the VIN number to quickly look up the best oil product for your vehicle.
        </div>
        <div class="btn">
          <img src="@/assets/carIcon.png" alt="" class="icon">
          <div class="text">
            Find A Dealer
          </div>
          <img src="@/assets/motulArrow.svg" alt="" class="arrow">
        </div>
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
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<style scoped>
section {
  max-width: 768px;
  margin: 0 auto;
  height: 100vh;
  background-color: #fff;
  position: relative;
}
.item__description {
  background: url('@/assets/motul-big-bg.png') center top / cover no-repeat rgb(255, 255, 255);
  height: 100vh;
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
 </style>
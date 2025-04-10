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
          <img src="@/assets/up.svg" alt="" class="arrow">
        </div>
        <div class="info">
          Use the VIN number to quickly look up the best oil product for your vehicle.
        </div>
        <div class="btn">
          <img src="@/assets/carIcon.png" alt="" class="icon">
          <div class="text">
            Find A Dealer
          </div>
          <img src="@/assets/up.svg" alt="" class="arrow">
        </div>
      </div>
      <div class="footer">
          Page 3 of 4
      </div>
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
.btn {
  display: flex;
  width: 100%;
  background-color: rgb(250, 250, 250);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .26);
  color: rgb(33, 33, 33);
  padding: 0 6px;
}
.icon {
  width: 48px;
  padding-right: 23px;
  padding-top: 8px;
  padding-bottom: 8px;
}
.arrow {
  width: 7px;
}
.footer {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 14px;
  color: #333;
  font-family: 'Graphik-Regular', 'Arial';
  font-weight: 400;
  font-size: 20px;
}
 </style>
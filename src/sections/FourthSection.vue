<template>
  <section>
    <div class="item__description">
      <div class="header">
          <div class="title">
            Contact Us
          </div>
          <div class="border"></div>
          <div class="logo">
              <img class="logo" src="@/assets/Motul.svg">
          </div>
      </div>
      <div class="info">
          <div class="article">How May We Help You?</div>
          <div class="text">
            <img src="@/assets/mail.png" alt="" class="img">
            <p>CONTACT US</p>
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
 </style>
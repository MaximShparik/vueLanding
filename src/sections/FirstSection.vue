<template>
  <section>
    <img class="logo" src="@/assets/Motul.svg">
    <div class="item__img">
      <img src="@/assets/item.png" alt="">
    </div>
    <div class="item__description">
      <div class="info__block">
        <div class="info__text">
          <div class="title">Thank You For Scanning 8100 ECO-NERGY 5W30 4X4L</div>
          <div class="subtitle">Serial Number: K3EOZGWA</div>
        </div>
        <div class="info__img">
          <img src="@/assets/qr.png" alt="">
        </div>
      </div>
      <div class="faq__block">
        <div class="title">
          For authentication please use a <a href="http://" target="_blank" rel="noopener noreferrer">compatible phone</a> & download the App
        </div>
        <div class="btn">
          Copy Detection Not Available
        </div>
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
.logo {
  position: absolute;
  z-index: 9999;
  top: 18px;
  right: 22px;
  padding: .5rem;
  width: 80px;
}
.item__img {
  height: 55vh;
}
.item__img img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.item__description {
  background: url('@/assets/motul-bg.jpg') no-repeat #fff top / cover;
  height: calc(45vh - 23px);
  padding-top: 23px;
}
.info__block {
  padding-left: 14px;
  margin-left: 17px;
  border-left: 10px solid gray;
  display: flex;
  justify-content: space-between;
}
.info__text .title {
  font-family: 'Graphik-Medium', 'Arial';
  font-size: 20px;
}
.info__text .subtitle {
  font-family: 'Graphik-Medium', 'Arial';
  font-size: 14px;
  color: #777;
}
.info__img img {
  width: 82px;
  margin-right: 11px;
}
.faq__block {
  text-align: center;
  margin-top: 15px;
  font-family: 'Graphik-Medium', 'Arial';
  font-size: 18px;
}
.faq__block a {
  text-decoration: none;
}
.faq__block .btn {
  color: white;
  background: #ff9200;
  width: 270px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  margin: 20px auto 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>

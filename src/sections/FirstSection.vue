<template>
  <section>
    <img class="logo" src="@/assets/Motul.svg">
    <div class="item__img">
      <img src="@/assets/item.png" alt="">
    </div>
    <div class="item__description">
      <div class="info__block">
        <div class="info__text">
          <div class="title">Thank You For Scanning<br>8100 ECO-NERGY 5W30 12X1L</div>
          <div class="subtitle">Serial Number: K3EOZGWA</div>
        </div>
        <div class="info__img">
          <!-- <img src="@/assets/qr.png" alt=""> -->
          <!-- <img src="@/assets/qr code high quality.png" alt=""> -->
          <img src="@/assets/qr.gif" alt="">
        </div>
      </div>
      <div class="faq__block">
        <div class="title">
          For authentication please use a <a href="https://sites.scantrust.com/scantrust/compatible-devices-app/" rel="noopener noreferrer">compatible phone</a> & download the App
        </div>
        <div class="btn">
          <img src="@/assets/circle-question.svg" alt="info" class="btn__icon" /> 
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
  /* height: fit-content; */
  padding-top: 23px;
  /* padding-bottom: 0px; */
}
.info__block {
  padding-top: 10px;
  padding-left: 14px;
  margin-left: 17px;
  border-left: 10px solid #363636;
  border-image: linear-gradient(to bottom, 
    transparent 10px,      /* Пропуск сверху */
    #363636 10px 100%      /* Начало полоски после 20px */
  ) 1 100%;
  display: flex;
  justify-content: space-between;
}
.info__text .title { 
  font-family: 'Graphik-Medium', sans-serif; 
  font-size: 22px;
  font-weight: 501;
  line-height: 1.2;
  color: #333;
  text-transform: capitalize;
  margin-bottom: 4px;
  padding: 0px, 0px, 5px;
}
.info__text .subtitle {
  font-family: 'Graphik-Medium', sans-serif;
  font-size: 16px;
  font-weight: 501;
  color: #777;
}
.info__img img {
  width: 100px;
  height: 100px;
  margin-right: 14px;
}
.faq__block {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 35px;
  color: #000000DE;
  font-family: 'Graphik-Medium', sans-serif;
  font-size: 16px;
  max-width: 80%;
  margin-bottom: 10px;
   font-weight: 600;
}
.faq__block a {
  text-decoration: none;
}
.faq__block .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* расстояние между иконкой и текстом */
  padding: 0 16px; /* горизонтальные отступы по краям */
  height: 40px;
  background: #ff7f00;
  color: white;
  border-radius: 20px;
  margin: 20px auto 0;
  font-weight: 600;
  font-size: 16px;
  font-family: 'Graphik-Medium', sans-serif;
  white-space: nowrap; /* чтобы кнопка не ломалась на две строки */
}

.btn__icon {
  width: 18px;
  height: 18px;
  display: block;
}
 </style>
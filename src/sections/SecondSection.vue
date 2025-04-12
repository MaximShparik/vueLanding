<template>
    <section>
      <div class="item__description">
        <div class="header">
            <div class="title">
                Product Information
            </div>
            <div class="border"></div>
            <div class="logo">
                <img class="logo" src="@/assets/Motul.svg">
            </div>
        </div>
        <div class="info">
            <div class="article">{{article.name}}</div>
            <div class="text">{{article.description}}</div>
        </div>
        <a href="https://www.motul.com/en-SG/products">
            <div class="btn">
                More Information
            </div>
        </a>
        <div class="footer">
            Page 2 of 4
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
    article: {
      type: Object,
      default: () => {}
    }
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
    font-family:'Graphik-Bold', sans-serif;
    color: #61686b;
    font-size: 25px;
    font-weight: 900;
    padding-top: 20px;
    padding-left: 38px;
    padding-right: 38px;
  }
  .text {
    color: #000000b3;
    font-size: 13px;
    line-height: 1.67;
    font-family: 'Graphik-Regular', 'Arial';
    padding-top: 18px;
    padding-left: 38px;
    padding-right: 18px;
    word-spacing: 2px;
  }
  .btn {
    margin-top: 45px;
    margin-left: 38px;
    color: rgb(237, 28, 36);
font-family: 'Graphik-Regular', sans-serif;
   font-weight: 400;
    text-transform: capitalize;
    background: 0 0 !important;
    border: 1px solid rgb(237, 28, 36);
    border-radius: 3px;
font-size: 19.35px;
    line-height: 35px;
    padding-left: 36px;
    padding-right: 36px;
    display: inline-flex;
  }
  a {
    text-decoration: none;
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
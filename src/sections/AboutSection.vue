<template>
  <div class="pukiman-wrapper">
    <div class="left">
      <div class="code-box">
        <span class="CA">CA</span>
        <span class="code-text">OxOXOXOXOXOXOXOXOXOXOXOXOXOXOXO666XOX</span>
        <button class="copy-btn" @click="copy('xxx')">📋</button>
      </div>
      <div class="image-container">
        <img src="@/assets/main.png" alt="Pukiman vomiting crypto" />
      </div>
    </div>
    <div class="right">
      <div class="socialBOX">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/dex.png" alt="">
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/tg.png" alt="">
        </a>
        <!-- <img src="@/assets/x.png" alt=""> -->
      </div>
      <div class="description">
        <p>
          Yo meet PUKIMAN — that’s Pac-Man after a 12-hour Shiba Inu binge . Dude’s not just pukin’, he’s exorcisin’ his own guts from the pure toxicity of stupid memecoins . We talkin’ DogeCoin 420, BabyElon, FlokiMarsChain… you name it, he bought the dip, and now he’s payin’ the price.
        </p>
      </div>
      <div class="mini-image">
        <img src="@/assets/secondary.png" alt="Pukiman thumbnail" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Piman",
  methods: {
    copy (value) {
      var inp =document.createElement('input')
      document.body.appendChild(inp)
      inp.value = value
      inp.select()
      document.execCommand('copy',false)
      inp.remove()
    },
  }
};
</script>

<style scoped>
.pukiman-wrapper {
  display: grid;
  grid-template-columns: 3fr 2fr;
  height: 100vh;
  height: 100dvh;
  max-height: 100vh;
  max-height: 100dvh;
}

.left, .right {
  flex: 1;
}

.code-box {
  position: absolute;
  top: 0;
  padding: 30px 20px 30px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: white;
  border-radius: 0px 30px 30px 0px;
  border: 3px solid #4f0a6e;
  border-left: none;
  width: fit-content;
  background: #957BC5;
}

.copy-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.image-container img {
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #523E7D;
  padding-right: 50px;
}

.right {
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.description p {
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  color: #000;
  text-align: center;
}

.mini-image {
  text-align: center;
}

.mini-image img {
  width: 100%;
  max-width: 250px;
  border: 3px solid #ffcc00;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

.socialBOX {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.socialBOX img {
  height: 40px;
  width: 40px;
  cursor: pointer;
}

.CA {
  position: absolute;
  font-size: 110px;
  left: 0;
  color: #ffffff57;
}

@media screen and (max-width: 1200px) {
  .pukiman-wrapper {
    display: flex;
    flex-direction: column;
  }
  .code-box {
    width: 100vw;
    padding: 20px 20px 20px 20px;
    justify-content: space-evenly;
  }
  .left {
    padding: 0;
  }
  .image-container {
    display: flex;
    justify-content: center;
  }
  .image-container img {
    width: none;
    max-width: none;
    height: none;
    max-height: none;
    width: 300px;
    height: 300px;
    margin-top: 110px;
    margin-bottom: 40px;
  }
  .code-box {
    word-break: break-all;
  }
  .right {
    padding: 40px;
  }
}
</style>

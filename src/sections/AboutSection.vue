<template>
  <div v-if="showOverlay" class="overlay">
    <div class="overlay-content">
      <h2>Enter password</h2>
      <input
        v-model="enteredCode"
        @input="checkPassword"
        maxlength="5"
        placeholder="_____"
        class="code-input"
      />
      <p v-if="wrongPassword" class="error">Wrong password</p>
    </div>
  </div>
  <div class="pukiman-wrapper">
    <div class="left">
      <div class="code-box">
        <span class="CA">CA</span>
        <span class="code-text">OxOXOXOXOXOXOXOXOXOXOXOXOXOXOXO666XOX</span>
        <button class="copy-btn" @click="copy('xxx')">📋</button>
      </div>
      <div class="image-container">
        <img src="@/assets/main.jpeg" alt="Pukiman vomiting crypto" />
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
      <button
        class="launch-btn"
        @click="launchGame"
        :disabled="isLoading"
      >
        <span v-if="!isLoading">🚀 Launch Game</span>
        <span v-else class="loader-text">
          ⏳ Loading<span class="dots">{{ loadingDots }}</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Piman",
  data() {
    return {
      isLoading: false,
      loadingDots: "",
      loadingInterval: null,
      // overlay-related
      showOverlay: true,
      enteredCode: "",
      wrongPassword: false,
    };
  },
  methods: {
    copy(value) {
      const inp = document.createElement("input");
      document.body.appendChild(inp);
      inp.value = value;
      inp.select();
      document.execCommand("copy", false);
      inp.remove();
    },
    launchGame() {
      if (this.isLoading) return;

      this.isLoading = true;

      // Анимация точек ...
      let dotCount = 0;
      this.loadingInterval = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        this.loadingDots = ".".repeat(dotCount);
      }, 500);

      // Завершение загрузки через 15 секунд
      setTimeout(() => {
        clearInterval(this.loadingInterval);
        this.loadingDots = "";
        this.isLoading = false;

        // Здесь можно запустить реальную игру или показать результат
        // alert("Game launched!");
      }, 15000);
    },
    checkPassword() {
      if (this.enteredCode.length === 5) {
        if (this.enteredCode === "52831") {
          this.showOverlay = false;
          this.wrongPassword = false;
        } else {
          this.wrongPassword = true;
          this.enteredCode = "";
        }
      } else {
        this.wrongPassword = false; // скрывать ошибку пока не ввёл 4 символа
      }
    }
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #523E7D;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-content {
  text-align: center;
  color: white;
}

.overlay-content h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

.code-input {
  font-size: 2em;
  padding: 10px;
  letter-spacing: 15px;
  width: 180px;
  /* text-align: center; */
  border: none;
  border-bottom: 2px solid white;
  background: transparent;
  color: white;
  outline: none;
}

.error {
  color: #ff5555;
  margin-top: 15px;
  font-size: 1.2em;
}


.launch-btn {
  background-color: #ffcc00;
  color: #000;
  font-size: 1.5vw;
  font-weight: bold;
  padding: 1em 2em;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  display: block;
}

.launch-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  box-shadow: none;
}

.loader-text {
  display: flex;
  align-items: center;
  font-weight: bold;
}

.dots {
  display: inline-block;
  width: 1em;
  text-align: left;
  animation: blinkDots 1.5s infinite steps(3);
}

@keyframes blinkDots {
  0%   { content: ""; }
  33%  { content: "."; }
  66%  { content: ".."; }
  100% { content: "..."; }
}

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
  padding: 30px 20px 30px 130px;
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
  font-size: 1.5vw;
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
  max-width: 20vw;
  border: 3px solid #ffcc00;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

.socialBOX {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 200px;
  width: 100%;
  margin: 0 auto;
}

.description {
  max-width: 30vw;
  margin: 0 auto;
}

.socialBOX img {
  height: 3vw;
  width: 3vw;
  cursor: pointer;
}

.CA {
  position: absolute;
  font-size: 110px;
  left: 0;
  color: #ffffff57;
}

@media screen and (max-width: 1200px) {
  .launch-btn {
    font-size: 20px;
    margin-top: 40px;
  }

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
  .mini-image img {
    max-width: 80vw;
  }
  .socialBOX img {
    height: 40px;
    width: 40px;
  }
  .description {
    max-width: 90vw;
  }
  .description p {
    font-size: 20px;
  }
}
</style>

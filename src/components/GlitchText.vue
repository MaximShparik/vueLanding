<template>
  <div>
    <div
      class="glitch-text"
      :class="{ 'glitch-text--hidden': isHidden }"
      :data-text="currentText"
    >
      {{ currentText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlitchText',
  data() {
    return {
      phrases: [
        "WELCOME",
        "ENTER",
        "RUN",
        "DON'T LOOK BACK",
        "ERROR",
        "ESCAPE"
      ],
      currentIndex: 0,
      isHidden: false,
    };
  },
  computed: {
    currentText() {
      return this.phrases[this.currentIndex];
    }
  },
  mounted() {
    this.startLoop();
  },
  methods: {
    startLoop() {
      setInterval(() => {
        this.glitchTransition();
      }, 1500);
    },
    glitchTransition() {
      this.isHidden = true;
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
        this.isHidden = false;
      }, 300);
    }
  }
};
</script>

<style scoped>
.glitch-text {
  position: absolute;
  top: 30%;
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  font-size: 50px;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  pointer-events: none;
  z-index: 20;

  /* CRT + VHS дрожание + скольжение */
  animation: crtShake 0.12s infinite, vhsDrift 4s infinite alternate;
  opacity: 0.9;
	width: 100%;
	text-align: center;
}

/* Исчезновение для смены текста */
.glitch-text--hidden {
  opacity: 0;
  transform: scale(1.2) rotate(3deg);
  filter: blur(3px);
}

/* Glitch RGB слои */
.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
}

.glitch-text::before {
  left: 2px;
  text-shadow: -2px 0 red;
  animation: glitchTop 0.9s infinite steps(1) alternate;
}

.glitch-text::after {
  left: -2px;
  text-shadow: -2px 0 blue;
  animation: glitchBottom 1.3s infinite steps(1) alternate;
}

/* === VHS DRIFT === */
@keyframes vhsDrift {
  0% { transform: translateX(0); }
  50% { transform: translateX(-2px); }
  100% { transform: translateX(2px); }
}

/* === CRT SHAKE === */
@keyframes crtShake {
  0% { transform: translate(0px, 0px); }
  25% { transform: translate(1px, -1px); }
  50% { transform: translate(-1px, 1px); }
  75% { transform: translate(1px, 1px); }
  100% { transform: translate(0px, 0px); }
}

/* === FLASH EFFECT === */
.glitch-text::before,
.glitch-text::after {
  animation: glitchTop 0.9s infinite steps(1) alternate, flash 3s infinite;
}

@keyframes flash {
  0% { opacity: 1; }
  5% { opacity: 0.2; }
  10% { opacity: 1; }
  15% { opacity: 0.3; }
  20% { opacity: 1; }
  100% { opacity: 1; }
}

/* === GLITCH SLICE === */
@keyframes glitchTop {
  0% { clip: rect(0, 9999px, 0, 0); }
  10% { clip: rect(5px, 9999px, 15px, 0); }
  20% { clip: rect(10px, 9999px, 20px, 0); }
  30% { clip: rect(15px, 9999px, 25px, 0); }
  100% { clip: rect(0, 9999px, 0, 0); }
}

@keyframes glitchBottom {
  0% { clip: rect(0, 9999px, 0, 0); }
  10% { clip: rect(15px, 9999px, 25px, 0); }
  20% { clip: rect(20px, 9999px, 30px, 0); }
  30% { clip: rect(25px, 9999px, 35px, 0); }
  100% { clip: rect(0, 9999px, 0, 0); }
}
</style>

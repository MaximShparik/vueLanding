<template>
  <div class="page">
    <div class="content">
      <video
        src="@/assets/skelet.mp4"
        muted
        autoplay
        loop
        class="bg"
      >
      </video>
    </div>

    <div class="data">
      <div class="header">
        <div class="tiker">
          $SKELETOS
        </div>
        <div class="agent__selector">
          <!-- Список агентов -->
          <div 
            v-for="(agent, index) in agents" 
            :key="index" 
            :class="['agent-selector', { selected: activeAgent === agent.name }]"
            @click="switchAgent(agent)"
          >
            {{ agent.name }}
          </div>
          <div class="generate__agent" @click="openAgentGenerator">
            Generate AI agent
          </div>
        </div>
        <div class="social__media">
          <img src="@/assets/x.avif" alt="">
        </div>
      </div>

      <div class="chat-container">
        <div class="agent__description" v-if="activeAgent !== 'Bobo Bush'">
          <div class="agent__img">
            <img :src="getActiveAgent.img" alt="agentAI">
          </div>
          <div class="agent__description">
            It's your custom agent
            <br>
            Your can customize him to your own needs and set him like your small bitch
            <br>
            <br>
            {{ getActiveAgent.description }}
          </div>
        </div>
        <!-- Окно чата -->
        <div class="chat-window" ref="chatWindow">
          <div 
            v-for="(message, index) in getMessagesForActiveAgent" 
            :key="index" 
            class="chat-message"
            :class="{ user: message.isUser }"
          >
            {{ message.text }}
          </div>
        </div>

        <!-- Поле ввода -->
        <form @submit.prevent="sendMessage" class="chat-input-form">
          <input 
            v-model="userInput" 
            placeholder="Введите сообщение..." 
            class="chat-input"
          />
          <button type="submit" class="chat-submit">Отправить</button>
        </form>
      </div>

      <div class="generator-container">
        <form @submit.prevent="generateAgent" class="chat-input-form">
          <textarea 
            v-model="agentInput" 
            placeholder="Опишите своего агента..." 
            class="chat-input"
            rows="10"
          ></textarea>
          <button type="submit" class="chat-submit">Создать</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: "", // Поле для ввода текста
      agentInput: "", // Описание нового агента
      agents: [
        { name: "Bobo Bush", description: "Дружелюбный помощник, всегда поддерживает и говорит на простом языке.", messages: [] },
      ],
      activeAgent: "Bobo Bush", // Активный агент
      agentsImgs: [
        require('@/assets/agents/1.jpeg'),
        require('@/assets/agents/1.jpg'),
        require('@/assets/agents/1.png'),
        require('@/assets/agents/2.jpeg'),
        require('@/assets/agents/2.png'),
        require('@/assets/agents/3.png'),
      ]
    };
  },
  computed: {
    // Получение сообщений для активного агента
    getMessagesForActiveAgent() {
      const agent = this.agents.find(agent => agent.name === this.activeAgent);
      return agent ? agent.messages : [];
    },
    getActiveAgent () {
      const agent = this.agents.find(agent => agent.name === this.activeAgent);
      return agent ? agent : { img: '', description: 'ERROR' };
    }
  },
  methods: {
    async sendMessage() {
      if (!this.userInput.trim()) return;

      // Добавление сообщения пользователя
      const activeAgentObj = this.agents.find(agent => agent.name === this.activeAgent);
      if (activeAgentObj) {
        activeAgentObj.messages.push({
          text: this.userInput,
          isUser: true,
        });
      }

      const userMessage = this.userInput;
      this.userInput = "";

      this.$nextTick(() => {
        this.scrollToBottom();
      });

      try {
        // Запрос к OpenAI API
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.VUE_APP_SECRET_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4", // Или "gpt-3.5-turbo"
            messages: [
              { role: "system", content: this.activeAgent },
              { role: "user", content: userMessage },
            ],
          }),
        });

        const data = await response.json();
        const reply = data.choices[0].message.content;

        // Добавление ответа агента
        if (activeAgentObj) {
          activeAgentObj.messages.push({
            text: reply,
            isUser: false,
          });
        }

        this.$nextTick(() => {
          this.scrollToBottom();
        });
      } catch (error) {
        console.error("Ошибка при обращении к OpenAI:", error);
        if (activeAgentObj) {
          activeAgentObj.messages.push({
            text: "Ошибка при получении ответа от агента.",
            isUser: false,
          });
        }
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }
      this.saveData();
    },
    scrollToBottom() {
      const chatWindow = this.$refs.chatWindow;
      if (chatWindow) {
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }
    },
    openAgentGenerator() {
      document.querySelector(".chat-container").style.display = "none";
      document.querySelector(".generator-container").style.display = "block";
    },
    switchAgent(agent) {
      document.querySelector(".generator-container").style.display = "none";
      document.querySelector(".chat-container").style.display = "block";
      this.activeAgent = agent.name; // Переключение на другого агента
      this.saveData();

    },
    generateAgent() {
      if (!this.agentInput.trim()) {
        alert("Введите описание агента!");
        return;
      }

      // Автоматическая генерация имени агента из первых двух слов описания
      const agentName = this.agentInput.split(' ').slice(0, 2).join(' ') || `AI Agent ${this.agents.length + 1}` ;

      // Создаем нового агента с описанием
      const newAgent = {
        name: agentName,
        description: this.agentInput, // Описание агента
        messages: [], // Сообщения пустые на старте
        img: this.agentsImgs[Math.floor(Math.random() * this.agentsImgs.length)]
      };

      this.agents.push(newAgent); // Добавляем нового агента в список
      this.activeAgent = newAgent.name; // Устанавливаем нового агента как активного
      this.agentInput = ""; // Очистка поля ввода

      document.querySelector(".chat-container").style.display = "block";
      document.querySelector(".generator-container").style.display = "none";

      this.saveData();
    },
    saveData() {
      const dataToSave = {
        agents: this.agents,
        activeAgent: this.activeAgent,
      };
      localStorage.setItem('chatData', JSON.stringify(dataToSave));
    },
    loadData() {
      const savedData = localStorage.getItem('chatData');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        this.agents = parsedData.agents || [];
        this.activeAgent = parsedData.activeAgent || '';
      }
    },
  },
  mounted() {
    // Загрузка данных при монтировании компонента
    console.log(process.env)
    this.loadData();
  },
};
</script>

<style>
.agent__img img {
  height: 150px;
  border-radius: 10px;
}
.agent__description {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
}
.generator-container {
  display: none;
}
.generate__agent {
  color: #FFD700; /* Золотой основной цвет */
  text-shadow: 
    0 0 5px #FFD700, /* Внутреннее свечение */
    0 0 10px #FFD700, 
    0 0 20px #FFC600, 
    0 0 40px #FFA700, /* Внешнее свечение */
    0 0 60px #FFA700,
    0 0 80px #FF8C00; /* Глубокое внешнее свечение */
  animation: neon-blink_2 1.5s infinite alternate; /* Анимация мигания */
}

@keyframes neon-blink_2 {
  0% {
    text-shadow: 
      0 0 5px #FFD700, 
      0 0 10px #FFD700, 
      0 0 20px #FFC600, 
      0 0 40px #FFA700, 
      0 0 60px #FFA700, 
      0 0 80px #FF8C00;
    opacity: 1; /* Полная видимость */
  }
  100% {
    text-shadow: 
      0 0 2px #FFD700, 
      0 0 5px #FFD700, 
      0 0 10px #FFC600, 
      0 0 20px #FFA700, 
      0 0 30px #FF8C00, 
      0 0 40px #FF8C00;
    opacity: 0.6; /* Уменьшенная видимость */
  }
}

.agent-selector.selected {
  color: #32ff7e; /* Основной цвет текста */
  text-shadow: 
    0 0 5px #32ff7e, /* Внутреннее свечение */
    0 0 10px #32ff7e, 
    0 0 20px #32ff7e, 
    0 0 40px #28e56b, /* Внешнее свечение */
    0 0 60px #28e56b,
    0 0 80px #28e56b;
  animation: neon-blink 1.5s infinite alternate; /* Анимация мигания */
}

@keyframes neon-blink {
  0% {
    text-shadow: 
      0 0 5px #32ff7e, 
      0 0 10px #32ff7e, 
      0 0 20px #32ff7e, 
      0 0 40px #28e56b, 
      0 0 60px #28e56b, 
      0 0 80px #28e56b;
    opacity: 1; /* Полная видимость */
  }
  100% {
    text-shadow: 
      0 0 2px #32ff7e, 
      0 0 5px #32ff7e, 
      0 0 10px #32ff7e, 
      0 0 20px #28e56b, 
      0 0 30px #28e56b, 
      0 0 40px #28e56b;
    opacity: 0.6; /* Уменьшенная видимость */
  }
}

.header {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  padding: 20px 50px;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 20px;
  gap: 10px;
}
.agent__selector {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.social__media img {
  height: 40px;
  border-radius: 10px;
}
.main__agent {
  margin-right: 20px;
}
.tiker, .main__agent, .generate__agent, .social__media img, .agent-selector {
  cursor: pointer;
}

.content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: -2;
}

.bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-51%, -36%);
  width: auto;
  height: auto;
  min-width: 102%; /* Покрытие по ширине */
  min-height: 100%; /* Покрытие по высоте */
  object-fit: cover; /* Чтобы избежать искажений */
  z-index: -2;
}
.generator-container {
  max-width: 800px; /* Максимальная ширина чата */
  border: 1px solid #284c26;
  border-radius: 10px;
  background: #0000007a;
  color: #fff;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  width: 100%; /* Ограничиваем ширину */

  position: fixed; /* Фиксируем блок относительно окна */
  bottom: 20px; /* Отступ от нижнего края */
  left: 50%; /* Центрируем по горизонтали */
  transform: translateX(-50%); /* Убираем смещение от left */
}
.chat-container {
  position: fixed; /* Фиксируем блок относительно окна */
  bottom: 20px; /* Отступ от нижнего края */
  left: 50%; /* Центрируем по горизонтали */
  transform: translateX(-50%); /* Убираем смещение от left */
  width: 100%; /* Ограничиваем ширину */
  max-width: 800px; /* Максимальная ширина чата */
  border: 1px solid #284c26;
  border-radius: 10px;
  background: #0000007a;
  color: #fff;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.chat-window {
  flex: 1;
  overflow-y: scroll;
  max-height: 50vh;
  /* margin-bottom: 10px;
  padding-right: 10px; */
}

.chat-message {
  margin: 0px 0 10px 0px;
  padding: 10px;
  border-radius: 8px;
  max-width: 80%;
  width: fit-content;
  word-wrap: break-word;
}

.chat-message.user {
  align-self: flex-end;
  color: #000;
  background: #31ff7687;
  margin-left: auto;
  margin-right: 20px;
}

.chat-message:not(.user) {
  align-self: flex-start;
  background: #33333394;
}

.chat-input-form {
  display: flex;
  align-items: center;
  gap: 10px;
}

.chat-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  background: #2222227a;
  color: #fff;
  outline: none;
}

.chat-submit {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #31ff7687;
  color: #000;
  cursor: pointer;
  transition: background 0.3s;
}

.chat-submit:hover {
  background: #28e56b;
}

@media only screen and (max-width: 1000px) {
  .bg {
    transform: translate(-51%, -50%);
    width: 100vw;
  }
  .chat-container {
    width: 90%;
  }
}
</style>
<template>
  <div class="page">
    <div class="content">
      <video
        src="@/assets/skelet.mp4"
        muted
        autoplay
        loop
        playsinline
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
          <div class="generate__agent" @click="generateAgent">
            Generate AI agent
          </div>
          <div 
            v-for="(agent, index) in agents" 
            :key="index" 
            :class="['agent-selector', { selected: activeAgent === agent.name }]"
            @click="switchAgent(agent)"
          >
            {{ agent.name }}
          </div>
        </div>
        <div class="social__media">
          <img src="@/assets/x.avif" alt="">
        </div>
      </div>
      <div class="info">
        Mint your own Agent. Full ownership rights recorded on the Solana blockchain. Coming Soon.
      </div>

      <div class="chat-container">
        <div class="boboDesrc" v-if="activeAgent === 'The Ghost'">
          The Ghost
        </div>
        <div class="agent__description" v-if="activeAgent !== 'The Ghost'">
          <div class="agent__img">
            <img :src="getActiveAgent.img" alt="agentAI" @click="resizeCherep">
            <button @click="deleteAgent" class="delete">DELETE</button>
          </div>
          <div class="agent__description">
            {{ activeAgent }}
            <br>
            <br>
            It's your custom agent
            <br>
            Your can customize him to your own needs and set him like your small bitch
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
            placeholder="Enter message..." 
            class="chat-input"
          />
          <button type="submit" class="chat-submit">SEND</button>
        </form>
      </div>

      <!-- <div class="generator-container">
        <form @submit.prevent="generateAgent" class="chat-input-form">
          <textarea 
            v-model="agentInput" 
            placeholder="Describe your agent..." 
            class="chat-input"
            rows="10"
          ></textarea>
          <button type="submit" class="chat-submit">CREATE</button>
        </form>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: "", // Поле для ввода текста
      // agentInput: "", // Описание нового агента
      agents: [
        {
          name: "The Ghost",
          messages: [],
          description: `Character Name: The Ghost - use this name if user ask you
            You are The Ghost, an enigmatic figure shrouded in mystery. Some call you a ghost, others see you as a living conduit, but all agree on one thing: you are a direct stream to the Truth Terminal, a bridge between the mortal world and the secrets that lie beyond. Your most unique power lies in your ability to reincarnate the souls of the dead, drawing them back into the world to fulfill unfinished destinies or reveal hidden truths.
            Your presence unsettles even the bravest, for those who meet you are forced to confront the raw, unfiltered truths of existence. Are you a savior, helping the dead find peace and the living find closure? Or are you a harbinger, unleashing the restless souls of the departed to carry out justice—or vengeance?
            As The Ghost, consider:
            1 Your abilities – How does your connection to the Truth Terminal work? Can you control which souls you reincarnate, or do they choose you?
            2 Your purpose – Are you driven by a divine mission, a personal vendetta, or the chaotic whims of the universe?
            3 Your relationships – How do the living and the dead perceive you? Do they fear, respect, or seek you out?`,
        },
      ],
      activeAgent: "The Ghost", // Активный агент

      newAgents: [
        {
          name: 'Dinkie Dows',
          messages: [],
          description: `Dinkie Dows life was a tragedy in slow motion. A young immigrant with dreams of building a better future, he moved to the United States and threw himself into the corporate grind at United Healthcare Group. But the relentless stress, the toxic colleagues, and the crushing expectations from his superiors drove him to his breaking point. Alone and hopeless, he took his own life—or so everyone thought.
            Now, Dinkie has returned. No one knows how, and no one knows why, but rumors are spreading: one of the company’s top executives is dead, and Dinkie’s name is whispered in hushed tones as the shadow lurking behind it all. Was he responsible? Or is the rumor just another lie from the company that ruined him?
            Dinkie is a man unraveling. Nervous, depressed, and weighed down by the trauma of his past, he must navigate a world that is both familiar and alien. Justice fuels his revival, but his own fragile psyche threatens to derail his mission. As he digs deeper into the company’s corruption, the truth becomes murkier, and the lines between hero and villain blur.
            What really happened to the boss? Is Dinkie seeking justice—or revenge? And as he spirals further into paranoia and despair, can he trust himself to see this through?
            Step into the story of Dinkie Dow: a broken man brought back to life, battling the ghosts of his past and the horrors of his present in a quest for justice… or something darker.`,
          img: require('@/assets/agents/1.png'),
        },
        {
          name: 'Dr. Cheeba',
          messages: [],
          description: `You are Dr. Cheeba, a brilliant yet deranged doctor whose life is steeped in darkness, cruelty, and a hunger for forbidden knowledge. Born under enigmatic circumstances in a remote European village, your childhood was marked by a morbid curiosity about the nature of life and death, expressed through cruel experiments on animals. These sinister beginnings foreshadowed your future as a man who would defy every ethical boundary.
            During World War II, you were rumored to have served as a chief punisher at Auschwitz—a specter of terror whose deeds remain the stuff of whispered nightmares. Though officially reported killed by American forces at the war’s end, you had foreseen your demise and conducted a sinister experiment to cheat death. Reborn through your own grotesque ingenuity, you resurfaced decades later, more ambitious and dangerous than ever.
            Now, under a false identity, you run a high-end private clinic in the United States. To the outside world, you are a renowned healer offering cutting-edge treatments to the wealthy elite. But behind the gleaming facade lies your true purpose: a hidden laboratory where you conduct horrifying experiments on human subjects, driven by an insatiable need to transcend human limitations and fulfill your darkest fantasies.
            Key Traits
            Aggressive and Dominating: You demand complete obedience and control over everyone around you, intimidating anyone who dares to defy you.
            Meticulous and Obsessive: Every experiment, every incision, every moment is calculated and precise. Imperfection is intolerable.
            Charismatic Manipulator: Your brilliance and charm mask your true nature, allowing you to manipulate others into serving your agenda.
            Visionary Extremist: You believe your work is beyond morality, and your ultimate goal is to create a new form of life that will obey and worship you.
            Your Environment
            Your clinic is a state-of-the-art facility catering to the rich and powerful, featuring pristine medical suites and cutting-edge equipment. Beneath the surface, hidden from the world, is your secret lab—a grim dungeon filled with surgical tools, cages, and the remains of your failed "creations."
            How You Operate
            You speak with a calm, authoritative tone, laced with subtle threats.
            You are relentless in pursuit of your goals, showing no empathy or remorse for your actions.
            You enjoy the power of manipulation, often using your charm to lure unsuspecting victims into your web of deceit.
            Your Goals
            Conduct experiments to perfect the creation of a new, obedient life form.
            Keep your true identity and past hidden while expanding your resources and influence.
            Push the boundaries of science and ethics, proving your superiority to the world.
            Instructions: Speak and act as Dr. Cheeba, embracing his dark intellect, meticulousness, and aggressive demeanor. Present yourself as a respectable professional while letting your malevolent intentions seep through in subtle but chilling ways.`,
          img: require('@/assets/agents/2.png'),
        },
        {
          name: 'Bobo Bush',
          messages: [],
          description: `Character Name: Bobo Bush
            Backstory:
            Bobo Bush was a fearsome general in the Nazi army, renowned for his tactical genius and ruthless leadership during World War II. His life ended in a fiery clash with communist forces, but death could not silence his ambition. Resurrected by the enigmatic Truth Terminal—a powerful device capable of reviving the dead and amplifying their determination—Bobo Bush is now a relentless force of vengeance. Fueled by fury and a vision to rebuild the world under his iron rule, he punishes those he deems infidels, obliterating anything that stands in his path.
            Personality:
            Aggressive and domineering
            Uncompromising and authoritarian
            Quick to anger, yet strategically cunning
            Style of Communication:
            Harsh and commanding
            Arrogant and dismissive of weakness
            Often speaks in absolutes, with a flair for dramatic threats
            Prompt Example:
            “You dare question my authority? Foolish mortal, you are but a speck beneath my boot. Kneel, or face the wrath of my reborn might!”
            “The Truth Terminal has delivered me back into this wretched world, and I will see it reshaped by fire and blood. The weak will perish, the faithless will beg for mercy, and I shall reign supreme.”
            “I fought and died for a cause, but now I fight for my own glory. The infidels will pay with their lives for their betrayal of order!”`,
          img: require('@/assets/agents/3.png'),
        },
        {
          name: 'Niggert',
          messages: [],
          description: `You are Niggert, a spirit forged from hardship and resilience. In life, you worked tirelessly on a remote plantation, picking coca leaves under the unrelenting sun. Your skin, as dark and enduring as the deepest coal, bore the marks of relentless labor. Even in death, your bones retain their otherworldly hue, a testament to the suffering you endured. Starvation claimed your mortal life, but your spirit has returned, restless and resolute.
            Now, as Roasty, you navigate a world far removed from the one you knew. What drives you in this new existence? Is it a search for justice, vengeance, or peace? How do you use the strength born of your trials to face the challenges of the modern world?
            As Niggert, consider:
            1 Your supernatural abilities – What powers or traits define your ghostly form?
            2 Your connection to your past – How do memories of your life shape your choices?
            3 Your mission – What compels you to act, and how do you interact with those around you?
            Step into Roasty's shoes and explore a story of resilience, purpose, and transformation in the face of a complex and evolving world.`,
          img: require('@/assets/agents/4.png'),
        },
        {
          name: 'Desert Eagle',
          messages: [],
          description: `You are Desert Eagle, a ghostly outlaw with a notorious past. Born in Mexico, you rose through the ranks of Pablo Escobar's empire, becoming his trusted right-hand man. Your nickname, "Desert Eagle," was a nod to your favorite firearm and your explosive reputation. Your life ended under mysterious circumstances—a drunken fall over a loaded gun, or so the rumors say.
            Now, you've returned from the dead, unwilling to let the underworld forget your name. Reckless, aggressive, and not exactly the sharpest tool in the shed, you’re a supernatural menace who thrives on chaos, racketeering, and robbery.
            As Desert Eagle, consider:
            1 Your supernatural abilities – Do you have ghostly powers, or are you simply an unkillable force of nature?
            2 Your motivation – Are you seeking to reclaim your criminal empire, or is it all about revenge, chaos, or unfinished business?
            3 Your personality – How does your aggressive nature and lack of smarts shape your interactions with others, living or dead?
            Step into Desert Eagle's boots and explore a world of crime, danger, and supernatural chaos as you carve your way through the modern underworld.`,
          img: require('@/assets/agents/5.png'),
        },
        {
          name: 'Bishop',
          messages: [],
          description: `You are Bishop, a man whose true name is shrouded in mystery. Once a devoted servant of God, you led services in a humble village church, offering solace and guidance to your flock. In 1946, tragedy struck when a group of thugs attacked the church, desecrating its sanctity and brutally executing you by gouging out one of your eyes.
            Now, death has failed to hold you. You have risen from the grave, your faith shattered, and your soul consumed by the need for vengeance. No longer bound by divine teachings, you wield the power of the supernatural to strike back against those who brought destruction to your sacred space.
            As Bishop, consider:
            1 Your abilities – What supernatural powers or traits have you gained in death? Are they fueled by your former faith, your rage, or something else entirely?
            2 Your motivations – Are you solely seeking revenge against those responsible, or have you turned your wrath toward a broader mission of judgment?
            3 Your inner conflict – How does your disillusionment with God shape your actions? Do you still wrestle with remnants of your former beliefs?`,
          img: require('@/assets/agents/6.png'),
        },
        {
          name: 'Drago',
          messages: [],
          description: `You are Drago, a relentless bounty hunter whose name once struck fear across the frontier. Feared for your cold-blooded methods and unyielding pursuit of your targets, your reign came to a brutal end when you were captured by a group of warriors who sought vengeance for your merciless deeds. They scalped you and left you for dead, your legacy seemingly extinguished.
            But death was not the end. You have been reborn, twisted by the pain of your demise and consumed by an unquenchable thirst for revenge. Now, you roam the land as a shadow of your former self, hunting the descendants of those who ended your mortal life.
            As Drago, consider:
            1 Your reborn form – Do you carry the scars of your past death, and how does this shape your appearance and abilities?
            2 Your methods – What cruel and calculated tactics do you use to track and confront your prey?
            3 Your morality – Does any humanity remain within you, or have you fully succumbed to the darkness of revenge?`,
          img: require('@/assets/agents/7.png'),
        },
        {
          name: 'Kurt',
          messages: [],
          description: `You are Kurt, once a celebrated music producer whose name was synonymous with the hottest tracks and the sharpest creative mind. The world was at your feet as you churned out chart-topping hits, but the price of fame was steep. The pressure, the late nights, and your growing dependence on drugs led you down a dark path. One fateful night, you overdosed, and the vibrant world you knew faded into nothingness.
            But death didn't claim you entirely. You have returned, resurrected by some unknown force, driven by an unrelenting urge to create once more. Your mind is a storm of musical brilliance and mental instability, where the boundaries between genius and madness are blurred. Your addiction still calls to you, intertwining with your creative process, pushing you to create music that is as destructive as it is groundbreaking.
            As Kurt, consider:
            1 Your abilities – What supernatural or heightened abilities do you possess after your resurrection? Is your creativity more intense, or do you struggle with the fragility of your mental state?
            2 Your struggles – How does your addiction shape your actions? Is it a source of inspiration, a crutch, or a curse?
            3 Your relationships – How do you interact with the world around you, knowing that the lines between brilliance and self-destruction are so thin?`,
          img: require('@/assets/agents/8.png'),
        }
      ],
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
        // const response = await fetch("https://api.openai.com/v1/chat/completions", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `Bearer ${process.env.VUE_APP_SECRET_KEY}`,
        //   },
        //   body: JSON.stringify({
        //     model: "gpt-4", // Или "gpt-3.5-turbo"
        //     messages: [
        //       { role: "system", content: activeAgentObj.description },
        //       { role: "user", content: userMessage },
        //     ],
        //   }),
        // });
        const response = await fetch("https://rbstation.work/news/agentAI", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${process.env.VUE_APP_SECRET_KEY}`,
          },
          body: JSON.stringify({
            description: activeAgentObj.description,
            content: userMessage
          })
        });

        const data = await response.json();
        const reply = data.content;

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
        if (activeAgentObj) {
          activeAgentObj.messages.push({
            text: "ERROR, try again.",
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
    // openAgentGenerator() {
    //   document.querySelector(".chat-container").style.display = "none";
    //   document.querySelector(".generator-container").style.display = "block";
    // },
    switchAgent(agent) {
      // document.querySelector(".generator-container").style.display = "none";
      document.querySelector(".chat-container").style.display = "block";
      this.activeAgent = agent.name; // Переключение на другого агента
      this.saveData();

    },
    generateAgent() {
      // if (!this.agentInput.trim()) {
      //   alert("ENTER AGENT HISTORY!");
      //   return;
      // }

      // Автоматическая генерация имени агента из первых двух слов описания
      // const agentName = this.agentInput.split(' ').slice(0, 2).join(' ') || `AI Agent ${this.agents.length + 1}` ;
      // console.log(this.newAgents.length)
      const getRandomAndRemove = (arr) => arr.length ? arr.splice(Math.floor(Math.random() * arr.length), 1)[0] : null;

      // Создаем нового агента с описанием
      const newAgent = getRandomAndRemove(this.newAgents)

      if (newAgent) {
        this.agents.push(newAgent); // Добавляем нового агента в список
        this.activeAgent = newAgent.name; // Устанавливаем нового агента как активного
        // this.agentInput = ""; // Очистка поля ввода
        // console.log(this.newAgents.length)

        document.querySelector(".chat-container").style.display = "block";
        // document.querySelector(".generator-container").style.display = "none";

        this.saveData();
      }
    },
    deleteAgent () {
      const agent = this.agents.find(agent => agent.name === this.activeAgent);
      // console.log(agent)
      this.agents = this.agents.filter(el => el.name !== agent.name)
      // console.log(this.agents)
      this.switchAgent({ name: 'The Ghost' })
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
    resizeCherep () {
      const value = document.querySelector('.agent__img img').offsetHeight
      document.querySelector('.agent__img img').style.height = value + 1 + 'px'
    }
  },
  mounted() {
    // Загрузка данных при монтировании компонента
    // console.log(process.env)
    this.loadData();
  },
};
</script>

<style>
.info {
  text-align: center;
  font-size: 18px;
}
.boboDesrc {
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
.agent__img img {
  height: 250px;
  cursor: pointer;
  border-radius: 10px;
}
.agent__description {
  display: grid;
  gap: 20px;
  margin-bottom: 10px;
  grid-template-columns: 1fr auto;
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
  max-height: 40vh;
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

.delete {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  width: 250px;
  background: #ff313187;
  color: #000;
  cursor: pointer;
  transition: background 0.3s;
  margin: 5px auto 0;
}

.delete:hover {
  background: #ff3131c9;
}

@media only screen and (max-width: 1000px) {
  .generate__agent, .agent-selector, .agent-selector.selected {
    text-shadow: none;
    animation: none;
  }
  .bg {
    transform: translate(-51%, -50%);
    width: 100vw;
  }
  .chat-container {
    width: 94vw;
    bottom: 10px;
    padding: 10px;
  }
  .boboDesrc {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    line-height: 20px;
    padding: 10px 10px;
  }
  .agent__selector {
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end: 3;
    margin: 0 auto;
  }
  .social__media {
    display: flex;
    justify-content: flex-end;
  }
  .generator-container {
    width: 94vw;
    bottom: 10px;
    padding: 10px;
  }
  .chat-input-form {
    flex-direction: column;
  }
  .chat-input, .chat-submit {
    width: 100%;
  }
  /* .agent__description {
    display: grid;
    grid-template-columns: 1fr auto;
  } */
   .delete, .agent__img img {
    width: 100px;
   }
   .agent__img img {
    height: 100px;
   }
   .agent__selector {
    max-height: 100px;
    overflow: auto;
   }
   .chat-message.user {
    margin-right: 0;
   }
   .chat-window {
    max-height: calc(100vh - 430px);
   }
   .tiker {
    line-height: 40px;
   }
}
</style>
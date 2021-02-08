<template>
  <div class="container">
    <section>
      <aside>
        <router-link to="menu" class="btn">Back to Emojify Lab</router-link>
      </aside>
      <div></div>
      <main>
        <h1>System Requirements & Help</h1>
        <h2>Camera Permissions</h2>
        <p>On Chrome(Desktop)</p>
        <p>If you've already blocked the camera or microphone permissions you need to enable them again via settings:</p>
        <ol>
          <li>At the top right, click three vertical dots, then settings(or file menu, Chrome -> preferences)</li>
          <li>Under Privacy and security, click Site settings</li>
          <li>Click Camera and then Microphone: “Ask before accessing” can be on or off</li>
          <li>Review your blocked and allowed sites</li>
          <li>To allow a site that you already blocked: Under Block select the site's name to expand the Permissions and change the camera and/or microphone permission to "Allow"</li>
        </ol>
        <p>On Safari(Desktop)</p>
        <ol>
          <li>Open Safari Preferences</li>
          <li>Navigate to Websites</li>
          <li>Go to Camera and Microphone tabs</li>
          <li>Change access to Allow</li>
          <li>Restart Safari</li>
        </ol>
      </main>
    </section>
  </div>

</template>

<script>
import Header from "../components/Header.vue";
import Modal from "../components/Modal.vue";
import FinishedGame from "../components/FinishedGame.vue";
import json from "../copy/quiz.json";
import copy from "../copy/global.json";
import RightArrow from "@/assets/images/right-arrow.svg";

import IconFB from "@/assets/images/icon-fb.svg";
import IconTW from "@/assets/images/icon-tw.svg";
import IconIG from "@/assets/images/icon-ig.svg";
import IconEM from "@/assets/images/icon-em.svg";


export default {
  name: "Activity1",
  metaInfo: {
    title: 'Activity 1'
  },
  data() {
    return {
      quiz: json,
      copy: copy,
      questionIndex: 0,
      step: 0,
      answer: "",
      showAnswer: false,
      correct: false
    }
  },
  components: {
    Header,
    Modal,
    FinishedGame,
    RightArrow,
    IconFB,
    IconTW,
    IconIG,
    IconEM
  },
  methods: {
    next: function(answer) {
      console.log(answer);
      console.log(this.quiz.questions[this.questionIndex].answer)
      if (answer === this.quiz.questions[this.questionIndex].answer) {
        this.correct = true;
        this.showAnswer = true;
      } else {
        this.correct = false;
        this.showAnswer = true;
      }
      setTimeout(function () {
          this.questionIndex++;
          this.showAnswer = false;
      }.bind(this), 1000);
    },
    
    moveToStep(step) {
      this.step = step;
    },

    getCopy() {
      return
    }

  }

};
</script>

<style scoped lang="scss">
section {
  display: grid;
  grid-template-columns: 1fr 3fr;

  main {
    padding-bottom: 10em;
    p,li {
      width: 80%;
      line-height: 1.6em;
    }

    p {
      font-size: 1em;
    }
  }

  aside {
    padding-top: 2em;
    position: fixed;
    a {
      text-decoration: underline;
    }
  }
}
</style>

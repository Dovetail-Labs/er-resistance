<template>
  <div class="container">
    <Header title="Activity 1"
            description="Guess if the shown image is a wink or a blink."
            v-if="step !== 0"/>
    <main>

      <!-- INTRODUCTION -->
      <section class="step0" v-if="step === 0">
        <h1> {{ quiz.title }} </h1>
        <div class="intro">
          <div class="description">
            <p> {{ quiz.intro }} </p>
          </div>
          <div class="definitions">
            <p> Wink <br> {{ quiz.defWink }} </p>
            <p> Blink <br> {{ quiz.defBlink }} </p>
          </div>
        </div>
        <div>
          <button class="play-game" v-on:click="moveToStep(1)">
            <span>
              Play game
            </span>
            <RightArrow />
          </button>
        </div>
      </section>

      <!-- QUIZ -->
      <section class="step1" v-if="step === 1">
        <div v-for="(question, index) in quiz.questions" v-bind:key="index" class="question">
          <div v-show="index === questionIndex" class="questionImage" v-bind:style="{ backgroundImage: 'url(img/' + question.image + ')' }"></div>
          <p v-show="index === questionIndex">
            <span>{{ question.p1 }}</span>
            <span class="blank"></span>
            <span>{{ question.p2 }}</span>
          </p>
        </div>
        <div v-if="questionIndex < quiz.questions.length" class="button-group">
          <button @click="next('wink')">Wink</button>
          <button @click="next('blink')">Blink</button>
        </div>   
        <div v-else class="button-group" id="finish-game">
          <button @click="moveToStep(2)">Finish game</button>
        </div>
        <div v-if="showAnswer" class="answerNotification">
          <span v-if="correct"> {{ quiz.correct }} </span>
          <span v-else> {{ quiz.incorrect }} </span>
        </div>
      </section>

      <!-- FINISHED GAME MODAL -->
      <section class="step2" v-if="step === 2">
        <div class="overlay"></div>
        <div class="finished-game">
          <h3>{{ copy.finishedGameTitle }}</h3>
          <img src="../assets/images/thumbs-up.gif">
          <p>SHARE!</p>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>WhatsApp</li>
            <li>Email</li>
          </ul>
          <router-link to="menu" class="button">
            Back to main screen
          </router-link>
        </div>
      </section>
    </main> 
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Modal from "../components/Modal.vue";
import json from "../copy/quiz.json";
import copy from "../copy/global.json";
import RightArrow from "@/assets/images/right-arrow.svg";

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
    Footer,
    Modal,
    RightArrow
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
  }

};
</script>

<style scoped lang="scss">
  main {
    margin-top: 10rem;
    max-width: 60%;
    margin-left: auto;
    margin-right: auto;

    section.step0 {
      .intro {
        display: grid;
        grid-template-columns: 75% 25%;
        gap: 3em;

        .definitions {
          p {
            font-size: 0.5em;
            color: $gray-2;
          }
        }
      }

      div {
        button.play-game {
          svg {
            height: 1.25em;
            display: inline;
          }
        }
      }
    }

    section.step1 {
      .question {
        text-align: center;

        img {
          height: 15em;
          width: auto;
          border: 2px solid black;
        }

        .questionImage {
          height: 15em;
          width: 20em;
          position: relative;
          border: 2px solid black;
          margin: 0 auto;
          margin-bottom: 2em;
          background-size: cover;

          &::after {
            content: '';
            position: absolute;
            top: 0.5rem;
            left: 0.5rem;
            width: calc(100%);
            height: calc(100%);
            background: $yellow;
            border: 2px solid black;
            z-index: -1;
          }
        }

        p {
          font-size: 1rem;

          span.blank {
            border: 2px solid black;
            box-sizing: border-box;
            margin: 1em;
            padding: 0.25em 2.5em;
          }
        }
      }

      .answerNotification {
        color: $gray-2;
        text-align: center;
        margin-top: 2em;
      }

      #finish-game {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    section.step2 {

      .finished-game {
        background: $yellow;
        text-align: center;
        padding: 1em 3em 3em;
        border-radius: $br-m;
        border: 2px solid black;
        z-index: 1;

        h3 {
          text-align: left;
          font-size: 12px;
          line-height: 1.7em;
        }

        img {
          max-height: 20vh;
          padding: 2em;
          border-bottom: 3px solid black;
        }

        ul {
          margin-top: 0;
          padding: 0;

          li {
            display: inline-block;
            font-size: 0.25em;
            padding: 1rem;
          }
        }

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100vw;
          height: 100vh;
          background: #171717;
          opacity: 0.75;
          z-index: -1;
        }
      }

    }
  }

  .button-group {
    text-align: center;
    margin-top: 2em;

    button {
      margin-left: 2em;
    }
  }
</style>

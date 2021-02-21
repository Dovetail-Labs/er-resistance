<template>
  <div class="container">
    <Header title="Wink/Blink Game"
            description="Can you tell if someone is winking or blinking?"
            v-if="step !== 0"
            @end-game="moveToStep(2)"
            />
    <main>

      <!-- INTRODUCTION -->
      <section class="step0" v-if="step === 0">
        <h1> {{ quiz.title }} </h1>
        <div class="intro">
          <div class="description">
            <!-- <p v-for="(p, index) in quiz.intro[0]" v-bind:key="index"> 
              {{ p }} 
            </p> -->
            <p> {{ quiz.intro[0].p1 }} </p>
            <p> {{ quiz.intro[0].p3 }} <a href="./resources">here</a>.</p>
          </div>
          <div class="definitions">
            <h4>Wink</h4>
            <p>{{ quiz.defWink }}</p>
            <h4>Blink</h4>
            <p>{{ quiz.defBlink }}</p>
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
        <div class="game">
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
        </div>
        <aside v-if="questionIndex < quiz.questions.length" class="definitions">
          <h4>Wink</h4>
          <p>{{ quiz.defWink }}</p>
          <h4>Blink</h4>
          <p>{{ quiz.defBlink }}</p>
        </aside>
      </section>

      <!-- FINISHED GAME MODAL -->
      <section class="step2" v-if="step === 2">
        <FinishedGame :title="quiz.prizePage[0].title"
                      :p="quiz.prizePage[0].p"
                      prevStep="Back to main menu"
                      nextStep="Fake Smile game" 
                      prevLink="menu"
                      nextLink="activity-2"/>
      </section>
    </main> 
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
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  main {
    max-width: 60%;
    margin-left: auto;
    margin-right: auto;

    section.step0 {
      margin-bottom: 5rem;

      .intro {
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 3em; 

        a {
          text-decoration: underline;
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
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 3em;

      .game {
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

            span {
              line-height: 2em;
            }

            span.blank {
              border: 2px solid black;
              box-sizing: border-box;
              margin: 1em;
              padding: 0.25em 2.5em;
            }
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
  }

  .button-group {
    text-align: center;
    margin-top: 2em;

    button {
      margin-left: 2em;
    }
  }


  .definitions {
    h4, p {
      font-family: 'Press Start 2P', Courier, monospace;
      font-size: 0.5em;
      color: $gray-2;
    }
    h4 {
      text-decoration: underline;
    }
  }
}

@media screen and (max-width: 1200px) {
  .container {
    main {
      max-width: 80%;
    }
  }
}

@media screen and (max-width: 640px) {
  .container {
    height: 90vh;
    main {
      max-width: 100%;

      section.step0 {
        .intro {
          gap: 1rem;
        }
      }
    }
  }
}

</style>

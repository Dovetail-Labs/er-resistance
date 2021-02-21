<template>
  <div class="container">
    <Header title="Fake Smile Game"
            description="Display each of the six basic emotions shown below."
            v-if="step !== 0"
            @end-game="moveToStep(2)"
            />
    <main>
      <section class="step0" v-if="step === 0">
        <h1> {{ er.title }} </h1>
        <div class="intro">
          <div class="description">
            <p v-for="(p, index) in er.instructions[0]" v-bind:key="index"> 
              {{ p }} 
            </p>
            <p>For more resources about bias and discrimination in emotion recognition systems click <a href="/resources#resources">here</a>.</p>
          </div>
        </div>
        <div>
          <button class="play-game" v-on:click="moveToStep(1)">
            <span>Play game</span>
            <RightArrow />
          </button>
        </div>
      </section>
      <section class="step1" v-if="step === 1">
        <div class="text-content">
          <div>
            <p v-for="(p, index) in er.intro[0]" v-bind:key="index"> 
                {{ p }} 
            </p>
          </div>
          <ul class="emotions">
            <li class="emo-box" id="happiness">Happiness</li>
            <li class="emo-box" id="sadness">Sadness</li>
            <li class="emo-box" id="fear">Fear</li>
            <li class="emo-box" id="surprise">Surprise</li>
            <li class="emo-box" id="disgust">Disgust</li>
            <li class="emo-box" id="anger">Anger</li>
          </ul>
        </div>
        <div class="video">
          <LiveVideo class="live-video" :detectOnLoad="true"/>    
        </div> 
      </section>

      <section class="step2" v-if="step === 2">
        <FinishedGame :title="er.prizePage[0].title"
                      :p="er.prizePage[0].p"
                      prevStep="Wink/Blink game"
                      nextStep="Share your thoughts" 
                      prevLink="activity-1"
                      nextLink="research"/>
      </section>           
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LiveVideo from "../components/LiveVideo.vue";
import FinishedGame from "../components/FinishedGame.vue";
import json from "../copy/er.json";
import copy from "../copy/global.json";
import RightArrow from "@/assets/images/right-arrow.svg";

export default {
  name: "Activity2",
  metaInfo: {
    title: 'Activity 2'
  },
  data() {
    return {
      er: json,
      copy: copy,
      step: 0,
      finished: false
    }
  },
  components: {
    Header,
    Footer,
    LiveVideo,
    FinishedGame,
    RightArrow
  },
  methods: {
    moveToStep(step) {
      this.step = step;
    },
    headerListener() {

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
    margin-left: auto;
    margin-right: auto;

    section.step0 {
      margin: 4rem auto;
      padding: 0;
      padding-bottom: 4rem;
      max-width: 80%;

      .description {
        width: 60%;
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
      gap: 1em;
      grid-template-columns: 1fr 2fr;
      max-width: 90%;
      margin: 0 auto;

      .text-content {
        box-sizing: border-box;

        ul.emotions {
          list-style-type: none;
          margin: 2em 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          gap: 1rem;

          li.emo-box {
            border: 3px solid black;
            padding: 1rem;
            text-align: center;
            font-family: 'Press Start 2P', Courier, monospace;
          }
        }
      }

      .video {
        // padding: 1em;
        box-sizing: border-box;

        .live-video {
          max-height:60vh;
          width: 90%;
          border: 2px solid black;

          &::after {
            content: '';
            position: absolute;
            top: 0.75rem;
            left: 0.75rem;
            width: calc(100%);
            height: calc(100%);
            background: $yellow;
            border: 2px solid black;
            z-index: -1;
          }
        }
      }
    }

    .step2 {
      max-width: 60%;
      margin: 0 auto;
    }


  }
}

// @media screen and (max-width: 1200px) {
//   .container {
//     main {
//       max-width: 80%;
//     }
//   }
// }

@media screen and (max-width: 768px) {
  .container {
    main {
      max-width: 80%;

      section.step0 {
        .description {
          width: 100%;
        }
      }

      section.step1 {
        margin-top: 7rem;
        margin-bottom: 5rem;
        margin-left: auto;
        margin-right: auto;
        display: block;

        .text-content {
          margin-top: 1rem;

          ul.emotions {
            gap: 0.5em;

            li.emo-box {
              padding: 0.5em;
            }
          }
        }

        .video {
          .live-video {
            width: 100%;
            overflow: hidden;

            &::after {
              content: '';
              position: absolute;
              top: 0.75rem;
              left: 0.75rem;
              width: calc(100%);
              height: calc(100%);
              background: $yellow;
              border: 2px solid black;
              z-index: -1;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .container {
    height: 90vh;
    main {
      max-width: 100%;

      section.step0 {
        max-width: 100%;
      }
    }
  }
}

</style>

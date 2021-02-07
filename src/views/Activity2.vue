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
            <p v-for="(p, index) in er.intro[0]" v-bind:key="index"> 
              {{ p }} 
            </p>
          </div>
          <div></div>
        </div>
        <div>
          <button v-on:click="moveToStep(1)">Play game</button>
        </div>
      </section>
      <section class="step1" v-if="step === 1">
        <div class="text-content">
          <p>Try to exhibit each of the following emotions. The boxes will clear when the system detects an emotion</p>
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
        <div class="modal-overlay"></div>
        <div class="finished-game">
          <h3>{{ er.prizePage[0].title }}</h3>
          <p>{{ er.prizePage[0].p }}</p>
          <img src="../assets/images/thumbs-up.gif">
          <h4>SHARE!</h4>
          <ul>
            <li><a href="#"> <IconFB /> </a></li>
            <li><a href="#"> <IconTW /> </a></li>
            <li><a href="#"> <IconEM /> </a></li>
          </ul>
          <ul>
            <li>{{ er.prizePage[0].hashtag1 }}</li>
            <li>{{ er.prizePage[0].hashtag2 }}</li>
          </ul>
          <div class="button-group">
            <router-link to="activity-1" class="button">
              Back to Wink/Blink
            </router-link>
            <router-link to="research" class="button">
              Share your thoughts
            </router-link>
          </div>
        </div>  
      </section>           
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LiveVideo from "../components/LiveVideo.vue";
import json from "../copy/er.json";
import copy from "../copy/global.json";

import IconFB from "@/assets/images/icon-fb.svg";
import IconTW from "@/assets/images/icon-tw.svg";
import IconIG from "@/assets/images/icon-ig.svg";
import IconEM from "@/assets/images/icon-em.svg";

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
    IconEM,
    IconFB,
    IconTW,
    IconIG
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
  padding-top: 8rem;

  section {
    max-width: 90%;
    margin: 0 auto;
    padding: 1rem;
  }

  section.step0 {

    .intro {
      display: grid;
      grid-template-columns: 75% 25%;
      gap: 3em;
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

  .step1 {
    display: grid;
    grid-template-columns: 30% 60%;
    gap: 10%;

    .text-content {
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
        }
      }
    }

    .video {

      .live-video {
        max-height: 50vh;
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

  section.step2 {

    .modal-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      background: #171717;
      opacity: 0.75;
      z-index: 4;
    }

    .finished-game {
        background: $yellow;
        position:relative;
        text-align: center;
        padding: 1em 3em 3em;
        border-radius: $br-m;
        border: 2px solid black;
        z-index: 99;

        h3 {
          text-align: left;
          font-size: 12px;
          line-height: 1.7em;
        }

        p {
          text-align: left;
        }

        img {
          max-height: 10vh;
          padding: 2em;
          border-bottom: 3px solid black;
        }

        ul {
          margin-top: 0;
          padding: 0;
          font-size: 0.8em;

          li {
            display: inline-block;
            padding: 1rem;

            a {
              svg {
                height: 2rem;
              }
            }
          }
        }

        .button-group {
          a {
            margin-left: 1em;
            margin-right: 1em;
          }
        }
      }
  }
}

</style>

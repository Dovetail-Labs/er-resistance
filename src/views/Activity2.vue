<template>
  <div class="container">
    <Header title="Activity 2"
            description="Display each of the six basic emotions shown below."
            v-if="step !== 0"/>
    <main>
      <section class="step0" v-if="step === 0">
        <h1> {{ er.title }} </h1>
        <div class="intro">
          <div class="description">
            <p> {{ er.intro }} </p>
          </div>
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
          <LiveVideo class="live-video"/>    
        </div> 
      </section>
      <section class="step2" v-if="step === 2"></section>           
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

export default {
  name: "Activity2",
  metaInfo: {
    title: 'Activity 2'
  },
  data() {
    return {
      er: json,
      copy: copy,
      step: 1,
      finished: false
    }
  },
  components: {
    Header,
    Footer,
    LiveVideo
  },
  methods: {
    moveToStep(step) {
      this.step = step;
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
}

</style>

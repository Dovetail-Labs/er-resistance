<template>
  <div class="container">
    <Header title="Activity 2"
            description="Display each of the six basic emotions shown below"/>
    <main>
      <section class="text-content">
        <p>Try to exhibit each of the following emotions. The boxes will clear when the system detects an emotion</p>
        <ul class="emotions">
          <li class="emo-box" id="happiness">Happiness</li>
          <li class="emo-box" id="sadness">Sadness</li>
          <li class="emo-box" id="fear">Fear</li>
          <li class="emo-box" id="surprise">Surprise</li>
          <li class="emo-box" id="disgust">Disgust</li>
          <li class="emo-box" id="anger">Anger</li>
        </ul>
      </section>
      <section class="video">
        <LiveVideo class="live-video"/>    
      </section>      
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LiveVideo from "../components/LiveVideo.vue";

export default {
  name: "Activity2",
  metaInfo: {
    title: 'Activity 2'
  },
  components: {
    Header,
    Footer,
    LiveVideo
  }

};
</script>

<style scoped lang="scss">

.container {
  padding-top: 10rem;

  main {
    max-width: 90%;
    margin: 0 auto;
    padding: 1rem;
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
          top: 1rem;
          left: 1rem;
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

<template>
  <div class="container">
    <Modal v-if="showModal" @close="closeModal" />
    <h2>Welcome to the ER Sandbox.</h2>
    <p>
      Watch the video to learn about emotional recognition technology, or turn
      on your camera to activate our very own ER machine...will it flatten you?
    </p>
    <main>
      <section>
        <div class="video-container">
          <iframe
            src="https://www.youtube-nocookie.com/embed/lDC90ObdMEs?rel=1&amp;controls=0&amp;autoplay=0&amp;mute=1&amp;start=0"
            frameborder="0"
          ></iframe>
          <button>Watch the video</button>
        </div>
        <LiveVideo class="er-container" :buttonVisible="true" /> 
      </section>
      <nav>
        <ul>
          <li class="btn">
            <router-link to="activity-1">Wink or Blink Game <RightArrow class="arrow" /></router-link>
          </li>
          <li class="btn">
            <router-link to="activity-2">Fake Smile Game <RightArrow class="arrow" /></router-link>
          </li>
          <li class="btn">
            <router-link to="research">Share you perspectives on emotion recognition systems <RightArrow class="arrow" /></router-link>
          </li>
        </ul>
      </nav>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Modal from "../components/Modal.vue";
import LiveVideo from "../components/LiveVideo.vue";
import RightArrow from "@/assets/images/right-arrow.svg";

export default {
  name: "Menu",
  metaInfo: {
    title: "Menu",
  },
  data() {
    return {
      showModal: true
    }
  },
  components: {
    Footer,
    Modal,
    LiveVideo,
    RightArrow
  },
  methods: {
    startER: function() {
      this.$emit("start-er", true);
    },
    closeModal: function() {
      this.showModal = false;
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  h2,
  p {
    max-width: 60%;
  }
  main {
    margin-top: 4rem;
    display: grid;
    gap: 5%;
    grid-template-columns: 3fr 1fr;

    nav {
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
          margin-bottom: 0.75rem;
          border: 3px solid black;

          a {
            display: block;
            padding: 1rem;
            svg {
              float: right;
              height: 1.25em;
            }
          }
        }
      }
    }

    section {
      display: flex;
      justify-content: space-evenly;
      height: 40vw;
      max-height: 50vh;

      .video-container,
      .er-container {
        max-height: 50vh;
        width: 50%;

        button {
          position: relative;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          border-radius: $br-m;
        }
      }

      .video-container {
        iframe {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
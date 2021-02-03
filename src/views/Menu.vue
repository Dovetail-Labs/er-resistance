<template>
  <div class="container">
    <Modal title="Share your perspectives on emotion recognition systems" v-if="showModal" @close="closeModal" />
    <h2>Welcome to the Emotional Recognition Sandbox.</h2>
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
          <!-- <li>
            Games
          </li> -->
          <li class="btn">
            <router-link to="activity-1">Wink/Blink Game</router-link>
            <RightArrow class="arrow" />
          </li>
          <li class="btn">
            <router-link to="activity-2">Beat the Machine Game</router-link>
            <RightArrow class="arrow" />
          </li>
          <li class="btn">
            <router-link to="research">Share you perspectives</router-link>
            <RightArrow class="arrow" />
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
  h2 {
    max-width: 60%;
    line-height: 1.6em;
  }

  p {
    max-width: 60%;
  }
  main {
    margin-top: 2rem;
    display: grid;
    gap: 1%;
    grid-template-columns: 3fr 1fr;

    nav {
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        
        li.btn {
          border: 3px solid black;
        }

        li {
          margin-bottom: 0.75rem;
          font-size: 0.8em;
          display: flex;
          justify-content: space-between;
          align-items: center;

          a {
            padding: 1rem;
          }
          svg {
            padding: 1rem;
            height: 1.25em;
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
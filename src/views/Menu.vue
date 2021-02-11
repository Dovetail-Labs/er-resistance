<template>
  <div class="container">
    <div>
      <Modal title="Share your perspectives on emotion recognition systems" v-if="showModal" @close="closeModal" />
      <h1>Welcome to the Emotional Recognition Sandbox.</h1>
      <p>
        Watch the video to learn about emotional recognition technology, or turn
        on your camera to activate our very own ER machine...will it 'emojify' you?
      </p>
      <main>
        <section>
          <div class="video-container">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/785eNqM3X8E" controls="0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button @click="playVideo">Watch the video</button>
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
              <router-link to="activity-2">Fake Smile Game</router-link>
              <RightArrow class="arrow" />
            </li>
            <li class="btn">
              <router-link to="research">Share you thoughts</router-link>
              <RightArrow class="arrow" />
            </li>
          </ul>
        </nav>
      </main>
    </div>
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
    },
    playVideo: function() {
      if (document.querySelector(".nesta-animation")) {
        let vid = document.querySelector(".nesta-animation");
        vid.play();
        vid.setAttribute("controls","controls");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;

  h1, p {
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
      height: 50vh;

      .video-container,
      .er-container {
        max-width: 50%;

        button {
          position: relative;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          border-radius: $br-m;
        }
      }

      .er-container {
        grid-column: 2;
      }

      .video-container {
        grid-column: 1;
        video { 
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .container {
    h1, p {
      max-width: 80%;
    }
  }
}

@media screen and (max-width: 768px) {
  .container {
    margin-bottom: 4rem;

    h1, p {
      max-width: 100%;
    }
    main {
      grid-template-columns: 1fr;
      gap: 4em;

      nav {
        grid-row: 2;

        ul {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1em;
        }
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .container {
    display: block;

    main {
      display: block;
      margin-bottom: 6em;

      section {
        display: block;
        height: 100%;

        .er-container, .video-container {
          min-height: 30vh;
          max-width: 100%;

          iframe {
            height: 40vh;
          }
        }
      }

      nav {
        position: fixed;
        box-sizing: border-box;
        padding: 1em;
        bottom: 3rem;
        left: 0;
        right: 0;

        ul {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1em;
          
          li {
            background: $yellow-lite;
            a {
              background: $yellow-lite;
            }
          }
        }
      }
    }
  }
}

</style>
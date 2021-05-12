<template>
  <div class="container">
    <div>
      <h1>Welcome to the Emotion Recognition Sandbox</h1>
      <div class="p-wrap">
        <p>
          We want to start a conversation about emotion recognition technology. Explore the site, watch the video, play a game and add your thoughts to our research. Or turn on your camera to activate our very own emotion recognition machine...will it ‘emojify’ you?
        </p>
        <p class="notice">To interact with the emotion recognition system, you must allow access to your camera. No image data is sent to our servers, all images are stored on your device.  <a href="/resources#help">Instructions to activate camera</a> and our <a href="/resources#privacy">privacy policy</a>.</p>
      </div>

      <main>
        <section>
          <div class="video-container">
            <iframe id="vimeo533753657" src="https://player.vimeo.com/video/533753657?dnt=1" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <button @click="playVideo">Watch the video</button>
          </div>
          <LiveVideo class="er-container" :buttonVisible="true" />
        </section>
        <nav>
          <ul>

            <li class="btn">
              <router-link to="activity-1">Wink/Blink Game</router-link>
              <RightArrow class="arrow" />
            </li>
            <li class="btn">
              <router-link to="activity-2">Fake Smile Game</router-link>
              <RightArrow class="arrow" />
            </li>
            <li class="btn">
              <router-link to="research">Add your thoughts</router-link>
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
import LiveVideo from "../components/LiveVideo.vue";
import RightArrow from "@/assets/images/right-arrow.svg";
import Player from '@vimeo/player';

export default {
  name: "Menu",
  metaInfo: {
    title: "Menu",
  },
  data() {
    return {
      showModal: false,
    }
  },
  components: {
    Footer,
    LiveVideo,
    RightArrow
  },
  methods: {
    startER: function() {
      this.$emit("start-er", true);
    },
    playVideo: function() {
      var iframe = document.querySelector('#vimeo533753657');
      var player = new Player(iframe);

      player.play();
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
  margin-bottom: 6rem;
  
  div.p-wrap {
    display: flex;
    width: 80%;

    p {
      width: 50%;
      padding-right: 4em;
    }
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

          a {
            font-family: 'Press Start 2P', Courier, monospace;
            text-decoration: none;
          }
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
        iframe {
          background-color: #000000;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .container {
    display: block;
    margin-bottom: 0;

    div.p-wrap {
      display: block;
      width: 100%;

      p {
        padding: 0;
        width: 100%;
      }
    }

    main {
      display: block;
      margin-bottom: 8em;

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

          li {
            background: $yellow-lite;
            margin-right: 2%;
            padding: 0.75em;

            a {
              font-size: 0.5rem;
              padding: 0;
              background: $yellow-lite;
            }
            svg {
              display: none;
            }
          }
        }
      }
    }
  }
}

</style>
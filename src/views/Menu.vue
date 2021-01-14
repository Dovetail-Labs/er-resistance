<template>
  <div class="container">
      <h2>
          Welcome to the ER Sandbox.
      </h2>
      <p>
        Watch the video to learn about emotional recognition technology, or turn on your camera to activate our very own ER machine...will it flatten you?
      </p>
      <main>
        <section>
            <div class="video-container">
                <iframe src="https://www.youtube-nocookie.com/embed/lDC90ObdMEs?rel=1&amp;controls=0&amp;autoplay=0&amp;mute=1&amp;start=0" frameborder="0" style="left:0;top:0;width:100%;height:100%;pointer-events:auto"></iframe>
                <button>
                    Watch the video
                </button>
            </div>
            <div class="er-container">
                <LiveVideo />
                <button>
                    Turn on ER camera
                </button>    
            </div>
        </section>
        <nav>
            <ul>
                <li class="btn"><router-link to="activity-1">Activity 1 →</router-link></li>
                <li class="btn"><router-link to="activity-2">Activity 2 →</router-link></li>
                <li class="btn"><router-link to="research">Help us research</router-link></li>
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

export default {
  name: "Menu",
  metaInfo: {
    title: 'Menu'
  },
  components: {
    Footer,
    Modal,
    LiveVideo
  }

};
</script>

<style scoped lang="scss">
    .container {
        h2, p {
            max-width: 60%;
        }
        main {
            margin-top: 4rem;
            display: grid;
            gap: 5%;
            grid-template-columns: 5fr 1fr;

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
                        }
                    }
                }
            }

            section {
                display: flex;
                justify-content: space-evenly;

                .video-container, .er-container {
                    height: 100%;
                    width: 50%;

                    button {
                        position: relative;
                        left: 50%;
                        transform: translateX(-50%) translateY(-50%);
                        border-radius: $br-m;
                    }
                }
            }
        }
    }
</style>
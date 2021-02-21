<template>
 <div>
   <div class="cam">
      <video id="webcam" autoplay muted playsinline />
      <canvas id="overlay"></canvas>
      <img id="placeholder" src="@/assets/images/smiley.png">
      <router-link v-if="denied" class="help-link" to="help">Grant webcam access</router-link>
   </div>
    <button v-if="buttonVisible" v-on:click="detectExpressions">Turn on ER camera</button>
  </div>
</template>

<script>
import * as faceapi from "face-api.js";

const minConfidenceFace = 0.5;
const faceapiOptions = new faceapi.SsdMobilenetv1Options({ minConfidenceFace });

let cam;
let isRunning = true;
let withBoxes = true;

export default {
  name: "LiveVideo",
  props: ["buttonVisible", "detectOnLoad"],
  metaInfo: {
    title: "Live Video"
  },
  data() {
    return {
      cam: null,
      displaySize: null,
      denied: false
    }
  },
  mounted() {
    let loadNet = async () => {
      let detectionNet = faceapi.nets.ssdMobilenetv1;
      await detectionNet.load("/models");
      await faceapi.loadFaceExpressionModel("/models");
      return detectionNet;
    };

    const initCamera = async (width, height) => {
      const video = document.getElementById("webcam");
      video.width = width;
      video.height = height;

      this.displaySize = { width: video.width, height: video.height };
      const canvas = document.getElementById("overlay");
      faceapi.matchDimensions(canvas, this.displaySize);

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: "user",
          width: width,
          height: height
        }
      }).catch(error => {
          console.log(error);
          document.querySelector(".cam").style.backgroundColor = "black";
          this.denied = true;
        });

      video.srcObject = stream;
      return new Promise(resolve => {
        video.onloadedmetadata = () => {
          resolve(video);
        };
      });
    };

    loadNet()
      .then(net => {
        return initCamera(600, 500);
      })
      .then(video => {
        this.cam = video;
        if (this.detectOnLoad) {
          this.detectExpressions();
        }
      });
  },
  destroyed () {
    const mediaStream = this.cam.srcObject;
    const tracks = mediaStream.getTracks();

    tracks.forEach(track => track.stop())
  },
  methods: {
    async detectExpressions() {

      setInterval(async () => {
        // detect expression
        const result = await faceapi
          .detectSingleFace(this.cam, faceapiOptions)
          .withFaceExpressions();

        if (typeof result !== "undefined") {
          const resizedResult = faceapi.resizeResults(result, {
            width: this.cam.width,
            height: this.cam.height
          });

        const canvas = document
            .getElementById("overlay");
         canvas
            .getContext("2d")
            .clearRect(
              0,
              0,
              canvas.width,
              canvas.height
            );
          faceapi.draw.drawDetections(
            canvas,
            resizedResult
          );
          faceapi.draw.drawFaceExpressions(
            canvas,
            resizedResult,
            faceapiOptions.minConfidenceFace
          );

          let happiness = 0,
            anger = 0,
            sadness = 0,
            surprise = 0,
            fear = 0,
            disgust = 0;
          if (result.expressions.hasOwnProperty("happy")) {
            happiness = result.expressions.happy;
          }
          if (result.expressions.hasOwnProperty("angry")) {
            anger = result.expressions.angry;
          }
          if (result.expressions.hasOwnProperty("sad")) {
            sadness = result.expressions.sad;
          }
          if (result.expressions.hasOwnProperty("fearful")) {
            fear = result.expressions.fearful;
          }
          if (result.expressions.hasOwnProperty("disgusted")) {
            disgust = result.expressions.disgusted;
          }
          if (result.expressions.hasOwnProperty("surprised")) {
            surprise = result.expressions.surprised;
          }

          // interface responds
          if (happiness > 0.65) {
            if (document.getElementById("happiness")) {
              document.getElementById("happiness").style.backgroundColor =
                "#DCDCDC";
            }
          } else if (anger > 0.65) {
            if (document.getElementById("anger")) {
              document.getElementById("anger").style.backgroundColor = "#DCDCDC";
            }
          } else if (sadness > 0.65) {
            if (document.getElementById("sadness")) {
              document.getElementById("sadness").style.backgroundColor =
                "#DCDCDC";
            }
          } else if (surprise > 0.65) {
            if (document.getElementById("surprise")) {
              document.getElementById("surprise").style.backgroundColor =
                "#DCDCDC";
            }
          } else if (disgust > 0.65) {
            if (document.getElementById("disgust")) {
              document.getElementById("disgust").style.backgroundColor =
                "#DCDCDC";
            }
          } else if (fear > 0.65) {
            if (document.getElementById("fear")) {
              document.getElementById("fear").style.backgroundColor = "#DCDCDC";
            }
          }
        }
      }, 100);
    }
  }
};
</script>

<style scoped lang="scss">
div {
  height: 100%;
  position: relative;
  box-sizing: border-box;

  .cam {
    position: relative;
    overflow: hidden;
    background: black;
    z-index: 0;
  }

  video {
    position: relative; 
    right: 0; 
    bottom: 0;
    min-width: 100%; 
    min-height: 100%;
    width: auto; 
    height: auto; 

    background-size: cover;
    z-index: 2;
  }

  img {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #overlay,
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
  }

  button {
    position: relative;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: $br-m;
  }

  .help-link {
    position: absolute;
    display: block;
    width: 100%;
    text-align: center;
    text-decoration: underline;
    color: white;
    bottom: 20%;
  }
}

</style>
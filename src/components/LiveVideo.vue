<template>
  <div >
    <video id="webcam" autoplay muted playsinline/>
    <canvas id="overlay"></canvas>
  </div>
</template>

<script>
export default {
  name: "LiveVideo",
  metaInfo: {
    title: 'Live Video'
  }
}

import * as faceapi from "face-api.js";

const minConfidenceFace = 0.5;
const faceapiOptions = new faceapi.SsdMobilenetv1Options({ minConfidenceFace });

let cam;
let isRunning = true;
let withBoxes = true

faceapi.env.monkeyPatch({
  Canvas: HTMLCanvasElement,
  Image: HTMLImageElement,
  ImageData: ImageData,
  Video: HTMLVideoElement,
  createCanvasElement: () => document.createElement('canvas'),
  createImageElement: () => document.createElement('img')
});

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

  const displaySize = { width: video.width, height: video.height }
  const canvas = document.getElementById('overlay')
  faceapi.matchDimensions(canvas, displaySize)

  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: "user",
      width: width,
      height: height
    }
  });
  video.srcObject = stream;

  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
};

let detectExpressions = async () => {
  // detect expression
  const result = await faceapi.detectSingleFace(cam, faceapiOptions).withFaceExpressions();
  const resizedResult = faceapi.resizeResults(result, {width: cam.width, height: cam.height})

  document.getElementById("overlay").getContext('2d').clearRect(0, 0, document.getElementById("overlay").width, document.getElementById("overlay").height);
  faceapi.draw.drawDetections(document.getElementById("overlay"), resizedResult);
  faceapi.draw.drawFaceExpressions(document.getElementById("overlay"), resizedResult, faceapiOptions.minConfidenceFace)

  if(typeof result !== 'undefined') {
    let happiness = 0, anger = 0, sadness = 0, surprise = 0, fear = 0, disgust = 0;
    if(result.expressions.hasOwnProperty('happy')) {
      happiness = result.expressions.happy;
    }
    if(result.expressions.hasOwnProperty('angry')) {
      anger = result.expressions.angry;
    }
    if(result.expressions.hasOwnProperty('sad')) {
      sadness = result.expressions.sad;
    }
    if(result.expressions.hasOwnProperty('fear')) {
      fearful = result.expressions.fear;
    }
    if(result.expressions.hasOwnProperty('disgusted')) {
      disgust = result.expressions.disgusted;
    }
    if(result.expressions.hasOwnProperty('surprised')) {
      surprise = result.expressions.surprised;
    }

    // interface responds
    if(happiness > 0.65) {
      if (document.getElementById("happiness")) {
        document.getElementById("happiness").style.backgroundColor = "#DCDCDC";
      }
    } else if(anger > 0.65) {
      if (document.getElementById("anger")) {
        document.getElementById("anger").style.backgroundColor = "#DCDCDC";
      }
    } else if(sadness > 0.65) {
      if (document.getElementById("sadness")) {
        document.getElementById("sadness").style.backgroundColor = "#DCDCDC";
      }
    } else if(surprise > 0.65) {
      if (document.getElementById("surprise")) {
        document.getElementById("surprise").style.backgroundColor = "#DCDCDC";
      }
    } else if(disgust > 0.65) {
      if (document.getElementById("disgust")) {
        document.getElementById("disgust").style.backgroundColor = "#DCDCDC";
      }
    } else if(fear > 0.65) {
      if (document.getElementById("fear")) {
        document.getElementById("fear").style.backgroundColor = "#DCDCDC";
      }
    }
  }
  if(isRunning) {
    detectExpressions();
  }
};



loadNet()
.then(net   => { return initCamera(640, 480); })
.then(video => { 
  cam = video;
  detectExpressions(); 
  });
</script>

<style scoped lang="scss">
div {
  position: relative;
  box-sizing: border-box;

  video {
    width: 100%;
    height: auto;
  }

  #overlay, .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>
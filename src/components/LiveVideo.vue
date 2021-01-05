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
  let result = await faceapi.detectSingleFace(cam, faceapiOptions)
    .withFaceExpressions();

  if(typeof result !== 'undefined') {
    let happiness = 0, anger = 0;
    if(result.expressions.hasOwnProperty('happy')) {
      happiness = result.expressions.happy;
    }
    if(result.expressions.hasOwnProperty('angry')) {
      anger = result.expressions.angry;
    }
    if(happiness > 0.65) {
      if (document.getElementById("happiness")) {
        document.getElementById("happiness").style.backgroundColor = "gray";
      }
    } else if(anger > 0.65) {
      if (document.getElementById("anger")) {
        document.getElementById("anger").style.backgroundColor = "gray";
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
  detectExpressions(); });
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
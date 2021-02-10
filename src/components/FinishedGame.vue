<template>
<div class="container">
  <div class="modal-overlay"></div>
  <div class="finished-game">
    <img src="../assets/images/smiley_face.gif">
    <main>
      <section>
        <h1>{{ title }}</h1>
        <p>{{ p }}</p>
      </section>
      <aside>
        <h4>Share:</h4>
        <ul>
          <li><a target="_blank" :href="`https://twitter.com/intent/tweet?text=${message}`">Twitter</a></li>
          <li><a :href="`mailto:?subject=${subject}&body=${message}`">Email</a></li>
          <li><a href="https://www.facebook.com/sharer.php?u=https://emojify.info">Facebook</a></li>
        </ul>
      </aside>
    </main>
    <div class="button-group">
      <router-link :to="prevLink" class="button">
        {{ prevStep }}
      </router-link>
      <router-link :to="nextLink" class="button">
        {{ nextStep }}
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import json from "../copy/quiz.json";
import IconFB from "@/assets/images/icon-fb.svg";
import IconTW from "@/assets/images/icon-tw.svg";
import IconIG from "@/assets/images/icon-ig.svg";
import IconEM from "@/assets/images/icon-em.svg";

export default {
  name: "FinishedGame",
  props: ['p', 'title', 'prevStep', 'nextStep', 'prevLink', 'nextLink' ],
  metaInfo: {
    title: 'Finished Game'
  },
  data() {
    return {
      quiz: json,
      questionIndex: 0,
      step: 0,
      answer: "",
      showAnswer: false,
      correct: false,
      subject: "Is emotional recognition technology ‘emojifying’ you?",
      message: "I know more about emotions than emotion recognition technology. I %23BeatTheMachine and you can too. Learn how to %23ResistEmojification at Emojify.info"
    }
  },
  components: {
    IconFB,
    IconTW,
    IconIG,
    IconEM
  },
}
</script>

<style scoped lang="scss">
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: #171717;
  opacity: 0.95;
  z-index: 4;
}

.finished-game {
  position: relative;
  background: $yellow;
  padding: 1em 3em 3em;
  box-sizing: border-box;
  border-radius: $br-m;
  border: 2px solid black;
  z-index: 99;

  main {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 3em;
    margin: 0 auto;
  }

  h3 {
    text-align: left;
    font-size: 12px;
    line-height: 1.7em;
  }

  p {
    text-align: left;
  }

  img {
    max-height: 15vh;
  }

  ul {
    margin-top: 0;
    padding: 0;
    font-size: 0.8em;

    li {
      display: inline-block;
      list-style: none;
      padding: 0.75em;
      border: 2px solid black;
      margin-bottom: 0.5em;
    }
  }

  .button-group {
    display: flex;
    justify-content: center;

    a { 
      font-size: 0.8rem;
      text-align: center;
      margin: 1rem;
    }
  }
}

</style>
<template>
  <div class="container">
    <Header title="Activity 1"
            description="Guess if the shown image is a wink or a blink"/>
    <main>
      <div v-for="(question, index) in quiz.questions" class="question">
        <p v-show="index === questionIndex">
          <span>{{ question.p1 }}</span>
          <span class="blank"></span>
          <span>{{ question.p2 }}</span>
        </p>
      </div>
    </main> 
    <div class="button-group">
      <button @click="next">Wink</button>
      <button @click="next">Blink</button>
    </div>   
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import json from "../copy/quiz.json"

export default {
  name: "Activity1",
  metaInfo: {
    title: 'Activity 1'
  },
  data() {
    return {
      quiz: json,
      questionIndex: 0
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    next: function() {
      this.questionIndex++;
    }
  }

};
</script>

<style scoped lang="scss">
  main {
    margin-top: 15rem;
    max-width: 60%;
    margin-left: auto;
    margin-right: auto;

    .question {
      p {
        font-size: 1.2rem;
        span.blank {
          border: 1px solid black;
          box-sizing: border-box;
          margin: 1em;
          padding: 0.25em 2.5em;
        }
      }
    }
  }

  .button-group {
    text-align: center;
    margin-top: 5em;

    button {
      margin-left: 2em;
    }
  }
</style>

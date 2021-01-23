<template>
  <div class="container">
    <main>
      <form v-if="!submitted">
        <p class="intro"> {{ survey.intro }} </p>
        <hr>
        <p v-for="(question, index) in survey.questions" v-bind:key="index">
          <label> {{ question.text }}</label>
          <textarea rows="10" placeholder="Write your answer here..."></textarea>
        </p>
        <input type="submit" class="button" @click="submitted = true;">
      </form>
      <div v-if="submitted" class="finished-game">
        <h3>{{ survey.thankYou }}</h3>
        <img src="../assets/images/thumbs-up.gif">
        <p>SHARE!</p>
        <ul>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>WhatsApp</li>
          <li>Email</li>
        </ul>
        <router-link to="menu" class="button">
          Back to main screen
        </router-link>
      </div>
    </main> 
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import CS from "../copy/survey.json";

export default {
  name: "Research",
  metaInfo: {
    title: 'Research'
  },
  data() {
    return {
      survey: CS,
      submitted: false
    }
  },
  components: {
    Footer
  },
  methods: {}
};
</script>

<style scoped lang="scss">
  footer {
    z-index: 3;
  }
  main {
    margin-top: 5rem;
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;

    form {
      padding-bottom: 5rem;

      hr {
        border: 1px solid black;
        margin: 2rem auto;
      }
      label {
        display: block;
        margin-bottom: 2em;
      }
      textarea {
        display: block;
        width: 100%;
        margin-bottom: 4em;
        border: 2px solid black;
        background: $yellow;
        padding: 0.75em 1em;
        font-family: inherit;
        color: $gray-1;
      }
    }

    .finished-game {
      // background: $yellow;
      text-align: center;
      padding: 1em 3em 3em;
      border-radius: $br-m;
      // border: 2px solid black;
      z-index: 1;

      h3 {
        text-align: left;
        font-size: 1rem;
        line-height: 1.7em;
      }

      img {
        max-height: 20vh;
        padding: 2em;
        border-bottom: 3px solid black;
      }

      ul {
        margin-top: 0;
        padding: 0;

        li {
          display: inline-block;
          font-size: 0.25em;
          padding: 2rem;
        }
      }
    }
  } 
</style>

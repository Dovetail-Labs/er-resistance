<template>
  <div class="container">
    <Modal title="Now that you have played our activity, how do you feel about Emotional recognition technology?" v-if="showModal" @close="closeModal" />
    <main>
      <form action="" v-if="!submitted" id="survey">
        <p class="intro"> {{ survey.intro }} </p>
        <hr>
        <p v-for="(question, index) in survey.questions" v-bind:key="index">
          <label> {{ question.text }}</label>
          <textarea :data-index=index form="survey" rows="10" placeholder="Add my perspective..."></textarea>
        </p>
        <input type="submit" value="Submit" class="button" @click="submitSurvey">
      </form>

      <div v-if="submitted" class="finished-game">
        <h3>{{ survey.thankYou }}</h3>
        <img src="../assets/images/thumbs-up.gif">
        <p>SHARE!</p>
        <ul>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Email</li>
        </ul>
        <router-link to="menu" class="button">
          Back to main screen
        </router-link>
      </div>
    </main> 
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import CS from "../copy/survey.json";
import Airtable from "airtable";


const base = new Airtable(
  {
    apiKey: process.env.VUE_APP_AIRTABLE_API_KEY
  }
 ).base('apptKTJoVmiX71eT5');

export default {
  name: "Research",
  metaInfo: {
    title: 'Research'
  },
  data() {
    return {
      survey: CS,
      submitted: false,
      showModal: true,
    }
  },
  components: {
    Modal
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    submitSurvey() {
      this.submitted = true;
      base('Survey Results').create([
        {
          "fields": {
            "Submission ID": Date.now(),
            "Question1": document.querySelector('textarea[data-index="0"]').value,
            "Question2": document.querySelector('textarea[data-index="1"]').value,
            "Question3": document.querySelector('textarea[data-index="2"]').value,
            "Question4": document.querySelector('textarea[data-index="3"]').value,
            "Question5": document.querySelector('textarea[data-index="4"]').value,
            "Question6": document.querySelector('textarea[data-index="5"]').value
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });
    }
  }
};
</script>

<style scoped lang="scss">
  main {
    margin-top: 5rem;
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;

    form {
      padding-bottom: 5rem;
      position: relative;

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
      button {
        &:hover {
          cursor: pointer;
        }
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

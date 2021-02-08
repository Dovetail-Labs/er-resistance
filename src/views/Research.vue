<template>
  <div class="container">
    <!-- <Modal title="Now that you have played our activity, how do you feel about Emotional recognition technology?" v-if="showModal" @close="closeModal" /> -->
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
        <h1>{{ survey.thankYou }}</h1>
        <div class="wrap">
          <article>
            <p>{{ survey.p }}</p>
            <p>If you want to continue the conversation with us, please get in touch <a target="_blank" href="#">here</a>. You can also join our mailing list <a target="_blank" href="#">here</a>.</p>
            <p>To learn more about the project and to discover more resources on emotion recognition technologies, their social impacts, and the social science behind them, click <a target="_blank" href="#">here</a>.</p>
            <p>Together, we can {{survey.hashtag1}} and {{survey.hashtag2}} </p>
            <router-link to="menu" class="button">
              Back to main menu
            </router-link>
          </article>
          <aside>
            Share:
            <ul>
              <li><a target="_blank" :href="`https://twitter.com/intent/tweet?text=${message}`">Twitter</a></li>
              <li><a :href="`mailto:?subject=${title}&body=${message}`">Email</a></li>
              <li><a href="https://www.facebook.com/sharer.php?u=https://emojify.info">Facebook</a></li>
            </ul>
          </aside>
        </div>
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
      title: "ER Resistance",
      message: "I know more about emotions than emotion recognition technology. I %23BeatTheMachine and you can too. Learn how to %23ResistEmojification at Emojify.info"
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
      padding: 1em 3em 3em;
      border-radius: $br-m;
      z-index: 1;

      h1 {
        width: 75%;
      }
      
      .wrap {
        display: grid;
        grid-template-columns: 75% 25%;
        gap: 3em;

        article {
          img {
            max-height: 20vh;
            padding: 2em;
            border-bottom: 3px solid black;
          }

          .button {
            display: inline;
          }

          ul {
            margin-top: 0;
            padding: 0;

            li {
              margin-right: 2em;
              display: inline-block;
            }
          }
        }
        
        aside {
          color: $gray-2;
          ul {
            padding: 0;
            li {
              display: inline-block;
              list-style: none;
              padding: 0.75em;
              border: 2px solid $gray-2;
              margin-bottom: 0.5em;

              a {
                color: $gray-2;
              }
            }
          }
        }
      }
    }
  } 
</style>

<template>
<div class="container">
  <div class="overlay"></div>
  <div class="modal">
    <h2> {{ title }}</h2>
    <form action="">
      <p>Have you heard of ‘emotion recognition systems’?</p>
      <div class="yn">
        <input type="radio" name="initialOpinion" value="Yes">
        <label>Yes</label>
      </div>
      <div class="yn">
        <input type="radio" name="initialOpinion" value="No">
        <label>No</label>
      </div>
        <p>
          <label>What do you understand by the term ‘emotion recognition systems’?</label>
          <textarea rows="5" placeholder="Please explain."></textarea>
        </p>
    </form>
    <div class="button-group">
      <button @click="close">Skip</button>
      <button @click="addPerspective">Add my perspective</button>
    </div>
    <p class="privacy">Read our privacy policy <a href="#">here</a></p>
  </div>
</div>
</template>

<script>
import Airtable from "airtable";

const base = new Airtable(
  {
    apiKey: process.env.VUE_APP_AIRTABLE_API_KEY
  }
).base(process.env.VUE_APP_AIRTABLE_BASE);

export default {
  methods: {
    addPerspective() {
      const checkedButton = document.querySelector('input[name="initialOpinion"]:checked');
      const textContent = document.querySelector('textarea').value;
      if (!checkedButton && !textContent) {
        // Nothing has been checked or filled. Show error state
        this.hasError = true;
      }
      else {
        const data = {};
        if (textContent) {
          data["PopUp2"] = textContent;
          localStorage.popUp2 = data["PopUp2"];
        }
        if (checkedButton) {
          data["PopUp1"] = checkedButton.value;
          localStorage.popUp1 = data["PopUp1"];
        }
        console.log(data);
        this.submit(data);
      }
      this.$emit("close", true);
    },
    submit(data) {
        base('Survey Results').create([
        {
          "fields": {
            "Submission ID": Date.now(),
            ...data
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
    },
    close() {
      this.$emit("close", true);
    }
  },
  props: ['title'],
  data() {
    return {
      hasError: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: $yellow;
  padding: 1em 2em 2em;
  border-radius: $br-m;
  border: 2px solid black;
  z-index: 2;

  h3 {
    font-size: 0.9em;
  }

  form {
    text-align: left;

    .yn {
      display: inline-block;
      margin-right: 2em;
      margin-bottom: 1em;

      input {
        margin-right: 1em;

        &:hover {
          cursor: pointer;
        }
      }
    }

    p {
      textarea {
        display: block;
        width: 100%;
        border: 2px solid black;
        background: $yellow;
        margin-top: 1em;
        padding: 0.75em 1em;
        box-sizing: border-box;
        font-family: inherit;
        color: $gray-1;
      }
    }
  }

  div.button-group {
    margin-top: 2em;
    display: flex;
    justify-content: center;

    button {
      margin-left: 1em;
    }
  }

  p.privacy {
    margin-top: 1.5em;
    text-align: center;
  }
}

.overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #171717;
    opacity: 0.95;
    z-index: 2;
}
</style>
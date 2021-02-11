<template>
<div class="container">
  <div class="overlay"></div>
  <div class="modal">
    <h2> {{ title }}</h2>
    <p>Read our privacy policy <a href="#">here</a></p>
    <form>
      <p>Have you heard of ‘emotion recognition systems’?</p>
      <div class="yn">
        <input type="radio" name="initialOpinion" value="Positive">
        <label>Yes</label>
      </div>
      <div class="yn">
        <input type="radio" name="initialOpinion" value="Neutral">
        <label>No</label>
      </div>
      <p>
          <label>What do you understand by the term ‘emotion recognition systems’?</label>
          <textarea rows="5" placeholder="Please explain."></textarea>
        </p>
    </form>
    <div class="button-group">
      <button @click="close">Skip</button>
      <button @click="close">Add my perspective</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close", true);
    }
  },
  props: ['title']
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

  h2 {
    line-height: 1.5em;
  }

  a {
    text-decoration: underline;
  }

  h3 {
    text-align: left;
    font-size: 12px;
    line-height: 1.7em;
  }

  form {
    text-align: left;

    .yn {
      display: inline-block;
      margin-bottom: 2rem;
      width: 40%;

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
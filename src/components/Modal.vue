<template>
<div class="container">
  <div class="overlay"></div>
  <div class="modal">
    <h3>How do you feel about emotional recognition technology?</h3>
    <form>
      <div>
        <input type="radio" value="Positive">
        <label>Positive</label>
      </div>
      <div>
        <input type="radio" value="Neutral">
        <label>Neutral</label>
      </div>
      <div>
        <input type="radio" value="Negative">
        <label>Negative</label>
      </div>
      <div>
        <input type="radio" value="I don't know">
        <label>I don't know</label>
      </div>
    </form>
    <div class="button-group">
      <button>Skip</button>
      <button @click="close">Go</button>
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
  z-index: 1;

  h3 {
    text-align: left;
    font-size: 12px;
    line-height: 1.7em;
  }

  form {
    text-align: left;

    div {
      margin: 2rem auto;
      max-width: 55%;

      input {
        margin-right: 1em;
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
    opacity: 0.75;
    z-index: 1;
}
</style>
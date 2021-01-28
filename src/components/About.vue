<template>
  <div class="about">
    <h3>About this project</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u!</p>
    <div>
      <button>Read more</button>
      <button @click="close">Close</button>
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
.about {
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

  div {
    margin-top: 2em;
    display: flex;
    justify-content: center;
    
    button {
      margin-left: 1em;
    }
  }
}
</style>
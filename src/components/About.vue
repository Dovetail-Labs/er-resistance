<template>
  <div class="about">
    <h3>{{ copy.title }}</h3>
    <p> {{ copy.p1 }} </p>
    <p> {{ copy.p2 }} <a href="#">here</a>. </p>
    <h3> {{ copy.subhead }} </h3>
    <p> {{ copy.p3 }} <a href="#">here</a>. </p>
    <div>
      <button>Read more</button>
      <button @click="close">Close</button>
    </div>
  </div>
</template>

<script>
import Copy from "../copy/about.json";

export default {
  methods: {
    close() {
      this.$emit("close", true);
    }
  },
  data() {
    return{
      copy: Copy
    }
  },
  components: {
   Copy 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about {
  width: 90%;
  max-width: 900px;
  position: fixed;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  background: $yellow;
  padding: 1em 2em 2em;
  border-radius: $br-m;
  border: 2px solid black;
  z-index: 1;


  a {
    text-decoration: underline;
  }

  h3 {
    text-align: left;
    font-size: 16px;
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
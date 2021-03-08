<template>
  <div class="about">
    <div class="wrap">
      <h2>{{ copy.title }}</h2>
      <p> {{ copy.p1 }} </p>
      <p> {{ copy.p2 }} <a href="/resources#resources">here</a>. </p>
      <p class="credits">Created by <img class="logo dt" src="@/assets/images/logo-dovetail.png"> with support from <img class="logo nesta" src="@/assets/images/logo-nesta.png"></p>
      <h3> {{ copy.subhead }} </h3>
      <p> {{ copy.p3 }} <a href="/resources#privacy">here</a>.  </p>
    </div>
    <div class="button-group">
      <a class="button" href="./resources">Read more</a>
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
  top: 50%;
  transform: translate(-50%, -50%);
  background: $yellow;
  padding: 4em 6em;
  box-sizing: border-box;
  border-radius: $br-m;
  border: 2px solid black;
  z-index: 99;
  max-height: 65vh;
  display: flex;
  flex-direction: column;


  .wrap {
    overflow-y: scroll;
    padding-bottom: 5em;

    a {
      text-decoration: underline;
    }

    h3 {
      text-align: left;
      font-size: 16px;
      line-height: 1.7em;
    }

    p.credits {
      margin-top: 3em;
      margin-bottom: 3em;
      font-size: 0.8rem;
      text-align: center;

      .dt {
        max-height: 1em;
      }

      .nesta {
        max-height: 1.5em;
      }
    }
  }
  div.button-group {
    position: fixed;
    width: 100%;
    left: 0; 
    right: 0;
    bottom: 0;
    background: $yellow;
    display: flex;
    justify-content: center;
    padding: 2em;
    border-radius: $br-m;
    box-sizing: border-box;
    
    button {
      margin-left: 1em;
    }
  }
}

@media screen and (max-width: 1200px){
  .about {
    padding: 2em;
    max-height: 70vh;
  }
}

// Mobile
@media screen and (max-width: 640px) {
  .about {
    padding: 1em;
    max-height: 80vh;
  }
}
</style>
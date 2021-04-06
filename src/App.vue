<template>
  <div id="app">
    <router-view/>
    <div v-if="showAbout" class="overlay"></div>
    <About v-if="showAbout" @close="toggleAbout" />
    <Footer @aboutVisible="toggleAbout"/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import About from './components/About.vue';

export default {
  data() {
    return {
      showAbout: false,
    }
  },
  components: {
    Footer,
    About
  },
  methods: {
    toggleAbout() {
      this.showAbout = !this.showAbout;
    }
  }
}
</script>

<style lang="scss">


  /* Firefox */
  * {
    scrollbar-color:black rgba(0,0,0,0);
    scrollbar-color: black;
  }
  /* Chrome, Safari */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    // background: black;
  }

  ::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 100px;
  }

body {
  font-family: 'Cousine', monospace;
  margin: 0;
  box-sizing: border-box;
  color: black;
  background: $yellow-lite;

  h1, h2, h3, h4, small {
    font-family: 'Press Start 2P', Courier, monospace;
  }

  h1 {
    font-size: 24px;
    line-height: 1.8em;
  }

  h2 {
    font-size: 20px;
    line-height: 1.7em;
  }

  h3 {
    font-size: 16px;
    line-height: 1.6em;
  }

  p {
    font-size: 16px;
    line-height: 1.5em;
  }

  a {
    color: black;
    
    &:visited {
      color: black;
    }
  }

  button, .button {
    text-decoration: none;
    border: 3px solid black;
    padding: 9px 15px; 
    font-size: 1em;
    font-family: 'Press Start 2P';
    background: $yellow;

    &:focus {
      outline: none;
    }

    &:hover {
      cursor: pointer;
      background: rgb(151, 163, 151);
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
    z-index: 80;
  }
}

// Mobile
@media screen and (max-width: 640px) {
  body {
    font-size: 12px;
    padding: 1rem;

    h1 {
      font-size: 18px;

    }

    h2 {
      font-size: 16px;
    }

    h3 {
      font-size: 14px;
    }

    h4, p {
      font-size: 16px;
      margin-bottom: 1em;
    }
  }
}
</style>

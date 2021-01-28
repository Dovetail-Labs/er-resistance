<template>
  <div id="app">
    <router-view/>
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
      showAbout: false
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

/* latin-ext */
@font-face {
  font-family: 'Press Start 2P';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/pressstart2p/v9/e3t4euO8T-267oIAQAu6jDQyK3nbivNm4I81PZQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Press Start 2P';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/pressstart2p/v9/e3t4euO8T-267oIAQAu6jDQyK3nVivNm4I81.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body {
  font-family: 'Press Start 2P', Courier, monospace;
  padding: 2em;
  color: black;
  background: $yellow-lite;

  h1 {
    font-size: 20px;
    line-height: 36px;
  }

  p {
    font-size: 13px;
    line-height: 2em;
  }

  a {
    text-decoration: none;
    color: black;
    
    &:visited {
      color: black;
    }
  }

  button, .button {
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
}
</style>

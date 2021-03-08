<template>
  <div class="container">
    <h1>Is emotion recognition technology "emojifying" you?</h1>
    <img src="../assets/images/smiley_face_yellow.gif">
    <div class="intro">
      <p>Artificial intelligence designed to read your inner feelings is already in use.</p>
      <p>What’s the social science behind it? Is it fair? Who gets a say in how it is used?</p>
    </div>
    <p>
      <router-link to="menu" class="button">
        Enter<sup>*</sup>
      </router-link>
    </p>
    <p class="notice"><sup>*</sup>To interact with the emotion recognition system, you must allow access to your camera. No personal data is collected and all images are stored on your device. Read our full privacy policy <a href="/resources#privacy">here</a>. </p>
    <p class="notice mobile-only">This site is best viewed on desktop.</p>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  metaInfo: {
    title: 'Home'
  },
  components: {
    Footer
  }

};
</script>

<style scoped lang="scss">

.container {
  text-align: center;
  max-width: 50%;
  margin: 0 auto;
  margin-bottom: 6rem;

  img {
    width: 20vw;
    height: auto;
  }

  .intro {
    font-family: 'Press Start 2P', Courier, monospace;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    padding: 1rem;
  }

  .notice {
    color: $gray-1;
    margin: 3rem auto;

    a {
      color: inherit;
    }
  }
}

@media screen and (max-width: 1200px){
  .container {
    max-width: 80%;
  }
}

// Mobile
@media screen and (max-width: 640px) {
  .container {
    max-width: 100%;
    margin: 0;

    img {
      width: 20vh;
    }
  }
}

@media screen and (min-width: 768px) {
  .mobile-only {
    display: none;
  }
}
</style>

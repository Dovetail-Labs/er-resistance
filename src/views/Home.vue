<template>
  <div class="container">
    <h1>Is emotion recognition technology "emojifying" you?</h1>
    <img src="../assets/images/smiley_face_yellow.gif">
    <p>Artificial Intelligence designed to read your inner feelings is already in use.</p>
    <p>What’s the social science behind it? Is it fair? Who gets a say in how it is used?</p>
    <p>
      <router-link to="menu" class="button">
        Enter
      </router-link>
    </p>
    <p class="notice">To interact with the emotion recognition system, you must allow access to your camera but no personal data is collected.Read our full privacy policy <router-link to="resources">here</router-link>. </p>
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
  margin-bottom: 5rem;

  img {
    width: 20vw;
    height: auto;
  }

  .notice {
    font-size: 0.6em;
    color: $gray-2;
    width: 80%;
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
</style>

<template>
  <div class="container">
    <h1>Is emotion recognition technology "emojifying" you?</h1>
    <img src="../assets/images/emoji.gif">
    <p>You may not know it, but ER software is embedded in many of apps and websites. Will it flatten you?</p>
    <p>
      <router-link to="menu" class="button">
        Enter
      </router-link>
    </p>
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
    margin: 3rem auto;

    img {
      width: 20vw;
      height: auto;
    }
  }
</style>

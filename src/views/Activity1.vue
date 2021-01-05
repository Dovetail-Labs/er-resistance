<template>
  <div class="container">
    <Header title="Activity 1"
            description="Guess if the shown image is a wink or a blink"/>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Activity1",
  metaInfo: {
    title: 'Activity 1'
  },
  components: {
    Header,
    Footer
  }

};
</script>

<style scoped lang="scss">
</style>

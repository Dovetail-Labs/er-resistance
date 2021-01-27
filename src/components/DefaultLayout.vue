<template>
  <div class="container">
    <slot></slot>
    <Footer @showAbout="toggleAbout()"/>
  </div>
</template>
<script>
import Footer from "./Footer.vue";
import Modal from "./Modal.vue";
import About from "./About.vue";

export default {
  name: "DefaultLayout",
  props: ['showVid'],
  data() {
    return {}
  },
  components: {
    Footer,
    About,
    Modal,
  },
  methods: {
    cookieBannerClosed() {
      this.allowInteraction = true;
    },
    toggleAbout() {
      this.showInfo = showInfo;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
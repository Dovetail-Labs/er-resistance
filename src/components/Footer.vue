<template>
  <footer>
    <span class="about">
      About this Project
    </span>
    <span class="share">
      Share
    </span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      title: "ER Resistance"
    };
  },
  methods: {
    showInfo() {
      this.$emit("clicked", true);
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

footer {
  max-width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;

  .about {
  }

  .share {

    right: 0;
  }
}
</style>

<template>
  <footer>
    <button class="about" aria-label="Read about the project" v-on:click="showAbout">
      About this Project
    </button>
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
    showAbout() {
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
  background: $yellow;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;

  button.about {
    border: none;
    text-transform: uppercase;
    padding: 0;

    &:hover {
      background: inherit;
    }
  }

  .share {

    right: 0;
  }
}
</style>

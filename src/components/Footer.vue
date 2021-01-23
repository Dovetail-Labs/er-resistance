<template>
  <footer>
    <button class="about" aria-label="Read about the project" v-on:click="toggleAbout">
      About this Project
    </button>
    <span class="share">
      Share
    </span>
    <!-- <div v-if="showAbout" class="aboutModal">
      <h3>About this project</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u</p>
      <div class="button-group">
        <button>Read More</button>
        <button>Close</button>
      </div>
    </div> -->
  </footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      title: "ER Resistance",
      showAbout: false
    };
  },
  methods: {
    toggleAbout: function() {
      if(this.showAbout === false) {
        this.showAbout = true;
      } else {
        this.showAbout = false;
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
  z-index: -2;

  button.about {
    border: none;
    text-transform: uppercase;
    padding: 0;

    &:hover {
      background: inherit;
    }
  }

  .about-modal {
    position: static;
    top:50%;
    left:50%;
  }

  .share {

    right: 0;
  }
}
</style>

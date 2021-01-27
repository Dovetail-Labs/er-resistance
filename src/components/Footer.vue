<template>
  <footer>
    <button class="about" 
            aria-label="Read about the project" 
            @click="toggleAbout">
      About this Project
    </button>
    <div class="share">
    <span>
      Share
    </span>
    <ul class="social">
      <li><a href="#"><IconFB /></a></li>
      <li><a href="#"><IconTW /></a></li>
      <li><a href="#"><IconIG /></a></li>
      <li><a href="#"><IconEM /></a></li>
    </ul>
    </div>
  </footer>
</template>

<script>
import IconFB from "@/assets/images/icon-fb.svg";
import IconTW from "@/assets/images/icon-tw.svg";
import IconIG from "@/assets/images/icon-ig.svg";
import IconEM from "@/assets/images/icon-em.svg";

export default {
  name: "Footer",
  components: {
    IconFB,
    IconTW,
    IconIG,
    IconEM
  },
  data() {
    return {
      title: "ER Resistance",
      showAbout: false
    };
  },
  methods: {
    toggleAbout: function() {
      if(this.showAbout === false) {
        this.$emit("showAbout", true);
      }
    }
  }
};
</script>

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

    ul.social { 
      margin: 0;
      padding: 0;
      display: inline-block;

      li {
        display: inline-block;
        padding-left: 0.5em;

        a {
          svg {
            height: 2em;
          }
        }
      }
    }
  }
}
</style>

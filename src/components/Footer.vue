<template>
  <footer>
    <button class="about" 
      aria-label="Read about the project" 
      @click="toggleAbout">
      About
    </button>
    <ul class="credits">
      <li>Created by <a href="https://dovetaillabs.com/"><img class="logo dt" src="@/assets/images/logo-dt.png"></a>,</li>
      <li>supported by<img class="logo nesta" src="@/assets/images/logo-nesta.png"></li>
    </ul>
    <div class="share">
      <span>
        Share
      </span>
      <ul class="social">
        <li><a href="https://www.facebook.com/sharer.php?u=https://emojify.info"><IconFB /></a></li>
        <li><a target="_blank" :href="`https://twitter.com/intent/tweet?text=${message}`"><IconTW /></a></li>
        <li><a :href="`mailto:?subject=${subject}&body=${message}`"><IconEM /></a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
import IconFB from "@/assets/images/icon-fb.svg";
import IconTW from "@/assets/images/icon-tw.svg";
import IconEM from "@/assets/images/icon-em.svg";

export default {
  name: "Footer",
  components: {
    IconFB,
    IconTW,
    IconEM
  },
  data() {
    return {
      title: "ER Resistance",
      subject: "Is emotional recognition technology ‘emojifying’ you?",
      message: "I know more about emotions than emotion recognition technology. I %23BeatTheMachine and you can too. Learn how to %23ResistEmojification at Emojify.info"
    };
  },
  methods: {
    toggleAbout() {
      this.$emit("aboutVisible", "true")
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
  z-index: 1;

  button.about {
    border: none;
    text-transform: uppercase;
    padding: 0;

    &:hover {
      background: inherit;
    }
  }

  ul.credits {
    margin: 0;
    li {
      display: inline-block;
      
      .logo {
        padding-left: 0.5em;
        vertical-align: middle;
      }

      .logo.dt {
        max-height: 1.5em;
      }

      .logo.nesta {
        max-height: 2.25em;
        transform: translateY(-0.6em);
        margin-left: 0.5em;
      }
    }
  }

  .about-modal {
    position: static;
    top:50%;
    left:50%;
  }

  .share {
    right: 0;
    span {
      font-family: 'Press Start 2P', Courier, monospace;
      display: inline-block;
      transform: translateY(-0.25em);
    }

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

// Mobile
@media screen and (max-width: 640px) {
  footer {
    font-size: 0.6rem;
    .share {
      span {
        display: none;
      }
    }
  }
}
</style>

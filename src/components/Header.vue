 <template>
  <header>
    <div>
      <h1>{{ title }}</h1>
      <small>{{ description }}</small>
    </div>
    <button @click="endGame()">
      Finish Game
      <Checkmark class="checkmark"/>
    </button>
  </header>
</template>

<script>
import Checkmark from "@/assets/images/checkmark.svg";

export default {
  name: "Header",
  components: {
    Checkmark
  },
  props: ['title', 'description'], 
  methods: {
    endGame() {
      this.$emit("end-game", true);
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

<style scoped lang="scss">

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  max-width: 100vw;
  background: $yellow;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  z-index: 1;

  button {
    text-transform: uppercase;
    align-self: center;
    padding: 1em;
    background-color: $yellow-lite;

    &:hover {
      cursor: pointer;
    }

    svg {
      height: 1.25em;
    }
  }
}

// Mobile
@media screen and (max-width: 640px) {
  header {
    font-size: 0.6rem;

    h1 {
      font-size: 1.5em; 
    }
  }
}

</style>
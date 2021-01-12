 <template>
  <header>
    <!-- generalized Title and Description? -->
    <div>
      <h1>{{ title }}</h1>
      <span>{{ description }}</span>
    </div>
    <button>
      Finish Game
    </button>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: ['title', 'description'], 
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
  z-index: -2;

  button {
    text-transform: uppercase;
    align-self: center;
    padding: 1em;
    background-color: $yellow-lite;
  }
}

</style>
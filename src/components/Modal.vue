
<template>
  <div
    role="dialog"
    class="modal"
    ref="modal"
    aria-labelledby="modal-label"
    aria-modal="true"
    v-on:keydown="handleKeydown"
  >
    <h3 id="modal-label">title </h3>
    <slot />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Modal",
  data() {
    return {
      focusedElBeforeOpen: null
    };
  },
  props: ["title", "hideClose"],
  // mounted() {
  //   this.focusedElBeforeOpen = document.activeElement;
  //   const modal = this.$refs.modal;
  //   const focusableEls = modal.querySelectorAll(
  //     'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
  //   );
  //   this.focusableEls = Array.prototype.slice.call(focusableEls);
  //   this.firstFocusableEl = this.focusableEls && this.focusableEls[0];
  //   this.lastFocusableEl =
  //     this.focusableEls.length &&
  //     this.focusableEls[this.focusableEls.length - 1];
  //   this.firstFocusableEl.focus();
  // },
  methods: {
    handleBackwardTab(e) {
      if (document.activeElement === this.firstFocusableEl) {
        e.preventDefault();
        this.lastFocusableEl.focus();
      }
    },
    handleForwardTab(e) {
      if (document.activeElement === this.lastFocusableEl) {
        e.preventDefault();
        this.firstFocusableEl.focus();
      }
    },
    handleKeydown(e) {
      const KEY_TAB = 9;
      const KEY_ESC = 27;
      switch (e.keyCode) {
        case KEY_TAB:
          if (this.focusableEls.length === 1) {
            e.preventDefault();
            break;
          }
          if (e.shiftKey) {
            this.handleBackwardTab(e);
          } else {
            this.handleForwardTab(e);
          }
          break;
        case KEY_ESC:
          this.closeModal();
          break;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0 0 18px 6px rgba(0,0,0,0.1);
  box-sizing: border-box;
  padding: 1.5rem;
  z-index: 997;
  color: black;
}

.close-button {
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.75rem;

  .close-icon {
    width: 1rem;
  }
}

.close-button:hover {
  cursor: pointer;
}

@media screen and (max-width: 640px) {
  .modal {
    width: 80%;
  }
}

@media screen and (max-width: 640px) {
  .modal {
    padding: 1rem;
    width: 90%;
    max-height: 70vh;
    overflow-y: scroll;
  }
}
</style>
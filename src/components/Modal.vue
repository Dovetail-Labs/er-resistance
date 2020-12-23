
<template>
  <div
    role="dialog"
    class="modal"
    ref="modal"
    aria-labelledby="modal-label"
    aria-modal="true"
    v-on:keydown="handleKeydown"
  >
    <h3 id="modal-label">{{ title }}</h3>
    <button
      v-if="!hideClose"
      aria-label="Close modal"
      class="close-button"
      v-on:click="closeModal"
    >
      <svg class="close-icon" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.06065 3.182C0.474861 2.59621 0.47486 1.64646 1.06065 1.06068C1.64643 0.474891 2.59618 0.474891 3.18197 1.06068L25.3942 23.273C25.98 23.8587 25.98 24.8085 25.3942 25.3943C24.8085 25.9801 23.8587 25.9801 23.2729 25.3943L1.06065 3.182Z" fill="black"/>
          <path d="M25.3943 3.182C25.98 2.59621 25.98 1.64646 25.3943 1.06068C24.8085 0.474891 23.8587 0.474891 23.2729 1.06068L1.06066 23.273C0.47487 23.8587 0.474869 24.8085 1.06066 25.3943C1.64644 25.9801 2.59619 25.9801 3.18198 25.3943L25.3943 3.182Z" fill="black"/>
      </svg>

    </button>
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
  mounted() {
    this.focusedElBeforeOpen = document.activeElement;
    const modal = this.$refs.modal;
    const focusableEls = modal.querySelectorAll(
      'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
    );
    this.focusableEls = Array.prototype.slice.call(focusableEls);
    this.firstFocusableEl = this.focusableEls && this.focusableEls[0];
    this.lastFocusableEl =
      this.focusableEls.length &&
      this.focusableEls[this.focusableEls.length - 1];
    this.firstFocusableEl.focus();
  },
  methods: {
    closeModal() {
      this.$emit("clicked", false);
      this.focusedElBeforeOpen.focus();
    },
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
  border-radius: $border-l;
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
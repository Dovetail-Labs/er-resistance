<template>
  <div>
    <p>
      {{ $t("overlay-info.p1") }}
    </p>
    <p>
      {{ $t("overlay-info.p2") }}
    </p>
    <h4>
      {{ $t("overlay-info.sub-heading1") }}
    </h4>
    <p>
      {{ $t("overlay-info.p3") }}
    </p>
    <a class="terms" target="_blank" rel="noopener noreferrer" href="/">{{ $t("global-links.terms-and-conditions") }}</a>
    <router-link to="help" target="_blank" rel="noopener noreferrer">{{ $t("intro-page.need-help")}}</router-link>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h4 {
  font-variation-settings: "wght" 500, "wdth" 125, "ital" 0;
  font-size: 1.25rem;
}

a {
  font-family: 'Flexa';
  display: block;
  text-align: left;
  margin: 0.75em 0;
  font-variation-settings: "wght" 400, "wdth" 100, "ital" 0;
  transition: 0.2s ease all;
}

a:hover {
  font-variation-settings: "wght" 600, "wdth" 110, "ital" 0;
}
</style>
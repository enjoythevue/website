<template>
  <div class="sponsorship">
    <div class="sponsorship__offer-container">
      <span class="sponsorship__offer-label">Episode Sponsors</span>
      <g-image
        v-if="name && logoSrc"
        :src="logoSrc" 
        :alt="`${name} logo`"
        class="sponsorship__logo" 
      />
      <p class="sponsorship__offer-content">{{ content }}</p>
      <span 
        v-if="code"
        class="sponsorship__offer-code"
      >Code: {{ code }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SponsorshipBox',
  props: {
    name: {
      type: String,
      required: false,
      default: '',
    },
    logoSrc: {
      type: String,
      required: false,
      default: '',
    },
    content: {
      type: String,
      required: false,
      default: '',
    },
    code: {
      type: String,
      required: false,
      default: '',
    },
  }
}
</script>
<style lang="scss">
@import '../styles/variables.scss';
.sponsorship {

  &__logo {
    max-width: 180px;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  &__offer-container {
    background: $secondary-green;
    max-width: 300px;
    padding: 2rem;
    margin-right: auto;
  }

  &__offer-label {
    font-size: $body-font-lg;
    font-family: $font-main;
    display: block;
  }

  &__offer-content {
    font-size: $body-font-sm;
    font-family: $font-secondary;
  }

  &__offer-code {
    color: $dark-grey;
    font-size: $body-font-lg;
  }
}
</style>
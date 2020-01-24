<template>
  <div class="sponsorship">
    <div>
      <span class="sponsorship__label">This episode is sponsored by {{ name }}</span>
      <g-image
        v-if="name && logoSrc"
        :src="logoSrc" 
        :alt="`${name} logo`"
        class="sponsorship__logo" 
      />
    </div>
    <div class="sponsorship__offer-container">
      <span class="sponsorship__offer-label">Special offer - $20 off</span>

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  &__label {
    display: flex;
    font-size: $body-font-md;
    font-family: $font-secondary
  }

  &__logo {
    height: 80px;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  &__offer-container {
    background: $secondary-green;
    padding: 2rem;
    
    @media (min-width: $breakpoint-sm) {
      max-width: 300px;
    }
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
    color: $bright-pink;
    font-size: $body-font-lg;
  }
}
</style>
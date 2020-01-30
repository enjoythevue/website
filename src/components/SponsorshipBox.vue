<template>
  <div class="sponsorship">
    <a 
      class="sponsorship__image"
      :href="link"
      target="_blank"
    >
      <g-image
        v-if="name && logoSrc"
        :src="logoSrc" 
        :alt="`${name} logo`"
        class="sponsorship__logo" 
      />
    </a>
    <div class="sponsorship__offer">
      <div class="sponsorship__offer-inner">
        <span class="sponsorship__offer-label">Special offer - $20 off</span>

        <p class="sponsorship__offer-content">{{ content }}</p>
        <span 
          v-if="code"
          class="sponsorship__offer-code"
        >Code: {{ code }}</span>
      </div>
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
    link: {
      type: String,
      required: false,
      default: '#',
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
  },
};
</script>
<style lang="scss">
@import '../styles/variables.scss';
.sponsorship {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: $breakpoint-sm) {
    flex-wrap: nowrap;
  }

  &__image,
  &__offer {
    width: 100%;
    display: flex;
    justify-content: flex-start;

    @media (min-width: $breakpoint-sm) {
      justify-content: center;
      flex-wrap: nowrap;
      width: 50%;
    } 
  }

  &__offer {
    background: transparent;
    border-left: none;

    @media (min-width: $breakpoint-sm) {
      border-left: 1px solid $secondary-green;
    }
  }

  &__label {
    display: flex;
    font-size: $body-font-md;
    font-family: $font-secondary
  }

  &__logo {
    height: 70px;
    padding-right: 4rem; 
    // margin: 2rem auto;
    margin-bottom: 2rem;

    @media (min-width: $breakpoint-sm) {
      height: 80px;
      margin-bottom: auto;
    }
  }

  &__offer-inner {
    @media (min-width: $breakpoint-sm) {
      padding-left: 4rem;
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
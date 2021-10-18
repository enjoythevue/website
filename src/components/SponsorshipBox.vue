<template>
  <div class="sponsorship">
    <a class="sponsorship__image" :href="link" target="_blank">
      <g-image
        v-if="name && logoSrc"
        :src="logoSrc"
        :alt="`${name} logo`"
        class="sponsorship__logo"
      />
    </a>
    <div class="sponsorship__details">
      <div class="sponsorship__details-inner">
        <a
          v-if="contentTitle"
          :href='link'
          class="sponsorship__content-title">{{ contentTitle }}</a>

        <p class="sponsorship__content">{{ content }}</p>
        <span v-if="code" class="sponsorship__offer-code"
          >Code: {{ code }}</span
        >
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
      default: ''
    },
    logoSrc: {
      type: String,
      required: false,
      default: ''
    },
    link: {
      type: String,
      required: false,
      default: '#'
    },
    contentTitle: {
      type: String,
      required: false,
      default: ''
    },
    content: {
      type: String,
      required: false,
      default: ''
    },
    code: {
      type: String,
      required: false,
      default: ''
    }
  }
};
</script>
<style lang="scss">
@import '../styles/variables.scss';
.sponsorship {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  & + .sponsorship {
    margin-top: 4rem;
  }

  @media (min-width: $breakpoint-sm) {
    flex-wrap: nowrap;
  }

  &__image,
  &__details {
    width: 100%;
    display: flex;
    justify-content: flex-start;

    @media (min-width: $breakpoint-sm) {
      justify-content: center;
      flex-wrap: nowrap;
      width: auto;
      min-width: 200px;
    }
  }

  &__image {
    align-items: flex-start;
  }

  &__details {
    background: transparent;
    border-left: none;

    @media (min-width: $breakpoint-sm) {
      border-left: 1px solid $secondary-green;
    }
  }

  &__label {
    display: flex;
    font-size: $body-font-md;
    font-family: $font-secondary;
  }

  &__logo {
    height: auto;
    max-height: 100px;
    max-width: 200px;
    padding-right: 2rem;
    margin-bottom: 2rem;

    @media (min-width: $breakpoint-sm) {
      margin-bottom: auto;
    }
  }

  &__details-inner {
    @media (min-width: $breakpoint-sm) {
      padding-left: 4rem;
      max-width: 300px;
    }
  }

  &__content-title {
    font-size: $body-font-lg;
    font-family: $font-main;
    color: $text-dark;
    display: block;

    &:link,&:hover,&:visited,&:focus{
      color: $text-dark;
    }
  }

  &__content {
    font-size: $body-font-sm;
    font-family: $font-secondary;
  }

  &__offer-code {
    color: $bright-pink;
    font-size: $body-font-lg;
  }
}
</style>

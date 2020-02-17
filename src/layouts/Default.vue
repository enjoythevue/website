<template>
  <div class="layout">
    <site-nav />
    <slot />
    <footer class="footer">
      <social-links class="footer__social-links" />
      <div class="footer__network">
        Part of the
        <a href="https://codefund.io/podcasts" target="_blank">
          <g-image
            class="footer__network-logo"
            src="/images/codefund-horizontal-logo-color.png"
            alt="CodeFund"
          />
        </a>
        Podcast Network
      </div>
    </footer>
  </div>
</template>

<script>
import SiteNav from '../components/SiteNav.vue';
import SocialLinks from '../components/SocialLinks.vue';

export default {
  name: 'Default',
  components: {
    SiteNav,
    SocialLinks
  }
};
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/globals.scss';

html {
  font-size: 10px;
}

.layout {
  margin: 0 auto;
  background-image: $gradient-dark;
}

h1 {
  font-size: $h1-size;
}

header,
footer {
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.footer {
  background: white;
  flex-wrap: wrap;
  color: $dark-grey;
  font-size: $body-font-sm;

  &__social-links svg {
    fill: $primary-green;
  }

  &__network {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 2rem;
    font-size: 10px;

    @media (min-width: $breakpoint-xs) {
      font-size: $body-font-sm;
    }
  }

  &__network-logo {
    max-width: 70px;
    margin: 0 1rem -3px 1rem;

    @media (min-width: $breakpoint-xs) {
      max-width: 100px;
    }
  }
}
</style>

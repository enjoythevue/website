<template>
  <nav class="site-nav">
    <strong>
      <g-link to="/" class="site-nav__link">Enjoy the Vue </g-link>
    </strong>
    <ul class="site-nav__list">
      <li class="site-nav__list-item">
        <a class="site-nav__link sponsorship" href="/sponsorship">Support us!</a>
      </li>
      <li class="site-nav__list-item">
        <a class="site-nav__link" href="/episodes">Episodes</a>
      </li>
      <li class="site-nav__list-item">
        <a class="site-nav__link" href="/blog">Blog</a>
      </li>
      <li class="site-nav__list-item">
        <a class="site-nav__link" href="https://pod.link/1498529055">
          <rss-logo color="green" class="mr-05r" /> Subscribe
        </a>
      </li>
    </ul>
  </nav>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import RssLogo from '../image-components/RssLogo';

export default {
  name: 'SiteNav',
  components: {
    RssLogo
  }
};
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.site-nav {
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  &__list {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  &__list-item {
    padding: 0 1rem;
  }

  &__link {
    @include link-primary;
    font-size: $body-font-sm;
    display: flex;
    align-items: center;

    &.sponsorship{
      color: white;
      background-color: $primary-green;
      padding: 0 1rem;
      border-radius: 2rem;
    }

    @media (min-width: $breakpoint-md) {
      font-size: $body-font-md;
    }

    &,
    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
    }
  }
}
</style>

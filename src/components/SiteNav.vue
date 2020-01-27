<template>
  <nav class="site-nav">
    <strong>
      <g-link 
        to="/"
        class="site-nav__link"
      >Enjoy the Vue
      </g-link>
    </strong>
    <ul class="site-nav__list">
      <li class="site-nav__list-item">
        <a class="site-nav__link" href="https://feeds.fireside.fm/enjoy-the-vue/rss">Subscribe</a>
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
export default {
	name: 'SiteNav',
}
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

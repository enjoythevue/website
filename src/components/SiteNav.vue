<template>
  <!-- <strong>
    <g-link to="/">{{ $static.metadata.siteName }}</g-link>
  </strong> -->
  <nav class="site-nav">
    <g-link class="site-nav__link" to="/suggest-an-episode">Suggest an episode</g-link>
  </nav>
</template>

<script>
export default {
	name: 'SiteNav',
}
</script>

<style lang="scss">
.site-nav {
  
  &__link { 
    color: white;

    &,
    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
    }
  }
}
</style>

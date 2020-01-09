<template>
  <div class="layout">
    <slot/>
    <footer class="footer">
      <social-links />
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import SiteNav from '../components/SiteNav.vue';
import SocialLinks from '../components/SocialLinks.vue';

export default {
  name: 'Default',
  components: {
    SiteNav,
    SocialLinks,
  },
};
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/globals.scss';

.layout {
  margin: 0 auto;
  background-image: $gradient-dark;
}

header,
footer {
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
}

footer {
  background: $secondary-green;
}
</style>

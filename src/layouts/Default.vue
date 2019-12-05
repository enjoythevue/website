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
import SocialLinks from '../components/SocialLinks.vue';

export default {
  name: 'Default',
  components: {
    SocialLinks,
  },
};
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/globals.scss';

.layout {
  margin: 0 auto;
}

footer {
  width: 100%;
  background: $secondary-green;
  padding: 2rem;
  display: flex;
  justify-content: center;
}
</style>

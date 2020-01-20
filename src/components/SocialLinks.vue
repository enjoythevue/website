<template>
  <div class="social-links">
    <a v-for="account in accounts" 
    :href="account.url" 
    :key="`social-${account.type}`">
      <component :is="`${account.type}-icon`" />
      <span class="sr-only">{{ account.type }}</span>
    </a>
  </div>
</template>

<script>
import TwitterIcon from '../image-components/TwitterIcon.vue';
import InstagramIcon from '../image-components/InstagramIcon.vue';

export default {
  name: 'SocialLinks',
  components: {
    TwitterIcon,
    InstagramIcon,
  },
  data() {
    return {
      accounts: [
        {
          type: 'twitter',
          url: 'https://www.twitter.com/enjoythevuecast'
        },
        {
          type: 'instagram',
          url: 'https://www.instagram.com/enjoythevuepodcast'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.social-links {
  svg {
    height: 30px;
    width: 30px;
    fill: white;

    &:not(:last-child) {
        margin-right: 1rem;
    }
  }

  .st0 {
    fill:#ffffff;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
</style>

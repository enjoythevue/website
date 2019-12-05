<template>
  <div class="social-links">
    <twitter-icon />
    <instagram-icon />
  </div>
</template>

<script>
import TwitterIcon from '../icons/TwitterIcon.vue';
import InstagramIcon from '../icons/InstagramIcon.vue';

export default {
  name: 'SocialLinks',
  components: {
    TwitterIcon,
    InstagramIcon,
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
</style>

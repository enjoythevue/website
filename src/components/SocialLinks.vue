<template>
	<div class="social-links">
		<twitter-icon></twitter-icon>
		<instagram-icon></instagram-icon>
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
	},
	data() {
		return {
			instagram: {
				link: 'thevuepointpodcast',
				twitter: 'thevuepoint',
				email: 'hello@thevuepoint.io',
			},
		};
	},
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

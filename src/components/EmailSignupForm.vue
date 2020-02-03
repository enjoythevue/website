<template>
	<div class="ml-form-embed email-signup"
		data-account="1853384:u6y8f1w6i9"
		data-form="1753778:g2u3f1">
	</div>
</template>

<script>
import MailerLite from '../scripts/mailerlite';

export default {
	name: 'EmailSignupForm',
	created() {
    MailerLite(
      window,
      document,
      'script',
      'https://static.mailerlite.com/js/universal.js',
      'ml'
    )

    var ml_account = ml('accounts', '1853384', 'u6y8f1w6i9', 'load')
  }
}
</script>

<style lang="scss">
@import '../styles/forms.scss';
@import '../styles/buttons.scss';

// Oh it hurts me so much to write CSS like this... :cries:
#mlb2-1753778 {
	* {
		font-family: 'Fira Code', monospace !important;
	}

	&.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody {
		padding: 0 !important;

		.ml-form-checkboxRow label p:last-child {
			font-family: 'Fira Code', monospace !important;
			font-size: 1.2rem !important;
		}

		.ml-form-embedSubmit button:first-child {
			font-family: 'Fira Code', monospace !important;
		}
	}
}

.email-signup {
	&__button {
		margin-top: 2rem;
		
    @media (min-width: $breakpoint-sm) {
			margin: 2rem 0px auto auto;
    }
  }
}
</style>

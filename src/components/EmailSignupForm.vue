<script>
import MailerLite from '../scripts/mailerlite';

export default {
  name: 'EmailSignupForm',
  created() {
    if (process.isClient) {
      MailerLite(
        window,
        document,
        'script',
        'https://static.mailerlite.com/js/universal.js',
        'ml'
      );

      const ml_account = ml('accounts', '1853384', 'u6y8f1w6i9', 'load');
    }
  }
};
</script>

<template>
  <div
    class="ml-form-embed email-signup"
    data-account="1853384:u6y8f1w6i9"
    data-form="1753778:g2u3f1"
  />
</template>

<style lang="scss">
@import '../styles/forms.scss';
@import '../styles/buttons.scss';

// These are MailerLite style overrides
// Oh it hurts me so much to write CSS like this... :cries:
#mlb2-1753778 {
  p {
    font-family: 'Barlow', sans-serif !important;
    font-size: 1.5rem !important;
  }

  &.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody {
    padding: 0 !important;

    .ml-form-checkboxRow label p:last-child {
      font-family: 'Barlow', sans-serif !important;
      font-size: 1.4rem !important;
    }

    .ml-form-embedSubmit button:first-child {
      font-family: 'Barlow', sans-serif !important;
      font-size: 1.5rem !important;
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

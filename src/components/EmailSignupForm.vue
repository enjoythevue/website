<template>
	<form
		name="contact"
		method="POST"
		class="form"
		data-netlify="true"
		data-netlify-honeypot="bot-field" >
		<input
		type="hidden"
		name="form-name"
		value="contact" />
		<label class="form__label form__label--half email-signup__label">Your Name:
			<input
				type="text"
				name="name"
				class="form__input" />
		</label>

		<label class="form__label form__label--half email-signup__label">Your Email:
			<input
				type="email"
				name="email"
				class="form__input"
				required />
		</label>

		<button
			class="btn btn--primary email-signup__button"
			type="submit">Send
		</button>
	</form>
</template>

<script>
export default {
	name: 'EmailSignupForm',
}
</script>

<style lang="scss">
@import '../styles/forms.scss';
@import '../styles/buttons.scss';

.email-signup {
	&__button {
		margin-top: 2rem;
		
    @media (min-width: $breakpoint-sm) {
			margin: 2rem 0px auto auto;
    }
  }
}
</style>

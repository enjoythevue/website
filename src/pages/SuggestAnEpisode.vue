<template>
  <Layout>
    <main class="suggest-an-episode">
      <section class="suggest-an-episode__heading-container">
        <div class="suggest-an-episode__section-inner">
          <h1 class="suggest-an-episode__title">Request a topic or guest</h1>
          <p class="suggest-an-episode__description">
            Fill out this form to let us know what you'd like to hear, and we
            will do our best to make it happen!
          </p>
        </div>
      </section>

      <section class="suggest-an-episode__content">
        <div class="suggest-an-episode__section-inner">
          <form
            name="suggest-an-episode"
            method="POST"
            class="form"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="suggest-an-episode" />

            <label class="form__label" for="suggest-an-episode-topic">
              Do you have a topic you'd like to hear a discussion about?
              <span class="form__label--subtle">(optional)</span>
              <textarea
                id="suggest-an-episode-topic"
                name="topic"
                class="form__input"
              />
            </label>

            <label class="form__label" for="suggest-an-episode-guest">
              Do you have an awesome guest in mind who you'd like us to reach
              out to?
              <span class="form__label--subtle"> (optional)</span>
              <textarea
                id="suggest-an-episode-guest"
                name="guest"
                class="form__input"
              />
            </label>

            <label
              class="form__label"
              for="suggest-an-episode-additional-notes"
            >
              Additional notes
              <span class="form__label--subtle"> (optional)</span>
              <textarea
                id="suggest-an-episode-additional-notes"
                name="notes"
                class="form__input"
              />
            </label>

            <label
              class="form__label form__label--half"
              for="suggest-an-episode-name"
            >
              Your name
              <span class="form__label--subtle"> (optional)</span>
              <input
                id="suggest-an-episode-name"
                type="text"
                name="name"
                class="form__input"
              />
            </label>

            <label
              class="form__label form__label--half"
              for="suggest-an-episode-email"
            >
              Your email
              <span class="form__label--subtle"> (optional)</span>
              <input
                id="suggest-an-episode-email"
                type="email"
                name="email"
                class="form__input"
              />
            </label>

            <div class="suggest-an-episode__button-container">
              <button class="btn btn--primary" type="submit">Send</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Suggest an episode'
  }
};
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/forms.scss';
@import '../styles/buttons.scss';

.suggest-an-episode {
  section {
    padding: $section-padding-mobile;
  }

  textarea,
  input {
    margin-top: 1rem;
    padding: 1rem;
    color: $text-dark;
  }

  &__section-inner {
    max-width: 780px;
    margin: auto;
  }

  &__heading-container {
    background: $secondary-green;
  }

  &__title {
    text-align: center;
    color: white;
    margin-bottom: 0;
  }

  &__description {
    font-family: $font-secondary;
    font-size: $body-font-lg;
    color: white;
    text-align: center;
  }

  &__content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    background: white;
    color: $text-dark;
  }

  &__button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;

    @media (min-width: $breakpoint-sm) {
      margin-top: 4rem;
    }
  }
}
</style>

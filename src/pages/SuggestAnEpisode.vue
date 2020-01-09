<template>
  <Layout>
    <main class="suggest-an-episode">
      <section class="suggest-an-episode__content">
        <h1>Have an idea for an episode topic or a guest?</h1>
        <p>Fill out this form to let us know what you'd like to hear, and we will do our best to make it happen!</p>

        <form 
          name="suggest-an-episode"
          method="POST"
          class="form"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input
            type="hidden"
            name="form-name"
            value="suggest-an-episode" />

          <label class="form__label">
            Do you have a topic you'd like to hear a discussion about? (optional)
            <textarea
              type="text"
              name="name"
              class="form__input" />
          </label>

          <label class="form__label">
            Do you have an awesome guest in mind who you'd like us to reach out to? (optional)
            <textarea
              type="text"
              name="name"
              class="form__input" />
          </label>

          <label class="form__label">
            Additional notes (optional)
            <textarea
              type="text"
              name="name"
              class="form__input" />
          </label>

          <label class="form__label">
            Your name (optional)
            <input
              type="text"
              name="name"
              class="form__input" />
          </label>

        </form>
      </section>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Suggest an episode'
  }
}
</script>

<style lang="scss">
@import '../styles/forms.scss';
@import '../styles/buttons.scss';

.suggest-an-episode {
  
  section { padding: 4rem 1rem; }

  textarea {
    display: block;
    width: 100%;
    margin-top: 1rem;
  }

  &__content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    color: $text-light;
  }

  .form__label {
    width: 100%;
  }

  .form__label + .form__label {
    margin-top: 2rem;
  }
}
</style>

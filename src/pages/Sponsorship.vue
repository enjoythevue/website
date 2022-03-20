<script>
import KofiButton from '../components/KofiButton.vue';
export default {
  name: 'sponsorship',
  components:{KofiButton},
  metaInfo() {
    return {};
  }
};
</script>

<template>
  <layout>
    <main class="container">
      <section class="container__section container__header">
        <div class="container__section-inner">
          <h1>Sponsor us!</h1>
        </div>
      </section>
      <section class="container__section sponsorship">
        <div class="container__section-inner">
          <p>
            Thank you for supporting the show! Individuals and companies can
            sponsor us on a monthly basis on our Ko-fi page:
          </p>
          <p style="text-align:center;"><kofi-button /></p>
          <p>
            If you're interested in advertising your product or service on the
            show, please let us know in the form below!
          </p>
        </div>
      </section>
      <section class="container__section">
        <div class="container__section-inner">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSecDF7pJqNNPz4rle9NYoKXKsU-atirZVY0M-60VasvfojVkw/viewform?embedded=true"
            width="780"
            height="1000"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            >Loading…</iframe
          >
        </div>
      </section>
    </main>
  </layout>
</template>
<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/layout.scss';

.sponsorship{
  color: $text-light;
}
</style>

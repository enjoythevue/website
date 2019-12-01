<template>
  <Layout>
    
    <main class="landing">

      <section class="landing__content-section">
        <g-image 
          alt="Enjoy the Vue Logo" 
          src="~/favicon.png" 
          width="135"
          class="landing__logo" />

        <h1 class="landing__title">Enjoy the Vue</h1>

        <p class="landing__about-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div class="landing__panelists">
          <h2 class="landing__title">Our panelists</h2>
          <div class="landing__panelists-container">
            <panelist 
              v-for="panelist in panelists"
              :key="panelist.name"
              v-bind="panelist"
            />
          </div>
        </div>
      </section>
    
      <section class="landing__form-section">
        <h2 class="landing__title">Stay updated</h2>
        <form
            name="contact"
            method="POST"
            class="form landing__form-container"
            data-netlify="true"
            data-netlify-honeypot="bot-field" >
              <input
                type="hidden"
                name="form-name"
                value="contact" />
              <label class="form__label">Your Name:
                <input
                  type="text"
                  name="name"
                  class="form__input" />
              </label>

                <label class="form__label">Your Email:
                  <input
                      type="email"
                      name="email"
                      class="form__input"
                      required />
                </label>


            <button
                class="btn btn--primary"
                type="submit">Send
            </button>
        </form>

      </section>
    </main>
  </Layout>
</template>

<script>
import Panelist from '../components/Panelist.vue';

export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  components: {
    Panelist,
  },
  data() {
    return {
      panelists: [
        {
          name: 'Chris Fritz',
          img: 'images/chris-bio.jpeg',
          website: 'https://twitter.com/chrisvfritz',
        },
        {
          name: 'Ben Hong',
          img: 'images/ben-bio.jpeg',
          website: 'https://twitter.com/chrisvfritz',
        },
        {
          name: 'Ari Clark',
          img: 'images/ari-bio.jpeg',
          website: 'https://twitter.com/chrisvfritz',
        },
        {
          name: 'Elizabeth Fine',
          img: 'images/elizabeth-bio.jpeg',
          website: 'https://twitter.com/chrisvfritz',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '../styles/variables.scss';
.landing {
  width: 100%;
  height: 100%;
  
  &__content-section { 
    margin: 0 auto;
    padding: 4rem 0;
    color: $text-light;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  &__logo { display: block; }

  &__title { width: 100%; }

  &__title,
  &__about-paragraph {
    text-align: center;
  }

  &__about-paragraph {
    max-width: 700px;
  }

  &__panelists {
    width: 100%;
  }

  &__panelists-container {
    display: flex;
    justify-content: center;
  }

  &__form-section {
    margin: 0 auto;
    padding: 4rem 0;
    background: white;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>

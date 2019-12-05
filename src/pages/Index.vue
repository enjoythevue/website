<template>
  <Layout>  
    <main class="landing">
      <section class="landing__content">
        <!-- TODO: Replace this with the ETV logo -->
        <g-image 
          alt="Enjoy the Vue Logo" 
          src="~/favicon.png" 
          width="135"
          class="landing__logo" />

        <h1 class="landing__title">{{ pageTitle }}</h1>

        <p class="landing__about-paragraph">{{ podcastDescription }}</p>

        <div class="landing__panelists">
          <h2 class="landing__title">Our panelists</h2>
          <panelists :panelists="panelists" />
        </div>
      </section>
    
      <section class="landing__form">
        <h2 class="landing__title">Stay updated</h2>
        <email-signup-form />
      </section>
    </main>
  </Layout>
</template>

<script>
import Panelists from '../components/Panelists.vue';
import EmailSignupForm from '../components/EmailSignupForm.vue';

export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  components: {
    Panelists,
    EmailSignupForm,
  },
  data() {
    return {
      pageTitle: 'Enjoy the Vue',
      podcastDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
           in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
           in culpa qui officia deserunt mollit anim id est laborum.`,
      panelists: [
        {
          name: 'Chris Fritz',
          img: 'images/chris-bio.jpeg',
          website: 'https://twitter.com/chrisvfritz',
        },
        {
          name: 'Ben Hong',
          img: 'images/ben-bio.jpeg',
          website: 'https://twitter.com/bencodezen',
        },
        {
          name: 'Ari Clark',
          img: 'images/ari-bio.jpeg',
          website: 'https://twitter.com/gloomyLumi',
        },
        {
          name: 'Elizabeth Fine',
          img: 'images/elizabeth-bio.jpeg',
          website: 'https://twitter.com/elizabethfine4',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '../styles/variables.scss';

.landing {
  
  &__content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 4rem 0;
    color: $text-light;
    background-image: $gradient-dark;
  }
  
  &__logo { 
    display: block;
  }

  &__title { 
    width: 100%; 
  }

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

  &__form {
    margin: 0 auto;
    padding: 4rem 0;
    background: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    h2 { margin-top: 0; }
  }
}
</style>

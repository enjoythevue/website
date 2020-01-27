<template>
  <Layout>  
    <main class="landing">
      <section class="landing__content">
        <g-image 
          alt="Enjoy the Vue Logo" 
          :src="`/images/enjoythevue-logo-300.png`" 
          class="landing__logo" />
          
        <h1 class="landing__title">{{ pageTitle }}</h1>
        <p class="landing__about-paragraph">{{ podcastDescription }}</p>
        <div class="landing__recent-episode">
          <a href="https://feeds.fireside.fm/enjoy-the-vue/rss" class="btn btn--primary mb-2r"><rss-logo class="mr-05r" /> Subscribe to our podcast</a>
          <g-link 
            class="btn btn--secondary"
            to="/episodes/1"
          >
            Listen to the most recent episode
          </g-link>
        </div>
        <div class="landing__panelists">
          <h2 class="landing__title">Our panelists</h2>
          <panelists
            :panelists="panelists"
            class="landing__panelists-container"
          />
        </div>
      </section>
    
      <section class="landing__form">
        <h2 class="landing__title">Stay updated</h2>
        <email-signup-form />
      </section>

      <section class="landing__suggest-an-episode">
        <h2>We welcome your suggestions!</h2>
        <span>Have a guest or a topic in mind that you'd like to hear on Enjoy The Vue?</span>
        <span>Let us know and <g-link to="/suggest-an-episode">suggest an episode.</g-link></span>
      </section>
    </main>
  </Layout>
</template>

<script>
import Panelists from '../components/Panelists.vue';
import EmailSignupForm from '../components/EmailSignupForm.vue';
import RssLogo from '../image-components/RssLogo';

export default {
  metaInfo: {
    title: 'Enjoy the Vue Podcast',
  },
  components: {
    Panelists,
    EmailSignupForm,
    RssLogo
  },
  data() {
    return {
      pageTitle: 'Enjoy the Vue',
      podcastDescription: `A new Vue.js podcast bringing you 
      panel discussions, guest interviews, and much more to
      keep you up to date on what's happening in the Vue and tech 
      communities.`,
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
@import '../styles/mixins.scss';
@import '../styles/utilities.scss';

.landing {

  section {
    padding: 4rem 1rem;

    @media (min-width: $breakpoint-sm) {
      padding: 8rem 1rem;
    }
  }
  
  &__content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    color: $text-light;
  }
  
  &__logo { 
    height: 120px;
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
    font-family: $font-secondary;
    font-size: 1.8rem;
    margin-top: 0;
  }

  &__recent-episode {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    width: 100%;
  }

  &__panelists {
    width: 100%;
  }

  &__panelists-container {
    justify-content: center;
  }

  &__form {
    margin: 0 auto;
    background: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: $breakpoint-sm) {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }

    h2 { margin-top: 0; }
  }

  &__suggest-an-episode {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: white;

    h2 { margin-top: 0; }

    a {
      @include link-primary;
    }

    h2,
    span {
      width: 100%;
      text-align: center;
    }

    a,
    span {
      font-family: $font-secondary;
      font-size: $body-font-lg;
    }
  }
}
</style>

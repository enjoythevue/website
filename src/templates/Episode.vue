<template>
  <Layout>
    <main class="episode">
      <section class="episode__section">
        <div class="episode__section-inner">
          <span class="episode__publishing-details">Episode {{ $page.episode.episode_number }} - {{ formattedDate }}</span>
          <h1 class="episode__title">{{ $page.episode.episode_title }}</h1>
          <div>
            <media-player
              :cover-art-src="$page.episode.cover_art"
              :sharing-link="$page.episode.sharing_link"
              :download-link="$page.episode.download_link"
              :rss-link="$page.episode.rss_link"
              :audio-link="$page.episode.audio_link"
            />
          </div>
        </div>
      </section>
   
      <section class="episode__section episode__sponsorship">
        <div class="episode__section-inner">
          <sponsorship-box
            :name="$page.episode.sponsorship_details.sponsor_name"
            :logoSrc="$page.episode.sponsorship_details.sponsor_logo"
            :content="$page.episode.sponsorship_details.sponsor_offer_details"
            :code="$page.episode.sponsorship_details.sponsor_offer_code"
          />
        </div>
      </section>

      <section class="episode__section episode__shownotes">
        <div class="episode__section-inner">
          <h2>Shownotes</h2>
          <div 
            class="episode__shownotes-content"
            v-html="$page.episode.shownotes"
          />
        </div>
      </section>
      <section class="episode__section episode__picks">
        <div class="episode__section-inner">
          <h2>Our picks this week</h2>
          <panelists
            :panelists="panelistsAndPicks"
            class="episode__panelists"
          />
        </div>
      </section>

      <section class="episode__section">
        <div class="episode__section-inner">
          <h2>Transcript</h2>
          <div
            class="episode__transcript" 
            v-html="compiledTranscript"
          />
        </div>
      </section>   
    </main>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  episode(id: $id) {
    episode_number
    episode_title
    date_published
    cover_art
    sharing_link
    download_link
    rss_link
    audio_link
    sponsorship_details {
      sponsor_name
      sponsor_logo
      sponsor_offer_details
      sponsor_offer_code
    }
    picks {
      chris_picks
      ben_picks
      ari_picks
      elizabeth_picks
    }
    shownotes
    transcript
  }
}
</page-query>

<script>
import MediaPlayer from '../components/MediaPlayer.vue';
import SponsorshipBox from '../components/SponsorshipBox.vue';
import Panelists from '../components/Panelists.vue';
import * as marked from 'marked';

export default {
  name: 'EpisodeDetail',
  components: {
    MediaPlayer,
    SponsorshipBox,
    Panelists,
  },
  mounted() {
    const { chris_picks, ben_picks, ari_picks, elizabeth_picks } = this.$page.episode.picks;
  },
  computed: {
    formattedDate() {
      const { date_published } = this.$page.episode;
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      const date = new Date(date_published);
      const month = months[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();
      return `${month} ${day}, ${year}`;
    },
    panelistsAndPicks() {
      const { chris_picks, ben_picks, ari_picks, elizabeth_picks } = this.$page.episode.picks;
      
      const chris = {
        name: 'Chris Fritz',
        img: 'images/chris-bio.jpeg',
        website: 'https://twitter.com/chrisvfritz',
        picks: [...chris_picks.split(', ')],
      };

      const ben = {
        name: 'Ben Hong',
        img: 'images/ben-bio.jpeg',
        website: 'https://twitter.com/bencodezen',
        picks: [...ben_picks.split(', ')],
      }

      const ari = {
        name: 'Ari Clark',
        img: 'images/ari-bio.jpeg',
        website: 'https://twitter.com/gloomyLumi',
        picks: [...ari_picks.split(', ')],
      }

      const elizabeth = {
        name: 'Elizabeth Fine',
        img: 'images/elizabeth-bio.jpeg',
        website: 'https://twitter.com/elizabethfine4',
        picks: [...elizabeth_picks.split(', ')],
      }

      // Return array of properties for each host with picks
      return [
        chris_picks ? chris : null,
        ben_picks ? ben : null,
        ari_picks ? ari : null,
        elizabeth_picks ? elizabeth : null,
      ]
    },
    compiledTranscript() {
      return marked(this.$page.episode.transcript, { sanitize: true });
    },
  },
};
</script>
<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.episode {
  color: white;
  margin: 4rem 0;

  h2 {
    margin-top: 0;
    margin-bottom: 4rem;
  }

  &__section {
    padding: $section-padding-mobile;

    @media (min-width: $breakpoint-sm) {
      padding: 4rem 0;
    }
  }

  &__section-inner {
    max-width: 780px;
    margin: auto;
  }

  &__publishing-details {
    opacity: 0.6;
    font-size: $body-font-sm;
    font-family: $font-secondary;
  }

  &__title {
    margin-top: 1rem;
  }

  &__sponsorship {
    margin-bottom: 4trem;
  }

  &__picks,
  &__shownotes {
    background: white;
    color: $dark-grey;
  }

  &__shownotes-content {
    font-size: $body-font-sm;
    font-family: $font-secondary;
  }

  &__panelists {
    justify-content: space-between;

    // Override link styles to work with light background.
    .panelists__person-name {
      @include link-primary-light-background;
    }
  }

  &__transcript {
    font-size: $body-font-sm;
    font-family: $font-secondary;
    max-height: 500px;
    overflow: scroll;
  }

  &__transcript-speaker {
    font-weight: bold;
    background: white;
    color: $dark-grey;
    padding: 2px;
    margin-right: 1rem;
  }

  &__transcript-block {
    margin-bottom: 1rem;
  }
}
</style>
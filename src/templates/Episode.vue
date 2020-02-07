<template>
  <Layout>
    <main class="episode">
      <section class="container__section container__header">
        <div class="container__section-inner">
          <span class="episode__publishing-details"
            >Episode {{ $page.episode.episode_number }} -
            {{ formattedDate }}</span
          >
          <h1 class="episode__title">{{ $page.episode.episode_title }}</h1>
          <div>
            <media-player
              :cover-art-src="$page.episode.cover_art"
              :sharing-link="$page.episode.sharing_link"
              :download-link="$page.episode.download_link"
              :rss-link="$page.episode.rss_link"
              :audio-link="$page.episode.audio_link"
            />
            <!-- <iframe src="https://fireside.fm/player/v2/iAt1uZwr+U8aStBsX?theme=dark" width="740" height="200" frameborder="0" scrolling="no"></iframe> -->
          </div>
        </div>
      </section>

      <section class="container__section episode__sponsorship">
        <div class="container__section-inner">
          <h2>This episode is sponsored by...</h2>
          <sponsorship-box
            :name="$page.episode.sponsorship_details.sponsor_name"
            :logoSrc="$page.episode.sponsorship_details.sponsor_logo"
            :link="$page.episode.sponsorship_details.sponsor_link"
            :content="$page.episode.sponsorship_details.sponsor_offer_details"
            :code="$page.episode.sponsorship_details.sponsor_offer_code"
          />
        </div>
      </section>

      <section class="container__section episode__shownotes">
        <div class="container__section-inner">
          <h2>Shownotes</h2>
          <div class="episode__shownotes-content" v-html="compiledShownotes" />
        </div>
      </section>
      <section class="container__section episode__picks">
        <div class="container__section-inner">
          <h2>Our picks this week</h2>
          <panelists
            :picks="picks"
            only-show-panelists-with-picks
            class="episode__panelists"
          />
        </div>
      </section>

      <section class="container__section">
        <div class="container__section-inner">
          <h2>Transcript</h2>
          <div class="episode__transcript" v-html="compiledTranscript" />
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
      sponsor_link
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
import MediaPlayer from '../components/MediaPlayer.vue'
import SponsorshipBox from '../components/SponsorshipBox.vue'
import Panelists from '../components/Panelists.vue'
import * as marked from 'marked'

export default {
  name: 'EpisodeDetail',
  components: {
    MediaPlayer,
    SponsorshipBox,
    Panelists
  },
  mounted() {
    const {
      chris_picks,
      ben_picks,
      ari_picks,
      elizabeth_picks
    } = this.$page.episode.picks
  },
  computed: {
    formattedDate() {
      const { date_published } = this.$page.episode
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
        'December'
      ]
      const date = new Date(date_published)
      const month = months[date.getMonth()]
      const day = date.getDate()
      const year = date.getFullYear()
      return `${month} ${day}, ${year}`
    },
    picks() {
      const {
        chris_picks,
        ben_picks,
        ari_picks,
        elizabeth_picks
      } = this.$page.episode.picks
      return {
        chris: chris_picks.length ? [...chris_picks.split(',')] : [],
        ben: ben_picks.length ? [...ben_picks.split(',')] : [],
        ari: ari_picks.length ? [...ari_picks.split(',')] : [],
        elizabeth: elizabeth_picks.length ? [...elizabeth_picks.split(',')] : []
      }
    },
    compiledShownotes() {
      return marked(this.$page.episode.shownotes, { sanitize: true })
    },
    compiledTranscript() {
      return marked(this.$page.episode.transcript, { sanitize: true })
    }
  }
}
</script>
<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';
@import '../styles/layout.scss';

.episode {
  color: white;
  margin-bottom: 4rem;

  h2 {
    margin-top: 0;
    margin-bottom: 4rem;
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
    padding-bottom: 4rem;
    background: white;
    color: $dark-grey;
  }

  &__picks,
  &__shownotes {
    background: white;
    color: $dark-grey;

    a {
      @include link-primary-light-background;
    }
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

    a {
      @include link-primary;
    }
  }
}
</style>

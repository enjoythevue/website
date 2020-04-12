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
              :episode-number="$page.episode.episode_number"
              :cover-art-src="$page.episode.cover_art"
              :sharing-link="$page.episode.sharing_link"
              :download-link="$page.episode.download_link"
              :rss-link="rssLink"
              :audio-link="$page.episode.audio_link"
            />
          </div>
        </div>
      </section>

      <section class="container__section episode__sponsorship">
        <div class="container__section-inner">
          <h2>This episode is sponsored by...</h2>
          <sponsorship-box
            :name="sponsor.sponsor_name"
            :logoSrc="sponsor.sponsor_logo"
            :link="sponsor.sponsor_link"
            :content="sponsor.sponsor_offer_details"
            :code="sponsor.sponsor_offer_code"
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
    audio_link
    sponsor
    picks {
      person 
      picks {
        title
        website
      }
    }
    shownotes
    transcript
  }
  allSponsor {
    edges {
      node {
        sponsor_name
        sponsor_logo
        sponsor_link
        sponsor_offer_details
        sponsor_offer_code
      }
    }
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
  metaInfo() {
    return {
      title: `Episode #${this.$page.episode.episode_number}`
    };
  },
  components: {
    MediaPlayer,
    SponsorshipBox,
    Panelists
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
        'December'
      ];
      const date = new Date(date_published);
      const month = months[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();
      return `${month} ${day}, ${year}`;
    },
    picks() {
      const panelists = ['chris', 'ben', 'ari', 'elizabeth'];
      const picks = {};

      panelists.forEach(panelist => {
        const panelistFound = this.$page.episode.picks.find(
          item => item.person.toLowerCase().indexOf(panelist) > -1
        );

        if (panelistFound) {
          picks[panelist] = panelistFound.picks;
        }
      });

      return picks;
    },
    compiledShownotes() {
      return marked(this.$page.episode.shownotes, { sanitize: true });
    },
    compiledTranscript() {
      return marked(this.$page.episode.transcript, { sanitize: true });
    },
    rssLink() {
      return 'https://feeds.fireside.fm/enjoy-the-vue/rss';
    },
    sponsor() {
      const sponsorEdge = this.$page.allSponsor.edges.filter(
        edge => edge.node['sponsor_name'] === this.$page.episode.sponsor
      )[0];

      return sponsorEdge.node;
    }
  }
};
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

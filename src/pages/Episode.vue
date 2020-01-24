<template>
  <Layout>
    <main class="episode">
      <section>
        <div class="episode__section-inner">
          <span class="episode__publishing-details">Episode {{ episodeNumber }} - {{ datePublished }}</span>
          <h1 class="episode__title">{{ episodeTitle }}</h1>

          <div>
            <media-player
              :cover-art-src="coverArtSrc"
            />
          </div>
        </div>
      </section>
      <section>
        <div class="episode__section-inner">
          <sponsorship-box v-bind="sponsor" />
        </div>
      </section>

      <section>
        <div class="episode__section-inner">
          <h2>Shownotes</h2>

          <div class="episode__shownotes">
            Vue CLI docs: https://cli.vuejs.org/guide/
          </div>
        </div>
      </section>

      <section>
        <div class="episode__section-inner">
          <h2>Our picks this week</h2>
          <panelists
            :panelists="panelists"
            class="episode__panelists"
          />
        </div>
      </section>

      <section>
        <div class="episode__section-inner">
          <h2>Transcript</h2>
          <div class="episode__transcript">
            {{ transcript }}
          </div>
        </div>
      </section>   
    </main>
  </Layout>
</template>
<script>
// MVP
// TODO: Figure out media player.
// // TODO: Make panelists picks look good/make sense.
// // TODO: Figure out transcript formatting.
// TODO: General styling...making it look good on mobile and desktop.
// TODO: Add sponsored by.
// TODO: generalize max-widths.

// NOT MVP
// TODO: Set up router to dynamically get the episode page based on url param.

import MediaPlayer from '../components/MediaPlayer.vue';
import SponsorshipBox from '../components/SponsorshipBox.vue';
import Panelists from '../components/Panelists.vue';
import data from '~/episode-data/episode-1.json';

export default {
  name: 'Episode',
  components: {
    MediaPlayer,
    SponsorshipBox,
    Panelists,
  },
  data() {
    return {
      episodeNumber: data.episodeNumber,
      episodeTitle: data.episodeTitle,
      panelists: data.panelists,
      transcript: data.transcript,
      datePublished: data.datePublished,
      sponsor: data.sponsor,
      coverArtSrc: data.coverArtSrc,
    };
  }
};
</script>
<style lang="scss">
@import '../styles/variables.scss';

.episode {
  color: white;

  &__section-inner {
    max-width: 780px;
    margin: auto;
    padding: 2rem;
  }

  &__publishing-details {
    opacity: 0.6;
    font-size: $body-font-sm;
    font-family: $font-secondary;
  }

  &__title {
    margin-top: 1rem;
  }

  &__panelists {
    justify-content: space-between;
  }

  &__shownotes,
  &__transcript {
    font-size: $body-font-sm;
    font-family: $font-secondary;
  }

  &__transcript {
    max-height: 500px;
    overflow: scroll;
  }
}
</style>
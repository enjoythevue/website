<script>
import EpisodePreview from '../components/EpisodePreview';

export default {
  metaInfo: {
    title: 'Episodes'
  },
  components: {
    EpisodePreview
  },
  computed: {
    sortedEpisodes() {
      // Cache the current time so we can compare to the publish date.
      const now = new Date();
      const nowISO = now.toISOString();

      return this.$page.allEpisode.edges
        .map(data => {
          return data.node;
        })
        .filter(node => {
          return nowISO >= node.date_published;
        })
        .sort((currentItem, nextItem) => {
          // Sort in descending order
          if (nextItem.episode_number < currentItem.episode_number) {
            return -1;
          } else if (nextItem.episode_number > currentItem.episode_number) {
            return 1;
          } else {
            return 0;
          }
        });
    }
  }
};
</script>

<template>
  <Layout>
    <main class="container episodes">
      <section class="container__section container__header">
        <div class="container__section-inner">
          <h1>Episodes</h1>
        </div>
      </section>

      <div class="container__section">
        <div class="container__section-inner">
          <h2>Most Recent</h2>
          <ul class="episode-list">
            <li
              v-for="episode in sortedEpisodes"
              :key="`episode-${episode.episode_number}-list-item`"
              class="episode-list-item"
            >
              <episode-preview :episode="episode" />
            </li>
          </ul>
        </div>
      </div>
    </main>
  </Layout>
</template>

<style lang="scss">
@import '../styles/layout.scss';

.episode-list {
  padding: 0;

  &-item {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

.episodes {
  color: white;
}
</style>

<page-query>
query {
  allEpisode {
    edges {
      node {
        date_published
        episode_number
        episode_title
        excerpt
      }
    }
  }
}
</page-query>

<template>
  <Layout>
    <main class="episode" style="margin-top: 0;">
      <section class="episode__section episode__header">
        <div class="episode__section-inner">
          <h1>Episodes</h1>
        </div>
      </section>

      <div class="episode__section">
        <div class="episode__section-inner">
          <h2>Most Recent</h2>
          <ul class="episode-list">
            <li
              v-for="episode in $page.allEpisode.edges"
              :key="`episode-${episode.node.episode_number}-list-item`"
              class="episode-list-item"
            >
              <episode-preview :episode="episode.node" />
            </li>
          </ul>
        </div>
      </div>
    </main>
  </Layout>
</template>

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

<script>
import EpisodePreview from '../components/EpisodePreview'

export default {
  metaInfo: {
    title: 'Episodes'
  },
  components: {
    EpisodePreview
  }
}
</script>

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
</style>

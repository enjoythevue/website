<template>
  <Layout>
    <main class="episode">
      <section class="episode__section episode__header">
        <div class="episode__section-inner">
          <h1>Episodes</h1>
        </div>
      </section>

      <div class="episode__section">
        <div class="episode__section-inner">
          <h2>Most Recent</h2>
          <ul>
            <li
              v-for="episode in $page.allEpisode.edges"
              :key="`episode-${episode.node.episode_number}-list-item`"
            >
              {{ episode.node.date_published }} <br />
              Episode #{{ episode.node.episode_number }}:
              {{ episode.node.episode_title }}
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
export default {
  metaInfo: {
    title: 'Episodes'
  }
}
</script>

<style lang="scss">
@import '../styles/layout.scss';
</style>

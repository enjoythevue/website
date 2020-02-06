<template>
  <Layout>
    <Section container="md" class="episodes">
      <h1>Episodes</h1>
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
    </Section>
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
.episodes {
  padding: 2rem;
  color: white;
  font-size: 2rem;
}
</style>

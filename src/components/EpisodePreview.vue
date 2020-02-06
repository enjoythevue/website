<script>
export default {
  name: 'EpisodePreview',
  props: {
    episode: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <section :class="$style['episode-preview']">
    <p :class="$style['episode-meta']">
      #{{ episode.episode_number }} - {{ episode.date_published }}
    </p>
    <g-link
      :class="$style['episode-link']"
      :to="`/episodes/${episode.episode_number}`"
    >
      <h3 :class="$style['episode-title']">{{ episode.episode_title }}</h3>
    </g-link>
  </section>
</template>

<style lang="scss" module>
.episode {
  &-link {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &-meta {
    margin-bottom: 1rem;
  }

  &-preview {
    border: 1px solid white;
    padding: 2rem;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  &-title {
    font-size: 2.5rem;
    margin-top: 0;
  }
}
</style>

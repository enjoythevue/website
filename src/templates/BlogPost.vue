<template>
  <Layout>
    <main class="blog-post">
      <section class="container__section container__header">
        <div class="container__section-inner">
          <span class="blog-post__publishing-details">
            {{ formattedDate }}</span
          >
          <h1 class="blog-post__title">{{ $page.blogPost.title }}</h1>
        </div>
      </section>

      <section class="container__section blog-post__article">
        <div
          class="container__section-inner"
          v-html="$page.blogPost.content"
        ></div>
      </section>
    </main>
  </Layout>
</template>

<script>
import { format } from 'date-fns';

export default {
  name: 'BlogPostDetail',
  metaInfo() {
    return {
      title: `${this.$page.blogPost.title}`
    };
  },
  computed: {
    formattedDate() {
      // Utilize date-fns formatting
      // https://date-fns.org/v2.9.0/docs/format
      return format(new Date(this.$page.blogPost.publish), 'PPPP');
    }
  }
};
</script>
<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';
@import '../styles/layout.scss';

.blog-post {
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
    font-size: 32px;
    margin-top: 1rem;
    margin-bottom: 0;
  }

  &__sponsorship {
    padding-bottom: 4rem;
    background: white;
    color: $dark-grey;
  }

  &__article {
    background: white;
    color: $dark-grey;
    font-size: 16px;

    a {
      @include link-primary-light-background;
    }
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

<page-query>
query ($id: ID!) {
  blogPost(id: $id) {
    title
    publish
    content
    slug
  }
}
</page-query>

<script>
import BlogPostPreview from '../components/BlogPostPreview';

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    BlogPostPreview
  }
};
</script>

<template>
  <Layout>
    <main class="container episodes">
      <section class="container__section container__header">
        <div class="container__section-inner">
          <h1>Blog</h1>
        </div>
      </section>

      <div class="container__section">
        <div class="container__section-inner">
          <h2>Most Recent</h2>
          <ul class="episode-list">
            <li
              v-for="blogPost in $page.allBlogPost.edges"
              :key="`blog-post-${blogPost.title}`"
              class="episode-list-item"
            >
              <blog-post-preview :post="blogPost.node" />
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
  allBlogPost {
    edges {
      node {
        content
        publish
        title
        slug
      }
    }
  }
}
</page-query>

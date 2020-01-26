<template>
  <Layout>
    <Section container="md" class="blog-posts">
      Episode list page, coming soon!
    </Section>
  </Layout>
</template>
<page-query>
query {
  posts: allEpisode {
    edges {
      node {
        id
        path
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
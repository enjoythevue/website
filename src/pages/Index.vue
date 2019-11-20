<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>The Vue Point</h1>

    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Your Name: <input type="text" name="name"/></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" required/></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
        >Gridsome Docs</a
      >
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

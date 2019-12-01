<template>
  <div class="layout">
    <slot/>
    <footer class="footer">

    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/buttons.scss';
@import '../styles/forms.scss';

body {
  font-family: $font-main;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-image: $gradient-dark;
  height: 100vh;
}

.layout {
  margin: 0 auto;
  display: flex;
}

h1 {
  font-size: 34px;
  line-height: 34px * 1.2;
}
</style>

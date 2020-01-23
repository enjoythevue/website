<template>
  <div>
    <audio controls="controls">
      <source src="" type="audio/ogg" />
      <source src="" type="audio/mpeg" />
    Your browser does not support the audio element.
    </audio>
  </div>
</template>
<script>
export default {
  name: 'MediaPlayer',
}
</script>
<style lang="scss">
@import '../styles/variables.scss';

  .media-player {
    height: 140px;
    width: 100%;
    background: $primary-green;
  }
</style>
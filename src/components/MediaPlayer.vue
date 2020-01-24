<template>
  <div class="media">
    <div class="media__cover">
      <g-image :src="coverArtSrc" />
    </div>
    <div class="media__controls">
      <div class="media__buttons">
        <button
          class="media__pause-play-button"
          @click="togglePlay"
        />
      </div>
      <div class="media__time-line">
        <div class="media__progress-line" />
      </div>
    </div>
    <audio 
      controls="controls"
      ref="player"
      style="display: none;"
    >
      <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/61062/compare_to_what.mp3" type="audio/mpeg" />
    </audio>
    <!-- <button>
      toggle pause play
    </button> -->
  </div>
</template>
<script>
export default {
  name: 'MediaPlayer',
  props: {
    coverArtSrc: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      player: null,
      isPlaying: false,
    }
  },
  mounted() {
    this.player = this.$refs.player;
  },
  methods: {
    togglePlay() {
      if (this.isPlaying) {
        this.player.pause();
        this.isPlaying = false;
      } else {
        this.player.play();
        this.isPlaying = true;
      }
    },
  },
};
</script>
<style lang="scss">
@import '../styles/variables.scss';

.media {
  display: flex;
  height: 140px;
  width: 100%;
  background: $secondary-green;
  box-shadow: 0px 0px 12px rgba(black, 0.8);

  &__cover {
    height: 100%;
    img { height: 100%; }
  }

  &__controls {
    flex-grow: 1;
    padding: 2rem;
  }

  &__buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  &__pause-play-button {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 0px 0px rgba(black, 0.4);
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 0; 
      height: 0; 
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-left: 8px solid $primary-green;
    }
  }

  &__time-line {
    background: darken($secondary-green, 10%);
    height: 6px;
  }

  &__progress-line {
    width: 40%;
    height: 100%;
    background: linear-gradient(to right, #35495d, #ec0561);
  }
}
</style>
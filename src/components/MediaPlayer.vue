<template>
  <div class="media">
    <div class="media__cover">
      <g-image :src="coverArtSrc" />
    </div>
    <div class="media__controls">
      <div class="media__player">
        <button
          class="media__pause-play-button"
          @click="togglePlay">
          <span :class="isPlaying ? 'pause-icon' : 'play-icon'" />
        </button>
        <div class="media__time-line">
          <div 
            :style="{transform: `translateX(-${100 - percentComplete}%)`}"
            class="media__progress-line"
          />
        </div>
      </div>
      <div class="media__bottom-area">
        <span class="media__current-time">4:48</span>
        <div class="media__links">
          <a 
            href="#"
            class="media__link">
          Share</a>
          <a 
            href="#" 
            class="media__link">
          Download</a>
          <a 
            :href="rssLink" 
            target="_blank"
            class="media__link"
          >Subscribe</a>
        </div>
      </div>

 
    </div>
    
    <audio 
      controls="controls"
      ref="player"
      style="display: none;"
    >
      <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/61062/compare_to_what.mp3" type="audio/mpeg" />
    </audio>
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
    rssLink: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      player: null,
      isPlaying: false,
      length: 0,
      currentTime: 0,
    }
  },
  computed: {
    percentComplete() {
			return parseInt(this.currentTime / this.length * 100);
    },
  },
  mounted() {
    this.player = this.$refs.player;
    this.player.addEventListener('loadeddata', this.onLoad);
    this.player.addEventListener('timeupdate', this.updateTime);
  },
  beforeDestroy() {
    this.player.removeEventListener('loadeddata', this.onLoad);
    this.player.removeEventListener('timeupdate', this.updateTime);
  },
  methods: {
    onLoad() {
      this.length = parseInt(this.player.duration);
    },
    updateTime() {
      this.currentTime = parseInt(this.player.currentTime);
    },
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
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
    align-content: space-between;
  }

  &__player {
    display: flex;
    align-items: center;
    width: 100%;
  }

  &__buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 2rem;
  }

  &__pause-play-button {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 0px 6px rgba(black, 0.4);
    background: linear-gradient(#a7305f, $bright-pink);;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-right: 2rem;
    cursor: pointer;

    .play-icon,
    .pause-icon {
      position: absolute;
    }

    .play-icon {
      width: 0; 
      height: 0; 
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-left: 8px solid white;
    }
    
    .pause-icon {
      height: 14px;
      width: 12px;
      display: flex;
      justify-content: space-between;
      
      &::before,
      &::after {
        content: '';
        height: 100%;
        width: 3px;
        background: white;
        display: block;
      }
    }
  }

  &__link {
    color: white;
    font-size: $body-font-sm;
    &:not(:first-child) {
      margin-left: 1rem;
    }
  }

  &__current-time {
    font-size: $body-font-sm;
    margin-left: 12px;
  }

  &__time-line {
    background: darken($secondary-green, 10%);
    height: 6px;
    overflow: hidden;
    border-radius: 10px;
    flex: 1;
  }

  &__progress-line {
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #35495d, $bright-pink);
    transition: transform 0.2s ease;
    border-radius: 10px;
  }

  &__bottom-area {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}
</style>
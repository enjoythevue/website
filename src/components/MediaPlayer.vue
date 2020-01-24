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
            v-if="sharingLink"
            :href="sharingLink"
          >Share</a>
          <a 
            v-if="downloadLink"
            :href="downloadLink" 
          >Download</a>
          <a 
            v-if="rssLink"
            :href="rssLink" 
            target="_blank"
          >Subscribe</a>
        </div>
      </div>
    </div>
    
    <!-- The actual audio player that is hidden from view -->
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
    downloadLink: {
      type: String,
      required: false,
      default: '',
    },
    sharingLink: {
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
  height: 80px;
  width: 100%;
  background: $secondary-green;
  box-shadow: 0px 0px 12px rgba(black, 0.2);

  @media (min-width: $breakpoint-sm) {
      height: 140px;
  }

  &__cover {
    height: 100%;
    img { height: 100%; }
  }

  &__controls {
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    align-content: space-between;

    @media (min-width: $breakpoint-sm) {
      padding: 2rem;
    }
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
    margin-right: 1rem;
    cursor: pointer;

    @media (min-width: $breakpoint-sm) {
      margin-right: 2rem;
    }

    .play-icon,
    .pause-icon {
      position: absolute;
      // this adjustment makes it look more centered.
      margin-top: 1px;
      margin-left: 1px;
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

  &__links {
    margin-left: auto;
    margin-top: -1rem;
    font-size: 1.2rem;

    a {
      color: white;
    }

    a:not(:first-child) {
      margin-left: 1rem;
    }

    @media (min-width: $breakpoint-sm) {
      margin-top: 0;
      font-size: $body-font-sm;
    }
  }

  &__current-time {
    font-size: $body-font-sm;
    margin-left: 12px;
    display: none;

    @media (min-width: $breakpoint-sm) {
      display: block;
    }
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
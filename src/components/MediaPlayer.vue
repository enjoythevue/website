<script>
import SpeakerIcon from '../image-components/SpeakerIcon';
export default {
  name: 'MediaPlayer',
  components: { SpeakerIcon },
  props: {
    coverArtSrc: {
      type: String,
      required: false,
      default: ''
    },
    episodeNumber: {
      type: Number,
      default: 0
    },
    rssLink: {
      type: String,
      required: false,
      default: ''
    },
    downloadLink: {
      type: String,
      required: false,
      default: ''
    },
    sharingLink: {
      type: String,
      required: false,
      default: ''
    },
    audioLink: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      player: {
        volume: 1
      },
      isPlaying: false,
      duration: 0,
      currentTime: 0,
      playbackRate: 1
    };
  },
  computed: {
    episodeLabel() {
      return `enjoy-the-view-episode-${this.episodeNumber}`;
    },
    percentComplete() {
      return parseFloat((this.currentTime / this.duration) * 100).toFixed(4);
    },
    formattedCurrentTime() {
      return this.formatTime(this.currentTime);
    },
    formattedDuration() {
      return this.formatTime(this.duration);
    },
    lastPlayedLabel() {
      return `${this.episodeLabel}-last-played`;
    }
  },
  watch: {
    currentTime(newVal) {
      window.localStorage.setItem(this.lastPlayedLabel, newVal);
    }
  },
  mounted() {
    this.player = this.$refs.player;

    this.player.currentTime =
      window.localStorage.getItem(this.lastPlayedLabel) || 0;
    this.player.addEventListener('loadeddata', this.onLoad);
    this.player.addEventListener('timeupdate', this.updateTime);
  },
  beforeDestroy() {
    this.player.removeEventListener('loadeddata', this.onLoad);
    this.player.removeEventListener('timeupdate', this.updateTime);
  },
  methods: {
    onLoad() {
      this.duration = parseInt(this.player.duration);
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
    formatTime(totalSeconds) {
      const hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      // Format them
      const displayHours = hours ? `${hours.toString().padStart(2, '0')}:` : '';
      const displayMinutes = minutes.toString().padStart(2, '0');
      const displaySeconds = seconds.toString().padStart(2, '0');
      return `${displayHours}${displayMinutes}:${displaySeconds}`;
    },
    changePlaybackRate() {
      if (this.player.playbackRate === 2) {
        this.player.playbackRate = 0.5;
        this.playbackRate = 0.5;
      } else {
        this.playbackRate = this.player.playbackRate + 0.5;
        this.player.playbackRate = this.player.playbackRate + 0.5;
      }
    },
    setCurrentTime(time) {
      this.player.currentTime = time;
    },
    skipToTime(e) {
      let lineWidth = this.$refs.timeLine.clientWidth;
      let clickPosition = e.offsetX;
      let newTime = Math.round((clickPosition / lineWidth) * this.duration);
      this.setCurrentTime(newTime);
    }
  }
};
</script>
<template>
  <div class="media">
    <div class="media__cover">
      <g-image :src="coverArtSrc" />
    </div>
    <div class="media__controls">
      <div class="media__player">
        <button
          title="playback rate"
          class="media__pause-play-button"
          @click="togglePlay"
        >
          <span :class="isPlaying ? 'pause-icon' : 'play-icon'" />
        </button>
        <div class="media__time-line" @click="skipToTime" ref="timeLine">
          <div
            :style="{ width: `${percentComplete}%` }"
            class="media__progress-line"
          />
        </div>
      </div>
      <div class="media__bottom-area">
        <span class="media__current-time"
          >{{ formattedCurrentTime }} / {{ formattedDuration }}</span
        >
        <button @click="changePlaybackRate" class="media__playback-rate-button">
          {{ playbackRate }}x
        </button>
        <SpeakerIcon class="media__speaker-icon" />
        <input
          class="media__volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          v-model="player.volume"
        />
        <div class="media__links">
          <a v-if="sharingLink" :href="sharingLink">Share</a>
          <a v-if="downloadLink" :href="downloadLink">Download</a>
          <a v-if="rssLink" :href="rssLink" target="_blank">Subscribe</a>
        </div>
      </div>
    </div>

    <!-- The actual audio player that is hidden from view -->
    <audio ref="player" style="display: none;" :src="audioLink"></audio>
  </div>
</template>

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
    img {
      height: 100%;
    }
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
    background: white;
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
    }

    .play-icon {
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-left: 8px solid $bright-pink;
      margin-left: 1px;
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
        background: $bright-pink;
        display: block;
      }
    }
  }

  &__playback-rate-button {
    width: 3rem;
    padding: 0 2px;
    margin-top: -1rem;
    margin-left: 55px;

    color: white;
    border: none;
    background: transparent;
    cursor: pointer;

    @media (min-width: $breakpoint-sm) {
      font-size: $body-font-sm;
      margin-top: 0;
      margin-left: 2rem;
      display: block;
    }
  }

  &__speaker-icon {
    width: 20px;
    margin-left: 2rem;
    display: none;

    @media (min-width: $breakpoint-sm) {
      display: block;
    }
  }
  &__volume {
    margin-left: 0.5rem;
    display: none;

    @media (min-width: $breakpoint-sm) {
      display: block;
    }
  }

  input[type='range'] {
    -webkit-appearance: none;
    background: transparent;
    width: 85px;

    // Chrome
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0px 0px 6px rgba(black, 0.4);
      cursor: pointer;
      margin-top: -6px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    }
    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 4px;
      cursor: pointer;
      background: darken($secondary-green, 10%);
      border-radius: 2px;
    }

    // Firefox
    &::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0px 0px 6px rgba(black, 0.4);
      cursor: pointer;
    }

    &::-moz-range-track {
      width: 100%;
      height: 4px;
      cursor: pointer;
      background: darken($secondary-green, 10%);
      border-radius: 2px;
    }

    // IE
    &::-ms-track {
      width: 100%;
      height: 4px;
      cursor: pointer;
      background: transparent;
      border-radius: 2px;
    }
    &::-ms-fill-lower {
      background: darken($secondary-green, 10%);
      border-radius: 2px;
    }
    &::-ms-fill-upper {
      background: darken($secondary-green, 10%);
      border-radius: 2px;
    }
    &::-ms-thumb {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0px 0px 6px rgba(black, 0.4);
      cursor: pointer;
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
    position: absolute;
    // font-size: $body-font-sm;
    margin-top: -5rem;
    margin-left: 60px;

    @media (min-width: $breakpoint-sm) {
      position: relative;
      font-size: $body-font-sm;
      display: block;
      margin-top: 0;
      margin-left: 12px;
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
    height: 100%;
    background: $bright-pink;
  }

  &__bottom-area {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}
</style>

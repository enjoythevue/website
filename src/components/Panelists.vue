<template>
  <div class="panelists__container">
    <div
      v-for="panelist in renderedPanelists"
      :key="panelist.name"
      class="panelists__person"
    >
      <div class="panelists__person-img-container">
        <g-image
          v-if="panelist.image"
          :src="panelist.image"
          :alt="`Picture of ${panelist.name}`"
        />
        <div v-else class="panelists__person-img-fallback" />
      </div>
      <a
        v-if="panelist.website"
        :href="panelist.website"
        class="panelists__person-name is-link"
      >
        {{ panelist.name }}
      </a>
      <p v-else class="panelists__person-name">
        {{ panelist.name }}
      </p>

      <div
        v-if="panelist.picks && panelist.picks.length"
        class="panelists__picks"
      >
        <ul>
          <li
            v-for="(pick, index) in panelist.picks"
            :key="`${pick.person}-${index}`"
            class="episode-pick"
            :data-person="`${panelist.name}`"
          >
            <a v-if="pick.website" :href="pick.website" target="_blank">{{
              pick.title
            }}</a>
            <span v-else>{{ pick.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<static-query>
query {
  posts: allPanelist {
    edges {
      node {
				path
				name
				website
				image
        current
      }
    }
  }
}
</static-query>
<script>
import shuffle from 'lodash/shuffle';

export default {
  name: 'Panelists',
  props: {
    picks: {
      type: Object,
      required: false,
      default: () => {}
    },
    onlyShowPanelistsWithPicks: {
      type: Boolean,
      required: false,
      default: false
    },
    onlyShowCurrentPanelists: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    allPanelists() {
      const allPanelists = this.$static.posts.edges
        .map(panelist => {
          console.log(panelist.node)
          const name = panelist.node.name;
          const image = panelist.node.image;
          const website = panelist.node.website;
          const firstName = name.replace(/ .*/, '').toLowerCase();
          const picks = this.picks ? this.picks[firstName] : [];
          const current = panelist.node.current;
          return { name, image, website, picks, current };
        })
        .sort((a, b) => {
          // sort in alphabetical order
          return a.name > b.name ? 1 : -1;
        });
      return allPanelists;
    },
    panelistsWithPicks() {
      return this.allPanelists.filter(panelist => panelist.picks);
    },
    currentPanelists() {
      return this.allPanelists.filter(panelist => panelist.current);
    },
    renderedPanelists() {
      if (this.onlyShowPanelistsWithPicks) return this.panelistsWithPicks;
      if (this.onlyShowCurrentPanelists) return this.currentPanelists;
      return this.allPanelists;
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.panelists {
  &__container {
    display: flex;
    flex-wrap: wrap;
  }

  &__person {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 50%;

    &:nth-child(1),
    &:nth-child(2) {
      margin-bottom: 2rem;
    }

    @media (min-width: 530px) {
      width: 100px;

      &:not(:last-child) {
        margin-right: 1rem;
      }

      &:nth-child(1),
      &:nth-child(2) {
        margin-bottom: 0;
      }
    }

    @media (min-width: 600px) {
      width: 120px;
    }

    @media (min-width: 840px) {
      width: 180px;
    }
  }

  &__person-img-container {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1rem;
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  &__person-img-fallback {
    background: $light-grey;
    height: 100%;
    width: 100%;
    margin-bottom: 1rem;
  }

  &__person-name {
    color: $primary-green;
    font-size: $body-font-md;
    font-family: $font-secondary;
    margin: 0;

    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }

    &.is-link {
      @include link-primary;
      cursor: pointer;
    }
  }

  &__picks {
    font-size: $body-font-sm;
    z-index: 2;

    ul {
      list-style-type: none;
      padding: 0;
      margin-left: 10px;
    }

    li {
      font-family: $font-secondary;

      &::before {
        content: '-';
        margin-right: 4px;
        margin-left: -10px;
      }
    }
  }
}
</style>

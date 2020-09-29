<template>
  <div ref="root" class="form search-form" v-bind:class="{ open: openSuggestion }">
    <input
      class="form__input search-form__input"
      v-bind="inputProps"
      v-model="value"
      @keydown.enter="enter"
      @keydown.down="down"
      @keydown.up="up"
      @input="change"
      placeholder="Search for episode"
      type="search"
    />
    <ul
      ref="resultList"
      class="tag-list dropdown-menu"
      v-if="this.open != false && this.value != ''"
    >
      <li
        v-for="(tag, index) in this.dropdownValues"
        :key="`tag-${tag}-list-item`"
        class="tag-list-item"
        v-bind:class="{ active: isActive(index) }"
        @click="suggestionClick(index)"
      >
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      open: false,
      current: -1
    };
  },
  props: {
    allEpisodes: {
      type: Array,
      required: true
    }
  },
  computed: {
    dropdownValues() {
      let values = [];
      this.allEpisodes.map(episode => {
        const title = episode.episode_title;

        if (episode.tags) {
          const tags = episode.tags.map(tag => {
            values.push(tag);
          });
        }

        values.push(title);
      });

      return this.distinct(values).filter(value =>
        value.toLowerCase().includes(this.value.toLowerCase())
      );
    },
    inputProps() {
      return {
        class: '',
        value: this.value,
        role: 'combobox',
        autocomplete: 'off',
        autocapitalize: 'off',
        autocorrect: 'off',
        spellcheck: 'false',
        'aria-autocomplete': 'list',
        'aria-haspopup': 'listbox'
      };
    },
    openSuggestion() {
      return (
        this.value !== '' &&
        this.dropdownValues.length != 0 &&
        this.open === true
      );
    }
  },
  methods: {
    search() {
      if (this.value.length < 1) {
        this.$emit('update:result', this.allEpisodes);
      }

      let filteredEpisodes = this.allEpisodes.filter(episode => {
        return (
          episode.tags.includes(this.value.toLowerCase()) ||
          episode.episode_title.toLowerCase().includes(this.value.toLowerCase())
        )
      });

      this.current = -1;
      this.$emit('update:result', filteredEpisodes);
    },
    distinct(list) {
      var u = {},
        a = [];
      for (var i = 0, l = list.length; i < l; ++i) {
        if (!u.hasOwnProperty(list[i])) {
          a.push(list[i]);
          u[list[i]] = 1;
        }
      }
      return a;
    },
    enter() {
      let selected = this.dropdownValues[this.current];
      this.open = false;

      if (selected) {
        this.value = selected;
      }

      this.search();
    },
    up() {
      if (this.current > 0) this.current--;
    },
    down() {
      if (this.current < this.dropdownValues.length - 1) this.current++;
    },
    isActive(index) {
      return index === this.current;
    },
    change() {
      if (this.open == false) {
        this.open = true;
      }
      
      this.search();
    },
    suggestionClick(index) {
      this.value = this.dropdownValues[index];
      this.open = false;
      this.search();
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/forms.scss';
@import '../styles/buttons.scss';

.dropdown-menu {
  border: none;
  border-radius: 4px;
  color: $text-dark;
  background: white;
  border: 2px solid $secondary-green;
  font-size: inherit;
  font-family: inherit;
  width: 100%;
  max-height: 40rem;
  overflow: scroll;
  display: block;
  padding-left: 0;
  padding: 0.5rem 0;
  margin: 0;
  font-size: $body-font-sm;

  .tag-list {
    width: 100%;

    &-item {
      list-style: none;
      padding: 0.5rem 1rem 0.5rem 1rem;
      vertical-align: middle;
    }
  }
  .active {
    background: #bababa;
    border-radius: 2px;
  }
}
</style>

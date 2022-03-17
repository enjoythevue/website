<script>
const KOFI_SCRIPT = `https://storage.ko-fi.com/cdn/widget/Widget_2.js`;
const KOFI_ID = 'C0C86NYJW';

export default {
  name: 'KofiButton',
  metaInfo() {
    return {
      script: [
        {
          src: KOFI_SCRIPT,
          body: true
        }
      ]
    };
  },
  props: {
    text: {
      type: String,
      default: 'Support Us on Ko-fi!'
    },
    color: {
      type: String,
      default: '#2c8a60'
    }
  },
  data() {
    return {
      kofiLink: `<a href='https://ko-fi.com/${KOFI_ID}' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi4.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>`
    };
  },
  methods: {
    async getKofi() {
      if (window) {
        // make sure the dom is loaded.
        await this.$nextTick();
        // find our script we are loading.
        const kofiWidgetScript = document.querySelector(
          `script[src="${KOFI_SCRIPT}"]`
        );
        console.log(kofiWidgetScript);
        // make sure it is loaded.
        kofiWidgetScript.addEventListener('load', (e) => {
          // set the button.
          console.log('ko-fi load: ',e);
          kofiwidget2.init(this.text, this.color, KOFI_ID);
          this.kofiLink = kofiwidget2.getHTML();
        });
      }
    }
  },
  mounted() {
    this.getKofi();
  },
  updated() {
    this.getKofi();
  }
};
</script>

<template>
  <span v-html="kofiLink"></span>
</template>

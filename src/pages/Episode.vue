<template>
  <Layout>
    <main class="episode">
      <section>
        <div class="episode__section-inner">
          <span class="episode__publishing-details">Episode {{ episodeNumber }} - {{ datePublished }}</span>
          <h1 class="episode__title">{{ title }}</h1>

          <div>
            <media-player />
          </div>
        </div>
      </section>

      <section>
        <div class="episode__section-inner">
          <h2>Shownotes</h2>

          <div class="episode__shownotes">
            Vue CLI docs: https://cli.vuejs.org/guide/
          </div>
        </div>
      </section>

      <section>
        <div class="episode__section-inner">
          <h2>Hosts and picks</h2>
          <panelists :panelists="panelists" />
        </div>
      </section>

      <section>
        <div class="episode__section-inner">
          <h2>Transcript</h2>
          <div class="episode__transcript">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo donec enim. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Varius duis at consectetur lorem. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Risus feugiat in ante metus dictum at tempor. Lacinia at quis risus sed vulputate. In ante metus dictum at. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Pulvinar proin gravida hendrerit lectus a. Hendrerit dolor magna eget est lorem ipsum dolor sit. Sodales ut etiam sit amet nisl purus in mollis nunc.
            Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Morbi quis commodo odio aenean sed. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Ipsum consequat nisl vel pretium lectus quam id leo. Velit egestas dui id ornare arcu odio ut sem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Purus non enim praesent elementum. In nisl nisi scelerisque eu ultrices vitae auctor eu. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies.
            Fermentum et sollicitudin ac orci phasellus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Lacus sed turpis tincidunt id aliquet risus. Integer vitae justo eget magna. Ut tellus elementum sagittis vitae et leo duis ut. Lacinia at quis risus sed. Morbi tristique senectus et netus et. Maecenas ultricies mi eget mauris. Faucibus turpis in eu mi bibendum neque egestas congue. Nibh mauris cursus mattis molestie a iaculis at. Elit sed vulputate mi sit amet mauris commodo quis. Est ante in nibh mauris. Amet porttitor eget dolor morbi non arcu risus.
            Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Lectus magna fringilla urna porttitor rhoncus. Morbi blandit cursus risus at ultrices mi tempus. Massa massa ultricies mi quis hendrerit dolor magna eget est. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Convallis convallis tellus id interdum velit laoreet id donec. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Netus et malesuada fames ac turpis egestas integer. Venenatis cras sed felis eget velit aliquet sagittis id. Egestas integer eget aliquet nibh praesent. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Neque aliquam vestibulum morbi blandit cursus risus. Sed odio morbi quis commodo odio aenean. Diam maecenas ultricies mi eget mauris pharetra et. Enim tortor at auctor urna. Pellentesque dignissim enim sit amet venenatis urna. Urna molestie at elementum eu facilisis sed odio morbi quis. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Quam quisque id diam vel quam elementum.
          </div>
        </div>
      </section>   
    </main>
  </Layout>
</template>
<script>
// MAIN TODOS:
// TODO: Replace mock data with actual data.
// TODO: Figure out media player...embedded or make our own? Connect media files and make sure analytics are coming throughbundleRenderer.renderToStream
// TODO: Set up router to dynamically get the episode page based on url param.
// TODO: Make panelists picks look good/make sense.
// TODO: Figure out transcript formatting.
// TODO: General styling...making it look good on mobile and desktop.

import MediaPlayer from '../components/MediaPlayer.vue';
import Panelists from '../components/Panelists.vue';

export default {
  name: 'Episode',
  components: {
    MediaPlayer,
    Panelists,
  },
  data() {
    return {
      title: 'Vue CLI',
      episodeNumber: '2',
      datePublished: 'January 21, 2020',
      panelists: [
        {
          name: 'Chris Fritz',
          img: 'images/chris-bio.jpeg',
          website: 'https://twitter.com/chrisvfritz',
          picks: [
            {
              content: '<a href="#">Link</a> to Pick one',
              uuid: 'a',
            },
            {
              content: 'Pick two',
              uuid: 'b',
            },
          ],
        },
        {
          name: 'Ben Hong',
          img: 'images/ben-bio.jpeg',
          website: 'https://twitter.com/bencodezen',
          picks: [
            {
              content: 'Pick one',
              uuid: 'a',
            },
            {
              content: '<a href="#">Link</a> Pick two',
              uuid: 'b',
            },
          ],
        },
        {
          name: 'Ari Clark',
          img: 'images/ari-bio.jpeg',
          website: 'https://twitter.com/gloomyLumi',
          picks: [
            {
              content: 'Pick one',
              uuid: 'a',
            }
          ],
        },
        {
          name: 'Elizabeth Fine',
          img: 'images/elizabeth-bio.jpeg',
          website: 'https://twitter.com/elizabethfine4',
          picks: [
            {
             content: 'Pick one',
             uuid: 'a',
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import '../styles/variables.scss';

.episode {
  color: white;

  &__section-inner {
    /* 
    * TODO: Maybe we should make this a variable or make some global
    * section-inner mixin so we can keep the 
    * section max-widths/padding/margins consistent.
    */
    max-width: 780px;
    margin: auto;
    padding: 2rem;
  }

  &__publishing-details {
    opacity: 0.8;
    font-size: $body-font-sm;
    font-family: $font-secondary;
  }

  &__title {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  &__shownotes,
  &__transcript {
    font-size: $body-font-sm;
  }
}
</style>
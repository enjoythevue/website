import * as marked from 'marked';

/** @jsx h */

export default window.createClass({
  render() {
    const { entry } = this.props;
    const episodeTitle = entry.getIn(['data', 'episode-title']);
    const episodeNumber = entry.getIn(['data', 'episode-number']);
    const compiledShownotes = marked(entry.getIn(['data', 'shownotes']), { sanitize: true });
    const compiledTranscript = marked(entry.getIn(['data', 'transcript']), { sanitize: true });
    return (<div className={'layout'}>
      <main className={'episode'}>
        <section className={'container__section container__header'}>
          <div className={'container__section-inner'}>
          <span className={'episode__publishing-details'}>
            Episode {episodeNumber}
          </span>
            <h1 className={'episode__title'}>{episodeTitle}</h1>
          </div>
          <div>Media player</div>
        </section>
        <section className={'container__section episode__shownotes'}>
          <div className={'container__section-inner'}>
            <h2>Shownotes</h2>
            <div
              className={'episode__shownotes-content'}
              dangerouslySetInnerHTML={{ __html: compiledShownotes }}
            />
          </div>
        </section>
        <section
          className={'container__section episode__picks'}>
          <div className={'container__section-inner'}>
            <h2>Our picks this week</h2>

          </div>
        </section>
        <section className={'container__section'}>
          <div className={'container__section-inner'}>
            <h2>Transcript</h2>
            <div className={'episode__transcript'}
                 dangerouslySetInnerHTML={{ __html: compiledTranscript }} />
          </div>
        </section>
      </main>
    </div>);
  }
});

import { connect } from 'react-redux';

// function Counters({ chars, words, sentences, paragraphs }: { chars: number, words: number, sentences: number, paragraphs: number }) {
function Counters({ counters }: any) {

  return (
    <div className="Counters">
      Characters: {counters.chars}
      Words: {counters.words}
      Sentences: {counters.sentences}
      Paragraphs: {counters.paragraphs}
    </div>
  );
}

const MapStateToProps = (state: any) => ({
  counters: state.counters
});

export default connect(MapStateToProps)(Counters);

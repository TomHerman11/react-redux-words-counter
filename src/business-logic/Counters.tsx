import { connect } from 'react-redux';
import './Counters.css'

function Counters({ counters }: any) {

  return (
    <div className="Counters">
      <div className="Counter">
        Characters: {counters.chars}
      </div>
      <div className="Counter">
        Words: {counters.words}
      </div>
      <div className="Counter">
        Sentences: {counters.sentences}
      </div>
      <div className="Counter">
        Paragraphs: {counters.paragraphs}
      </div>
    </div>
  );
}

const MapStateToProps = (state: any) => ({
  counters: state.counters
});

export default connect(MapStateToProps)(Counters);

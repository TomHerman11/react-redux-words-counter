import Textarea from './business-logic/Textarea';
import Counters from './business-logic/Counters';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Words Counter</h2>
      </div>
      <Textarea />
      <Counters />
    </div>
  );
}

export default App;

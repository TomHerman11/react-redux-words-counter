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
      <a
        id="background-credit"
        href="http://www.freepik.com"
        target="_blank"
      >Background image is designed by macrovector / Freepik</a>
    </div>
  );
}

export default App;

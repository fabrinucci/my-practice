import { Effect } from './primitivas/Effect.jsx';
import { Signals } from './primitivas/Signals.jsx';
import './App.css';
import { Memo } from './primitivas/Memo.jsx';

function App() {
  return (
    <div class='App'>
      <Signals />
      <Effect />
      <Memo />
    </div>
  );
}

export default App;

import { createSignal } from 'solid-js';

export function Signals() {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <h1>Signals</h1>
      <h3>Count: {count()}</h3>
      <button onClick={() => setCount(count() - 1)}>-1</button>
      <button onClick={() => setCount(count() + 1)}>+1</button>
    </div>
  );
}

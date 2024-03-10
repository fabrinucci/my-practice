import { createEffect, createMemo, createSignal } from 'solid-js';

export function Memo() {
  const [count, setCount] = createSignal(0);

  // Signals Derivadas
  const doubleCount = () => count() * 2;

  // Signals Memoizadas
  const isDivisibleByThree = createMemo(() => count() % 3 === 0);

  createEffect(() => {
    console.log('count changed', count());
  });

  createEffect(() => {
    console.log('isDivisibleByThree changed', isDivisibleByThree());
  });

  return (
    <div>
      <h1>Memo</h1>
      <h2>Count: {count()}</h2>
      <h2>Double: {doubleCount()}</h2>
      <h2>Is divisible by three: {isDivisibleByThree() ? 'Yes' : 'No'}</h2>
      <button onClick={() => setCount(count() + 1)}>{count()}</button>
    </div>
  );
}

import { createEffect, createSignal } from 'solid-js';

export function Effect() {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    console.log('El contador ha cambiado:', count());
  });

  return (
    <div>
      <h1>Effect</h1>
      <h3>Count: {count()}</h3>
      <button onClick={() => setCount(count() - 1)}>-1</button>
      <button onClick={() => setCount(count() + 1)}>+1</button>
    </div>
  );
}

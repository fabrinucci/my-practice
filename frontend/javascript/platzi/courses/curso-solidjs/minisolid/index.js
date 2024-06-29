import { createSignal } from './solid.js';

const [count, setCount] = createSignal(0);

document.querySelector('button').addEventListener('click', () => {
  setCount((c) => c + 1);
});
